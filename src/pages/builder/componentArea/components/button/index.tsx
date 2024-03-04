import { Button as ZLButton } from 'antd';

function Button(props: any) {
  console.log(props);
  const { caption } = props
  return (
    <div>
      <ZLButton >{caption || '按钮'}</ZLButton>
    </div>
  )
}

export default Button