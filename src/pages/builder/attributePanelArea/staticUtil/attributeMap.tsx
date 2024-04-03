import buttonAttribute from "./comAttribute/buttonAttribute"
import checkboxAttribute from "./comAttribute/checkboxAttribute"
import iconAttribute from "./comAttribute/iconAttribute"
import inputAttribute from "./comAttribute/inputAttribute"
import radioAttribute from "./comAttribute/radioAttribute"
import switchAttribute from "./comAttribute/switchAttribute"
import rateAttribute from './comAttribute/rateAttribute'
import formAttribute from "./comAttribute/formAttribute"

interface AttributeMap {
  [key: string]: ComAttribute[]
}

export interface ComAttribute {
  label: string,
  value: string,
  type: string,
  options?: Array<any>,
  defaultValue?: string | number,
  modalType?: string
}

export const attributeMap: AttributeMap = {
  Button: buttonAttribute,
  Input: inputAttribute,
  Icon: iconAttribute,
  Checkbox: checkboxAttribute,
  Radio: radioAttribute,
  Switch: switchAttribute,
  Rate: rateAttribute,
  Form: formAttribute
}
