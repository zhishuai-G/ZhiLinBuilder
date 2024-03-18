import { useRef, useState } from 'react'
import * as components from '../componentArea/components'
import './style'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectCom, setDragCom, setComList } from '../../../store/slices/comSlice'

function CanvasArea(props: any) {

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

  const comReducer = useSelector((state: any) => state.comReducer)
  const dispatch = useDispatch()

  const comList = JSON.parse(JSON.stringify(comReducer.comList))  // 拖拽到画布区的组件的集合
  const [dragComId, setDragComId] = useState<string>('') // 当前拖拽组件的信息
  const [selectId, setSelectId] = useState<string>('')  // 当前选中节点的comId

  // 拿到从组件区域拖拽到画布区域的组件类型
  const nowCom = comReducer.dragCom

  const onDragStart = (com: any, e: any) => {
    return () => {
      setDragComId(com?.comId) // 设置当前拖拽组件的comId
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
    // 更新store里面的selectCom,当前点击选中的组件的comId
    dispatch(setSelectCom(item.comId))
  }

  const onDrop = (e: any) => {
    // 鼠标结束位置
    distance.current.endLeft = e.clientX
    distance.current.endTop = e.clientY
    let style: any
    if (dragComId) { // 画布区域自由拖拽的逻辑
      const node = comList.find((item: ComJson) => item.comId === dragComId) // 找到当前在画布区拖拽对象
      node.style = {
        ...node.style,
        left: parseInt(node.style.left) + (e.clientX - (distance.current.startLeft || 0)) + 'px',
        top: parseInt(node.style.top) + (e.clientY - (distance.current.startTop || 0)) + 'px'
      }
      // 拖拽完组件要清空id
      setDragComId('')
      dispatch(setDragCom(dragComId))
    } else { // 从组件区域拖动到画布区域的逻辑
      style = {
        position: 'absolute',
        left: e.clientX + 'px',
        top: e.clientY + 'px'
      }
      let comId = `comId_${Date.now()}`  // 组件的唯一id
      let comNode = {
        name: nowCom,
        comId,
        style
      }
      comList.push(comNode)
      setSelectId(comId)
      // 更新store里面的selectCom,当前点击选中的组件的comId
      dispatch(setSelectCom(comId))
    }
    // 更新store里面的comList
    dispatch(setComList(comList))
  }

  console.log(comReducer);

  return (
    <div className='canvasArea' onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onDrop}>
      {
        comList.map((item: ComJson) => {
          const Com = components[item.name as keyof typeof components];
          return (
            <div onClick={() => { selectCom(item) }} draggable onDragStart={(e: any) => { onDragStart(item, e)() }} key={item.comId}>
              <span className={item.comId === selectId ? 'selectCom' : ''} style={item.style}>
                {/* 直接解构，把右侧属性面板更改的值全部传递给组件 */}
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