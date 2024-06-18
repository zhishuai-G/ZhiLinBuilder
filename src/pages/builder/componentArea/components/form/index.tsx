import { Button, Form as ZLForm, message } from "antd"
import { createCom, getComById } from "../../../../../utils/nodeUtils"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setComList } from "../../../../../store/slices/comSlice"
import axios from "axios"

export default function Form(props: any) {
  const comReducer = useSelector((state: any) => state.comReducer)
  const dispatch = useDispatch()

  const comList = JSON.parse(JSON.stringify(comReducer.comList))  // 拖拽到画布区的组件的集合

  const { children, disabled, labelAlign, size, colon, labelWrap, comStyle = {}, tableObj = {}, comId } = props
  const { tableCode = '', columns = [] } = tableObj
  const formNode = getComById(comId, comList); // 找到当前选中的表单对象

  const handleSubmit = async () => {
    const childList = formNode.childList || []
    if (tableCode) {
      const columnsData = childList?.map((item: any) => {
        return {
          key: item?.label,
          value: item?.value
        }
      })
      const res = await axios.post('/api/data-base/addEntityData', { tableCode, columnsData }).then(res => res.data)
      if (res?.code === 200) {
        message.success('实体数据添加成功')
      } else {
        message.error('实体数据添加失败')
      }
    }
  }

// 监听tableCode（数据表）的变化，如果变化了，则重新生成表单
useEffect(() => {
  if (tableCode && columns.length > 0) {
    if (formNode?.childList) {
      return
    }
    formNode.childList = []
    const inputList = columns.map((item: any) => {
      return createCom({ name: 'Input', caption: item.columnName, label: item.columnName })
    })
    formNode.childList.push(...inputList)
    dispatch(setComList(comList))
  }
}, [tableCode])

return (
  <div>
    <ZLForm
      style={{ width: '400px', height: '400px', border: ' 1px solid blue', marginBottom: '0px', ...comStyle }}
      disabled={disabled}
      labelAlign={labelAlign}
      labelWrap={labelWrap}
      size={size}
      colon={colon}
    >
      {
        children && children.map((item: any) => {
          return (
            <ZLForm.Item label={getComById(item.key, comList)?.label}>
              {item}
            </ZLForm.Item>
          )
        })
      }
    </ZLForm>
    {tableCode && <Button onClick={handleSubmit} style={{ float: "right" }} type="primary">保存</Button>}
  </div>
)
}
