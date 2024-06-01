import { Button, message } from 'antd'
import './style'
import axios from 'axios'
import { useSelector } from 'react-redux';

function DesignTop() {
  const comReducer = useSelector((state: any) => state.comReducer)
  const comList = JSON.parse(JSON.stringify(comReducer.comList))

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

  return (
    <div className='designTop'>
      <span className='title'>ZhiLinBuilder</span>
      <Button onClick={savePage} type='primary' ghost>保存</Button>
    </div>
  )
}

export default DesignTop