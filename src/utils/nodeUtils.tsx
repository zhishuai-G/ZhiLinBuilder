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

let num = 0
const createCom = (props: any)=> {
  const { name, caption = `${name}${++num}` } = props;
  let comId = `comId_${Date.now()}${++num}`;
  return {
    comId,
    name,
    caption,
    ...props
  }
}

export {
  getComById,
  createCom
}