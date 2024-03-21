import {
  TabletOutlined,
  FrownOutlined,
  DoubleRightOutlined,
  AreaChartOutlined
} from '@ant-design/icons';

interface ComponentIconMap {
  [key: string]: any
}

interface ComponentTextMap {
  [key: string]: string
}

const componentIconMap: ComponentIconMap = {
  Button: TabletOutlined,
  Icon: FrownOutlined,
  Input: DoubleRightOutlined,
  Checkbox: AreaChartOutlined,
  Radio: AreaChartOutlined,
  Switch: AreaChartOutlined,
  Rate: AreaChartOutlined
}

const componentTextMap: ComponentTextMap = {
  Button: '按钮',
  Icon: '图标',
  Input: '输入框',
  Checkbox: "多选框",
  Radio: "单选框",
  Switch: "开关",
  Rate: "评分"
}

export {
  componentIconMap,
  componentTextMap
}