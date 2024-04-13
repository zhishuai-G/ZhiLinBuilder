import { useRef, useState } from 'react'
import * as components from '../componentArea/components'
import './style'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectCom, setDragCom, setComList } from '../../../store/slices/comSlice'
import { getComById } from '../../../utils/nodeUtils'
import { componentTextMap } from '../componentArea/staticUtil/iconList'
import { includesList, onCanvasAreaDropContainer, onComponentDropContainer } from './staticUtil'

let num = 1

export interface ComJson {
  name: string,
  // 组件的唯一ID
  comId: string,
  style?: any,
  childList?: ComJson[]
}

function CanvasArea() {

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
  const [selectId, setSelectId] = useState<string>('')  // 在画布区当前选中节点的comId

  // 拿到从组件区域拖拽到画布区域的组件类型
  const nowCom = comReducer.dragCom

  // 组件在画布区开始拖动
  const onDragStart = (com: any) => {
    return (e: any) => {
      setDragComId(com?.comId) // 设置当前拖拽组件的comId
      // 鼠标开始位置
      distance.current.startLeft = e.clientX
      distance.current.startTop = e.clientY
      // 这个地方不能阻止事件冒泡，因为在form容器内拖动form容器内的组件，先触发组件的拖拽事件，然后冒泡到form容器的拖拽事件，实现了拖组件相当于在拖动form容器
      // e.stopPropagation()
    }
  }

  const onDragEnter = (e: any) => {
    e.preventDefault()
  }

  const onDragOver = (e: any) => {
    e.preventDefault()
  }

  const selectCom = (item: any) => {
    return (e: any) => {
      setSelectId(item.comId)
      // 更新store里面的selectCom,当前点击选中的组件的comId
      dispatch(setSelectCom(item.comId))
      // 阻止事件冒泡，防止触发外层form容器的点击事件，导致form容器内的组件无法被选中
      e.stopPropagation()
    }
  }

  const onDrop = (e: any) => {
    // 鼠标结束位置
    distance.current.endLeft = e.clientX
    distance.current.endTop = e.clientY
    let style: any
    if (dragComId) { // 画布区域自由拖拽的逻辑
      const node = getComById(dragComId, comList) // 找到当前在画布区的拖拽对象
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
        style,
        caption: componentTextMap[nowCom] + num++
      }
      comList.push(comNode)
      setSelectId(comId)
      // 更新store里面的selectCom,当前点击选中的组件的comId
      dispatch(setSelectCom(comId))
    }
    // 更新store里面的comList
    dispatch(setComList(comList))
  }

  const onDropContainer = (com: ComJson) => {
    return (e: any) => {
      const dragCom = getComById(dragComId, comList) // 找到当前在画布区的拖拽对象
      // 判断是不是往画布区域的容器里面拖拽组件
      if (includesList.hasOwnProperty(com.name)) {
        // 判断在画布区内的组件拖到在画布区的容器里的逻辑
        if (dragCom && dragCom !== com) {
          onCanvasAreaDropContainer(comList, dragCom, com, e)
          dispatch(setComList(comList))
          setDragComId('')
          return;
        }
        // 判断是否在画布区拖动容器，如果是，直接返回
        else if (dragCom) {
          return;
        }
        // 判断从组件区域拖拽组件到在画布区的容器里的逻辑
        onComponentDropContainer(com, nowCom, e)
        dispatch(setComList(comList))
      }
    }
  }


  const getComponent = (com: ComJson) => {
    const Com = components[com.name as keyof typeof components];
    return (
      <div key={com.comId} onDrop={onDropContainer(com)} onClick={selectCom(com)}>
        <div draggable onDragStart={onDragStart(com)} className={com.comId === selectId ? 'selectCom' : ''} style={com.style}>
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
    <div className='canvasArea' onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onDrop}>
      {
        comList.map((item: ComJson) => {
          return getComponent(item)
        })
      }
    </div>
  )
}

export default CanvasArea