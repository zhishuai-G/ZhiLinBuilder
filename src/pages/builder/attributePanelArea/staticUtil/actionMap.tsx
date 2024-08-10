import buttonAtion from "./comAction/buttonAtion"

export interface ActionMap {
  [key: string]: Action[]
}

export interface Action {
  label: string,
  value: string,
  type: string,
  modalType: string
}

export const actionMap: ActionMap = {
  Button: buttonAtion
}
