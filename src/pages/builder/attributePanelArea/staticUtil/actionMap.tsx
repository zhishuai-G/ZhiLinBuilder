import buttonAtion from "./actionAttribute/buttonAtion"

export interface ActionMap {
  [key: string]: ActionAttribute[]
}

export interface ActionAttribute {
  label: string,
  value: string,
  type: string
}

export const actionMap: ActionMap = {
  Button: buttonAtion
}
