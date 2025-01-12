// 组件基础类型
export interface ComBase {
  id: string;
  type: string;
  props?: Record<string, unknown>;
  tableObj?: {
    tableName: string;
    tableCode: string;
  };
  children?: ComBase[];
}

// 组件 Reducer 状态
export interface ComReducerState {
  comList: ComBase[];
  selectCom: string;
}

// Root State 类型
export interface RootState {
  comReducer: ComReducerState;
}

// Modal 通用 Props
export interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export interface JsonModalProps extends ModalProps {
  showJson: boolean;
  setShowJson: (show: boolean) => void;
  jsonComId: string;
}

export interface ActionModalProps extends ModalProps {
  value?: string;  // 使用可选属性，因为不是所有模态框都需要这个属性
}

// 所有组件的基础属性接口
export interface BaseComponentProps {
  comId?: string;
  comStyle?: React.CSSProperties;
}

// 带图标组件的基础属性接口
export interface BaseIconComponentProps extends BaseComponentProps {
  type?: string;
  rotate?: number;
  spin?: boolean;
}

// 带标题的组件基础属性接口
export interface BaseCaptionComponentProps extends BaseComponentProps {
  caption?: string;
} 