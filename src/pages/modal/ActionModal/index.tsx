import { useState } from 'react'
import AceEditor from 'react-ace'; // 引入react-ace组件  
import 'ace-builds/src-noconflict/mode-javascript'; // 引入Ace Editor的JavaScript语法高亮模式  
import 'ace-builds/src-noconflict/theme-monokai'; // 引入Ace Editor的Monokai主题
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getComById } from '../../../utils/nodeUtils';
import { setComList } from '../../../store/slices/comSlice';
import { RootState, ActionModalProps } from '../../../types/common';

export default function ActionModal(props: ActionModalProps) {
  const comReducer = useSelector((state: RootState) => state.comReducer)
  const dispatch = useDispatch()

  const comList = JSON.parse(JSON.stringify(comReducer.comList))  // 拖拽到画布区的组件的集合
  const selectCom = comReducer.selectCom // 在画布区点击选中的组件的comId
  const selectComNode = getComById(selectCom, comList) // 在画布区点击选中的组件的对象

  const { isModalOpen, setIsModalOpen, value } = props
  const [code, setCode] = useState('() => {\n\t// 在这里编写你的代码\n\tconsole.log("Hello, Ace!");\n}');

  const handleOk = () => {
    // value代表当前事件的名称，把事件名称作为属性挂载到当前选中的组件对象上
    if (value?.length) {
      selectComNode[value] = code
    }
    // 当前选中的组件发生了变化，所以需要更新comList
    dispatch(setComList(comList))
    setIsModalOpen(false)
  };

  // 处理编辑器内容变化的回调函数  
  const handleOnChange = (newValue: string) => {
    setCode(newValue);
  };

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  return (
    <Modal title="代码编辑器" centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText="取消" okText="确定" width={650}>
      {
        <AceEditor
          width="600px" // 设置编辑器的宽度  
          height="600px" // 设置编辑器的高度  
          mode="javascript" // 设置编辑器的语言模式为JavaScript  
          theme="monokai" // 设置编辑器的主题为Monokai  
          name="UNIQUE_ID_OF_DIV" // 设置编辑器的唯一标识符（通常用于样式或引用）  
          editorProps={{ $blockScrolling: true }} // 传递给编辑器实例的属性，这里禁用了滚动条滚动  
          onChange={handleOnChange} // 当编辑器内容变化时调用的函数  
          fontSize={15} // 设置编辑器的字体大小  
          showPrintMargin={true} // 显示打印边距  
          showGutter={true} // 显示行号区域  
          highlightActiveLine={true} // 高亮显示当前行  
          value={code} // 设置编辑器的初始值  
          setOptions={{
            // enableBasicAutocompletion: true, // 启用基本自动完成  
            // enableLiveAutocompletion: true, // 启用实时自动完成
            // enableSnippets: true, // 启用代码片段  
            showLineNumbers: true, // 显示行号  
            tabSize: 2, // 设置制表符的大小为2个空格  
          }}
        />
      }
    </Modal>
  )
}
