import { message } from "antd";
import { componentTextMap } from "../../componentArea/staticUtil/iconList";
import { ComJson } from "..";

let num = 1

const includesList: { [key: string]: string[] } = {
  Form: ['Input', 'Checkbox', 'Radio', 'Rate', 'Switch'],
  Card: ['Input', 'Checkbox', 'Radio', 'Rate', 'Switch', 'Button', 'Icon', 'Alert', 'Progress', 'Avatar', 'QRCode', 'Tag'],
  Badge: ['Button', 'Avatar'],
  Carousel: ['Button']
}

const onCanvasAreaDropContainer = (comList: ComJson[], dragCom: ComJson, com: ComJson, e: any) => {

  // 判断在画布区内的组件拖到在画布区的容器里的逻辑
  if (!includesList[com.name].includes(dragCom?.name)) {
    e.stopPropagation()
    message.error(`不支持拖拽该类型组件到${com.name}容器里`)
    return
  } else {
    // 找到当前组件在comList中的位置
    const index = comList.findIndex((item: any) => item.comId === dragCom?.comId);
    if (index > -1) {
      // 从画布区的组件集合comList中删除此组件，因为此组件要作为容器的子元素，因此不在组件集合comList中了
      comList.splice(index, 1)
    }
    // 判断容器里面是否有子元素，没有就在容器上绑定childList属性，用来保存拖入容器内的组件
    if (!com.childList) {
      com.childList = []
    }
    // 组件如果拖进入容器里面就不能自由拖动了，所以需要删除组件的style，防止在容器内部自由拖动
    delete dragCom.style
    com.childList.push(dragCom)
    e.stopPropagation()
  }
}

const onComponentDropContainer = (com: ComJson, nowCom: any, e: any) => {

  // 判断组件区域的组件是否根据规则包含在容器里，如果不包含，就不能拖到画布区域的容器里面
  if (!includesList[com.name].includes(nowCom)) {
    e.stopPropagation()
    message.error(`不支持拖拽该类型组件到${com.name}容器里`)
    return
  } else {
    // 判断组件从组件区域直接拖到画布区域的容器里面的逻辑，并记录往容器里面拖拽的组件comNode
    let comId = `comId_${Date.now()}`
    const comNode = {
      name: nowCom,
      comId,
      caption: componentTextMap[nowCom] + num++
    }
    // 判断容器里面是否有子元素，没有就在容器上绑定childList属性，用来保存拖入容器内的组件
    if (!com.childList) {
      com.childList = []
    }
    // 把组件放置到容器的childList里面作为容器的子元素
    com.childList.push(comNode);
    e.stopPropagation()
  }
}

export {
  includesList,
  onCanvasAreaDropContainer,
  onComponentDropContainer
}