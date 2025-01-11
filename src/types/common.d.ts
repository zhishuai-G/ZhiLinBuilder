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