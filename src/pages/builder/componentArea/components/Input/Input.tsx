import { Input as ZLInput } from 'antd';
import { useState } from 'react';
import { getComById } from '../../../../../utils/nodeUtils';
import { useDispatch, useSelector } from 'react-redux';
import { setComList } from '../../../../../store/slices/comSlice';

function Input(props: any) {
  const comReducer = useSelector((state: any) => state.comReducer)
  const dispatch = useDispatch()
  
  const comList = JSON.parse(JSON.stringify(comReducer.comList))  // 拖拽到画布区的组件的集合

  const { addonBefore, addonAfter, allowClear, defaultValue, value, disabled, comStyle = {}, comId } = props
  const [showValue, setShowValue] = useState(value || defaultValue)

  const handleOnChange = (e: any) => {
    const inputNode = getComById(comId, comList)
    inputNode.value = e.target.value
    dispatch(setComList(comList))
    setShowValue(e.target.value)
  }

  return (
    <div>
      <ZLInput
        style={comStyle}
        value={showValue}
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        allowClear={allowClear}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={handleOnChange}
      />
    </div>
  )
}

export default Input