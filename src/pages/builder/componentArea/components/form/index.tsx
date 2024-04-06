import { Form as ZLForm } from "antd"
import { getComById } from "../../../../../utils/nodeUtils"
import { useSelector } from "react-redux"

export default function Form(props: any) {
  const comReducer = useSelector((state: any) => state.comReducer)

  const comList = JSON.parse(JSON.stringify(comReducer.comList))  // 拖拽到画布区的组件的集合

  const { children, disabled, labelAlign, size, colon, labelWrap, comStyle = {} } = props

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
    </div>
  )
}
