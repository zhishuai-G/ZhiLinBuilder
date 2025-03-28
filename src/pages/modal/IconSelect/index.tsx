import { Modal } from "antd";
import IconList from './iconMap.json'
import { useEffect, useState } from "react";
import './style'
import { setComList } from '../../../store/slices/comSlice';
import { useDispatch, useSelector } from "react-redux";
import { getComById } from "../../../utils/nodeUtils";

interface IconSelectProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

interface ComReducerState {
  comList: {
    id: string;
    type: string;
    props: Record<string, unknown>;
    children?: ComReducerState['comList'];
  }[];
  selectCom: string;
}

interface RootState {
  comReducer: ComReducerState;
}

export default function IconSelect(props: IconSelectProps) {
  const comReducer = useSelector((state: RootState) => state.comReducer)
  const dispatch = useDispatch()

  const comList = JSON.parse(JSON.stringify(comReducer.comList))  // 拖拽到画布区的组件的集合
  const selectCom = comReducer.selectCom // 在画布区点击选中的组件的comId
  const selectComNode = getComById(selectCom, comList) // 在画布区点击选中的组件的对象

  const [selectIcon, setSelectIcon] = useState('') // 在模态框里面选择的图标

  const { isModalOpen, setIsModalOpen } = props
  const [iconComponents, setIconComponents] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const loadIcons = async () => {
      // 异步导入 Ant Design 的图标库
      const icons = await import("@ant-design/icons");

      const loadedComponents: JSX.Element[] = [];
      // 遍历 IconList 中的图标名称
      for (const item of IconList) {
        try {
          // 获取相应图标名称对应的图标组件
          const IconComponent = icons[item as keyof typeof icons] as React.FC;
          // 如果图标组件未定义，则抛出错误
          if (!IconComponent) {
            throw new Error(`Icon component for "${item}" is undefined`);
          }
          // 将加载的图标组件添加到 loadedComponents 数组中
          loadedComponents.push(
            <div key={item}>
              <IconComponent />
            </div>
          );
        } catch (error) {
          // 捕获异常并记录错误信息
          console.error(error);
        }
      }
      // 将加载的图标组件数组设置为状态变量
      setIconComponents(loadedComponents);
    };

    // 当 isModalOpen 状态变为 true 时，执行加载图标组件的操作
    if (isModalOpen) {
      loadIcons();
    }
  }, [isModalOpen]);

  const handleOk = () => {
    // 把选中的图标的类型绑定到selectComNode的type属性上
    selectComNode.type = selectIcon
    // 当前选中的组件发生了变化，所以需要更新comList
    dispatch(setComList(comList))
    setIsModalOpen(false)
    setSelectIcon('')
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClick = (type: string) => {
    setSelectIcon(type)
  };

  return (
    <div>
      <Modal title="图标库" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText="取消" okText="确定">
        {
          <div className='iconList'>
            {
              iconComponents.map((iconComponent, index) => {
                return (
                  <div key={index} onClick={() => onClick(IconList[index])} className={selectIcon === IconList[index] ? 'activeIcon' : 'iconItem'}>
                    {iconComponent}
                  </div>
                )
              })
            }
          </div>
        }
      </Modal>
    </div>
  )
}
