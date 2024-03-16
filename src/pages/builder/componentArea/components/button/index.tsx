import { Button as ZLButton } from 'antd';

function Button(props: any) {
  const { caption, danger, disabled, ghost, shape, size} = props
  
  return (
    <div>
      <ZLButton
        danger={danger}
        disabled={disabled}
        ghost={ghost}
        shape={shape}
        size={size}
        >
          {caption || '按钮'}
      </ZLButton>
    </div>
  )
}

export default Button