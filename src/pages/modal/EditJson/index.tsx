import { Modal, Typography } from "antd";
import { getComById } from "../../../utils/nodeUtils";
import { useSelector } from "react-redux";
import { RootState, JsonModalProps } from '../../../types/common';


export default function EditJson(props: JsonModalProps) {
  const { showJson, setShowJson, jsonComId } = props

  const comReducer = useSelector((state: RootState) => state.comReducer)
  const comList = JSON.parse(JSON.stringify(comReducer.comList))  // 拖拽到画布区的组件的集合
  const selectComNode = getComById(jsonComId, comList) // 在画布区点击选中的组件的对象

  const handleOk = () => {
    setShowJson(false);
  };

  const handleCancel = () => {
    setShowJson(false);
  };
  return (
    <div>
      <Modal title="组件协议" open={showJson} onOk={handleOk} onCancel={handleCancel} cancelText="取消" okText="确定">
        <Typography.Paragraph
        >
          <pre
            style={{
              border: 'none',
              height: '370px',
              width: '450px',
              overflow: 'auto'
            }}
          >
            {JSON.stringify(selectComNode, null, 2)}
          </pre>
        </Typography.Paragraph>
      </Modal>
    </div>
  )
}
