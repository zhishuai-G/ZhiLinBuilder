import { Button as ZLButton } from 'antd';
import { executeFunctionFromString, isRender } from '../../../../../utils/nodeUtils';
import { useState } from 'react';

function Button(props: any) {
  const { caption, danger, disabled, ghost, shape, size, comStyle = {}, onClick, comId } = props

  const [buttonCaption, setCaption] = useState(caption)

  const handleOnClick = ()=>{
    if(!isRender()) {
      return
    }
    onClick && executeFunctionFromString(onClick)
  }

  if (isRender()) {
    let buttonNode = window.getNodeById(comId)
    if (buttonNode) {
      buttonNode.setCaption = setCaption
    }
  }

  return (
    <div>
      <ZLButton
        style={comStyle}
        danger={danger}
        disabled={disabled}
        ghost={ghost}
        shape={shape}
        size={size}
        onClick={handleOnClick}
      >
        {buttonCaption || '按钮'}
      </ZLButton>
    </div>
  )
}

export default Button

