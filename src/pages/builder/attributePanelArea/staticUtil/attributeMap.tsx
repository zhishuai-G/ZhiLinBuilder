import buttonAttribute from "./comAttribute/buttonAttribute"
import checkboxAttribute from "./comAttribute/checkboxAttribute"
import iconAttribute from "./comAttribute/iconAttribute"
import inputAttribute from "./comAttribute/inputAttribute"
import radioAttribute from "./comAttribute/radioAttribute"
import switchAttribute from "./comAttribute/switchAttribute"
import rateAttribute from './comAttribute/rateAttribute'
import formAttribute from "./comAttribute/formAttribute"
import cardAttribute from "./comAttribute/cardAttribute"
import floatButtonAttribute from "./comAttribute/floatButtonAttribute"
import alertAttribute from "./comAttribute/alertAttribute"
import progressAttribute from "./comAttribute/progressAttribute"
import qrCodeAttribute from "./comAttribute/qrCodeAttribute"
import tagAttribute from "./comAttribute/tagAttribute"
import avatarAttribute from "./comAttribute/avatarAttribute"
import badgeAttribute from "./comAttribute/badgeAttribute"
import carouselAttribute from "./comAttribute/carouselAttribute"
import uploadAttribute from "./comAttribute/uploadAttribute"
import imageAttribute from "./comAttribute/imageAttribute"
import tableAttribute from "./comAttribute/tableAttribute"

interface AttributeMap {
  [key: string]: ComAttribute[]
}

export interface ComAttribute {
  label: string,
  value: string,
  type: string,
  options?: Array<any>,
  defaultValue?: string | number | boolean | Array<any>,
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
  Form: formAttribute,
  Card: cardAttribute,
  FloatButton: floatButtonAttribute,
  Alert: alertAttribute,
  Progress: progressAttribute,
  QRCode: qrCodeAttribute,
  Tag: tagAttribute,
  Avatar: avatarAttribute,
  Badge: badgeAttribute,
  Carousel: carouselAttribute,
  Upload: uploadAttribute,
  Image: imageAttribute,
  Table: tableAttribute
}
