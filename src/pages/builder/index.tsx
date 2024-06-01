import { useEffect } from 'react'
import AttributePanelArea from './attributePanelArea'
import CanvasArea from './canvasArea'
import ComponentArea from './componentArea'
import DesignTop from './designTop'
import { message } from "antd"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setComList } from '../../store/slices/comSlice'

function Builder() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const fetchData = async () => {
      const search = window?.location?.search || ''
      const pageId = search.replace('?pageId=', '')
      const res = await axios.get('/api/page-json/findPageById', { params: { pageId } }).then(res => res.data )
      if (res?.code === 200) {
        dispatch(setComList(res?.data?.pageJson))
      } else {
        message.error('获取页面详情失败')
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <DesignTop />
      <ComponentArea />
      <CanvasArea />
      <AttributePanelArea />
    </div>
  )
}

export default Builder