import { Upload as ZLUpload } from 'antd';
import { BaseComponentProps } from '../../../../../types/common';

interface UploadProps extends BaseComponentProps {
  accept?: string;
  action?: string;
  directory?: boolean;
  disabled?: boolean;
  listType?: 'text' | 'picture' | 'picture-card';
  maxCount?: number;
  multiple?: boolean;
}

export default function Upload(props: UploadProps) {
  const { accept, action, directory, disabled, listType, maxCount, multiple, comStyle } = props;

  return (
    <div>
      <ZLUpload
        style={comStyle}
        accept={accept}
        action={action}
        directory={directory}
        disabled={disabled}
        listType={listType}
        maxCount={maxCount}
        multiple={multiple}
      >
        <button>Click to Upload</button>
      </ZLUpload>
    </div>
  );
}