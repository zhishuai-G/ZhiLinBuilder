import { useState } from 'react'
import * as components from '../componentArea/components'
import './style'

function CanvasArea(pros: any) {

  interface ComJsom {
    name: string,
    style?: any
  }

  const [comList, setComList] = useState<ComJsom[]>([])
  const onDragEnter = (e: any) => {
    e.preventDefault()
  }

  const onDragOver = (e: any) => {
    console.log(e.clientX, e.clientY);
    e.preventDefault()
  }

  const onDrop = (e: any) => {
    comList.push({
      name: window.nowCom,
      style: {
        position: 'absolute',
        left: e.clientX + 'px',
        top: e.clientY + 'px'
      }
    })
    setComList([...comList])
  }
  return (
    <div className='canvasArea' onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onDrop}>
      {
        comList.map((item: { name: string, style?: any }, index: number) => {
          const Com = components[item.name as keyof typeof components];
          return (
            <span key={index} style={item.style}><Com /></span>
          )
        })
      }
    </div>
  )
}

export default CanvasArea