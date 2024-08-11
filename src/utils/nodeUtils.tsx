const getComById = (comId: any, comList: any) => {
  let treeList = [...comList]
  for (let i = 0; i < treeList.length; i++) {
    if (treeList[i].comId === comId) {
      return treeList[i]
    }
    else if (treeList[i]?.childList?.length > 0) {
      treeList.push(...treeList[i].childList)
    }
  }
}

const getNodeById = (comId: any) => {
  let treeList = window.rootStore || []
    for (let i = 0; i < treeList.length; i++) {
    if (treeList[i].comId === comId) {
      return treeList[i]
    }
    else if (treeList[i]?.childList?.length > 0) {
      treeList.push(...treeList[i].childList)
    }
    }
}

window.getNodeById = getNodeById

let num = 0
const createCom = (props: any) => {
  const { name, caption = `${name}${++num}` } = props;
  let comId = `comId_${Date.now()}${++num}`;
  return {
    comId,
    name,
    caption,
    ...props
  }
}

// 判断是否是运行时
const isRender = () => {
  const pathName = window?.location?.pathname
  return pathName?.includes('render')
}

// 封装一个公共方法来解析并执行字符串中的函数
const executeFunctionFromString = (funcString: any, ...args: any) => {
  try {
    // 使用 new Function 创建一个新的函数实例  
    const func = eval(funcString);
    // 执行该函数  
    func(args);
  } catch (error) { 
    console.error('Error executing function from string:', error);  
  }
}

export {
  getComById,
  createCom,
  isRender,
  executeFunctionFromString
}