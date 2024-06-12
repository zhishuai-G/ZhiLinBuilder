import { Table as ZLTable } from 'antd';

export default function Table(props: any) {
  const { tableObj = [], size, bordered, showHeader = true, pagination = false, comStyle } = props
  const { data = [], columns = [] } = tableObj
  const columnData = columns.map((item: any) => {
    return {
      title: item.columnName,
      dataIndex: item.columnName,
      key: item.columnName,
    }
  })
  const tableData = data.map((item: any) => {
    return {
      ...item,
      key: item.id
    }
  })
  return (
    <div>
      <ZLTable
        dataSource={tableData}
        columns={columnData}
        size={size}
        pagination={pagination}
        bordered={bordered}
        showHeader={showHeader}
        style={{ width: '500px', ...comStyle }}
      >
      </ZLTable>
    </div>
  )
}
