import { Button as ZLButton } from 'antd';
import { executeFunctionFromString, isRender } from '../../../../../utils/nodeUtils';

function Button(props: any) {
  const { caption, danger, disabled, ghost, shape, size, comStyle = {}, onClick } = props

  const handleOnClick = ()=>{
    if(!isRender()) {
      return
    }
    onClick && executeFunctionFromString(onClick)
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
        {caption || '按钮'}
      </ZLButton>
    </div>
  )
}

export default Button