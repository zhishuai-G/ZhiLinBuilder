import { useRef, useState } from 'react'
import * as components from '../componentArea/components'
import './style'

function CanvasArea(pros: any) {

  interface ComJson {
    name: string,
    // 组件的唯一ID
    comId: string,
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
  const [selectId, setSelectId] = useState<string>('')  // 当前选中节点的comId

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

  const selectCom = (item: any) => {
    setSelectId(item.comId)
    window.renderCom = item // 挂载要渲染的组件，并且当点击事件触发，在renderCom身上挂载右侧的属性值
    window.comList = comList // 组件renderCom变化了，因此存储组件的数组也要实时的更新，所以把comList，更新comList的setComList都挂载到window上
    window.setComList = setComList
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
      let comId = `comId_${Date.now()}`
      comList.push({
        name: nowCom,
        comId,
        style
      })
    }
    setComList([...comList])
  }
  return (
    <div className='canvasArea' onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onDrop}>
      {
        comList.map((item: { name: string, comId: string, style?: any }) => {
          const Com = components[item.name as keyof typeof components];
          return (
            <div onClick={() => { selectCom(item) }} draggable onDragStart={(e: any) => { onDragStart(item, e)() }} key={item.comId}>
              <span className={item.comId === selectId ? 'selectCom' : ''} style={item.style}>
                {/* 直接解构，把右侧属性面板更改的值全部传递给组价 */}
                <Com {...item} />
              </span>
            </div>
          )
        })
      }
    </div>
  )
}

export default CanvasArea