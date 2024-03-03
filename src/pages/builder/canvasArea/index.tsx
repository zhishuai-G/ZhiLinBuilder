import { useRef, useState } from 'react'
import * as components from '../componentArea/components'
import './style'

function CanvasArea(pros: any) {

  interface ComJson {
    name: string,
    style?: any
  }

  const distance = useRef({
    startLeft: void 0,
    startTop: void 0,
    endLeft: void 0,
    endTop: void 0
  })

  const [comList, setComList] = useState<ComJson[]>([])
  const [dragCom, setDragCom] = useState<ComJson | null>(null)  // 记录当前组件是在画布区域还是在组件区域

  const onDragStart = (com: any, e: any) => {
    return () => {
      window.nowCom = 'renderComponent'
      setDragCom(com)
      // 鼠标开始位置
      distance.current.startLeft = e.clientX
      distance.current.startTop = e.clientY
    }
  }

  const onDragEnter = (e: any) => {
    e.preventDefault()
  }

  const onDragOver = (e: any) => {
    e.preventDefault()
  }

  const onDrop = (e: any) => {
    // 鼠标结束位置
    distance.current.endLeft = e.clientX
    distance.current.endTop = e.clientY
    const nowCom = window.nowCom
    let style: any
    if (nowCom === 'renderComponent' && dragCom && dragCom.style) { // 画布区域自由拖拽的逻辑
      dragCom.style = {
        ...dragCom.style,
        left: parseInt(dragCom.style.left) + (e.clientX - (distance.current.startLeft || 0)) + 'px',
        top: parseInt(dragCom.style.top) + (e.clientY - (distance.current.startTop || 0)) + 'px'
      }
    } else { // 从组件区域拖动到画布区域的逻辑
      style = {
        position: 'absolute',
        left: e.clientX + 'px',
        top: e.clientY + 'px'
      }
      comList.push({
        name: nowCom,
        style
      })
    }
    setComList([...comList])
  }
  return (
    <div className='canvasArea' onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onDrop}>
      {
        comList.map((item: { name: string, style?: any }, index: number) => {
          const Com = components[item.name as keyof typeof components];
          return (
            <span draggable onDragStart={(e: any) => { onDragStart(item, e)() }} key={index} style={item.style}><Com /></span>
          )
        })
      }
    </div>
  )
}

export default CanvasArea