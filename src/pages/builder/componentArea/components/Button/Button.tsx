import { Button as ZLButton } from 'antd';
import { BaseCaptionComponentProps } from '../../../../../types/common';
import { executeFunctionFromString, isRender } from '../../../../../utils/nodeUtils';
import { useState } from 'react';

interface ButtonProps extends BaseCaptionComponentProps {
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  shape?: 'default' | 'circle' | 'round';
  size?: 'large' | 'middle' | 'small';
  onClick?: string;
}

function Button(props: ButtonProps) {
  const { caption, danger, disabled, ghost, shape, size, comStyle = {}, onClick, comId } = props

  const [buttonCaption, setCaption] = useState(caption)

  const handleOnClick = ()=>{
    if(!isRender()) {
      return
    }
    onClick && executeFunctionFromString(onClick)
  }

  if (isRender()) {
    const buttonNode = window.getNodeById(comId)
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

