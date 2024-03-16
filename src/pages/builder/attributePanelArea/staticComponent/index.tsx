import { Select, Switch, Input } from 'antd';

export default function ComponentType(props: any) {

  const { onChange, type, defaultValue, options, value, selectComNode } = props

  const getComponent = () => {
    switch (type) {
      case 'input': {
        return <Input value={selectComNode[value] || ''} style={{ width: '120px' }} defaultValue={defaultValue} onChange={onChange} />
      }
      case 'switch': {
        return <Switch value={selectComNode[value] || false} defaultValue={defaultValue} onChange={onChange} />
      }
      case 'select': {
        return <Select value={selectComNode[value] || defaultValue} style={{ width: '120px' }} options={options} defaultValue={defaultValue} onChange={onChange}></Select>
      }
    }
  }
  return (
    <div>
      {getComponent()}
    </div>
  )
}