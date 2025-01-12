import { Input as ZLInput } from 'antd';
import { useState } from 'react';
import { BaseComponentProps } from '../../../../../types/common';
import { getComById } from '../../../../../utils/nodeUtils';
import { useDispatch, useSelector } from 'react-redux';
import { setComList } from '../../../../../store/slices/comSlice';

interface InputProps extends BaseComponentProps {
  addonBefore?: string;
  addonAfter?: string;
  allowClear?: boolean;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  label?: string;
}

function Input(props: InputProps) {
  const { addonBefore, addonAfter, allowClear, defaultValue, value, disabled, comStyle = {}, comId } = props;
  const [showValue, setShowValue] = useState(value || defaultValue);

  const dispatch = useDispatch();
  const comList = useSelector((state: any) => JSON.parse(JSON.stringify(state.comReducer.comList)));

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNode = getComById(comId, comList);
    inputNode.value = e.target.value;
    dispatch(setComList(comList));
    setShowValue(e.target.value);
  };

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
  );
}

export default Input;