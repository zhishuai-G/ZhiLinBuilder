import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setComList } from "../../store/slices/comSlice"
import { message } from "antd"
import axios from "axios"
import * as components from '../builder/componentArea/components'

export interface ComJson {
  name: string,
  // 组件的唯一ID
  comId: string,
  style?: any,
  childList?: ComJson[]
}
export default function Render() {
  const dispatch = useDispatch()
  const comReducer = useSelector((state: any) => state.comReducer)

  const comList = JSON.parse(JSON.stringify(comReducer.comList))  // 拖拽到画布区的组件的集合

  useEffect(() => {
    const fetchData = async () => {
      const search = window?.location?.search || ''
      const pageId = search.replace('?pageId=', '')
      const res = await axios.get('/api/page-json/findPageById', { params: { pageId } }).then(res => res.data)
      if (res?.code === 200) {
        dispatch(setComList(res?.data?.pageJson))
      } else {
        message.error('获取页面详情失败')
      }
    }
    fetchData();
  }, [])
  console.log(comList);
  const getComponent = (com: ComJson) => {
    const Com = components[com.name as keyof typeof components];
    return (
      <div key={com.comId}>
        <div style={com.style}>
          <Com {...com} >
            {
              // 如果组件是form容器，且有子元素，就要递归去渲染form容器内的子元素
              com.childList && com.childList.map(item => {
                return getComponent(item)
              })
            }
          </Com>
        </div>
      </div>
    )
  }

  return (
    <div className='render'>
      {
        comList.map((item: ComJson) => {
          return getComponent(item)
        })
      }
    </div>
  )
}
