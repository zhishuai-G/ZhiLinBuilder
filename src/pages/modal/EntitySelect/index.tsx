import { Modal, Select } from "antd";
import { getComById } from "../../../utils/nodeUtils";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setComList } from "../../../store/slices/comSlice";
import { useState } from "react";


export default function EntitySelect(props: any) {
  const comReducer = useSelector((state: any) => state.comReducer)
  const dispatch = useDispatch()

  const comList = JSON.parse(JSON.stringify(comReducer.comList))  // 拖拽到画布区的组件的集合
  const selectCom = comReducer.selectCom // 在画布区点击选中的组件的comId
  const selectComNode = getComById(selectCom, comList) // 在画布区点击选中的组件的对象

  const { isModalOpen, setIsModalOpen } = props
  const [selectEntity, setSelectEntity] = useState('')
  const [entityDataList, setEntityDataList] = useState([])
  const [tableObj, setTableObj] = useState({})

  console.log(entityDataList);

  // 公共方法，初始化所有数据
  const initDataSource = async () => {
    const res = await axios.get('/api/data-base/getDataForTables').then(res => res.data)
    if (res?.code === 200) {
      const data = res.data
      setEntityDataList(data)
    }
  }

  const getOptions = () => {
    let options = []
    options = entityDataList.map((item: any) => {
      return {
        label: item.tableName,
        value: item.tableCode
      }
    })
    return options
  }

  const handleAfterOpenChange = () => {
    initDataSource()
  }

  const handleOk = () => {
    // 把实体对象挂载到当前选中的表格节点上
    selectComNode.tableObj = tableObj
    // 更新数据
    dispatch(setComList(comList))
    setSelectEntity('')
    setTableObj({})
    setIsModalOpen(false)
  };

  const handleCancel = () => {
    setSelectEntity('')
    setTableObj({})
    setIsModalOpen(false)
  };

  const changeEntity = (value: any) => {
    entityDataList.some((item: any) => {
      if (item?.tableCode === value) {
        setTableObj(item)
      }
    })
    setSelectEntity(value)
  }

  return (
    <Modal closable={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} afterOpenChange={handleAfterOpenChange}>
      <div style={{ width: 250, display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ marginTop: '5px', fontWeight: 1000 }}>选择实体:</div>
        <Select onChange={changeEntity} value={selectEntity} style={{ width: 150 }} options={getOptions()}></Select>
      </div>
    </Modal>
  )
}
