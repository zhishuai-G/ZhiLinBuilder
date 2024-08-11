import { Button, message } from 'antd'
import './style'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { ArrowUpOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

function DesignTop() {
  const comReducer = useSelector((state: any) => state.comReducer)
  const comList = JSON.parse(JSON.stringify(comReducer.comList))

  const [visible, setVisible] = useState(true) // 是否显示设计区顶部

  const hideDesignTop = () => {
    setVisible(false)
  }

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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'w' || e.key === 'W') {
        setVisible(true)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)

    // 移除事件监听
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])


  return (
    <div style={visible ? {} : { display: 'none' }} className='designTop'>
      <span className='title'>ZhiLinBuilder</span>
      <Button onClick={savePage} type='primary' ghost>保存</Button>
      <Button onClick={saveAndPreviewPage} type='primary' ghost>保存并预览</Button>
      <div onClick={hideDesignTop} className='icon'>
        <ArrowUpOutlined />
      </div>
    </div>
  )
}

export default DesignTop