import alertStyle from "./comStyle/alertStyle"
import avatarStyle from "./comStyle/avatarStyle"
import buttonStyle from "./comStyle/buttonStyle"
import cardStyle from "./comStyle/cardStyle"
import carouselStyle from "./comStyle/carouselStyle"
import floatButtonStyle from "./comStyle/floatButtonStyle"
import formStyle from "./comStyle/formStyle"
import iconStyle from "./comStyle/iconStyle"
import imageStyle from "./comStyle/imageStyle"
import inputStyle from "./comStyle/inputStyle"
import progressStyle from "./comStyle/progressStyle"
import qrCodeStyle from "./comStyle/qrCodeStyle"
import tableStyle from "./comStyle/tableStyle"
import tagStyle from "./comStyle/tagStyle"
import uploadStyle from "./comStyle/uploadStyle"

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
  Button: buttonStyle,
  Form: formStyle,
  Icon: iconStyle,
  Input: inputStyle,
  Card: cardStyle,
  FloatButton: floatButtonStyle,
  Alert: alertStyle,
  Progress: progressStyle,
  QRCode: qrCodeStyle,
  Tag: tagStyle,
  Avatar: avatarStyle,
  Carousel: carouselStyle,
  Upload: uploadStyle,
  Image: imageStyle,
  Table: tableStyle
}
