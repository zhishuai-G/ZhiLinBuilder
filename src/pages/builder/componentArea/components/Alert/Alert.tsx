import { Alert as ZLAlert } from 'antd';

export default function Alert(props: any) {
  const { type, message, showIcon, description, comStyle } = props
  return (
    <div>
      <ZLAlert
        style={{ ...comStyle }}
        showIcon={showIcon}
        description={description}
        type={type || 'success'}
        message={message || 'Success Text'}
      />
    </div>
  )
}
