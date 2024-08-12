import { Button, message } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import './style'
import axios from 'axios'
import { useSelector } from 'react-redux';
import useVisibility from '../../../utils/useVisibility'

function DesignTop() {
  const comReducer = useSelector((state: any) => state.comReducer)
  const comList = JSON.parse(JSON.stringify(comReducer.comList))

  const { visible, toggleVisibility } = useVisibility(true, 'd', '顶部区域'); // 控制顶部区域的显示与隐藏

  const savePage = async () => {
    const search = window?.location?.search || ''
    const pageId = search.replace('?pageId=', '')
    const res = await axios.patch(`/api/page-json/${pageId}`, { pageJson: comList }).then(res => res.data)
    if (res?.code === 200) {
      message.success('页面保存成功')
    } else {
      message.error('页面保存失败')
    }
  }

  const saveAndPreviewPage = async () => {
    const search = window?.location?.search || ''
    const pageId = search.replace('?pageId=', '')
    const res = await axios.patch(`/api/page-json/${pageId}`, { pageJson: comList }).then(res => res.data)
    if (res?.code === 200) {
      window?.open(`http://127.0.0.1:9090/render?pageId=${pageId}`)
    } else {
      message.error('页面保存失败')
    }
  }

  return (
    <div style={visible ? {} : { display: 'none' }} className='designTop'>
      <span className='title'>ZhiLinBuilder</span>
      <Button onClick={savePage} type='primary' ghost>保存</Button>
      <Button onClick={saveAndPreviewPage} type='primary' ghost>保存并预览</Button>
      <div onClick={toggleVisibility} className='icon'>
        <ArrowUpOutlined />
      </div>
    </div>
  )
}

export default DesignTop