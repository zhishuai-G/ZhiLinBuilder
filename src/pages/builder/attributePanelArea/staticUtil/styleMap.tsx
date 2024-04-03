import buttonStyle from "./comStyle/buttonStyle"

interface StyleMap {
  [key: string]: Style[]
}

export interface Style {
  label: string,
  value: string,
  type: string,
  options?: Array<any>,
  defaultValue?: string | number,
  modalType?: string
}

export const styleMap: StyleMap = {
  Button: buttonStyle
}
