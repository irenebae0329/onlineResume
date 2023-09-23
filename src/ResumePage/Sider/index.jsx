import { createContext, useContext, useState } from 'react'
import { List, Button, Tag } from 'antd'
import { DeleteOutlined, AppstoreAddOutlined, AuditOutlined } from '@ant-design/icons'
import data from '@src/dataSource/SiderData'
import './index.scss'
function SelectedList(collapsed) {

  const dispatch = useContext(dispatchContext);
  const selectedItems = useContext(dataContext).selected;
  const unSelectedItems = useContext(dataContext).unselected;

  function renderListItem(data) {
    const handleDelete = (index) => {
      const itemToDelete = selectedItems?.filter((object) => object?.value === index)[0]
      const listAfterDelete = selectedItems.filter((object) => object?.value !== index)
      dispatch.selected([...listAfterDelete])
      dispatch.unselected([...unSelectedItems, itemToDelete])
    }
    return (
      <List.Item>
        {!collapsed.collapsed ? (<>
          <button type='primary' className='button'>{data.value}</button>
          {!data?.required ? <div className='delete icon' onClick={() => { handleDelete(data.value) }}><DeleteOutlined /></div> : (<Tag color='red' className='tag'>必填</Tag>)}
        </>) : <Button className='icon sign' icon={data.outlined} type='text'></Button>}
      </List.Item>
    )
  }

  return <List
    className='sider-list'
    size="small"
    header={<div>已选择</div>}
    dataSource={selectedItems}
    renderItem={renderListItem}
    style={{
      marginTop: '25vh',
      textAlign:'center'
    }}
  />
}
function UnSelectedList(collapsed) {

  const dispatch = useContext(dispatchContext)
  const selectedItems = useContext(dataContext).selected
  const unSelectedItems = useContext(dataContext).unselected
  return (
    <ul className='sider-list' >
      {unSelectedItems.map(((data, index) => {
        return <ListItem data={data} index={index}></ListItem>
      }))}
    </ul>
  )
  function ListItem(data, index) {
    const handleAdd = (index) => {
      const itemToAdd = unSelectedItems?.filter((object) => object?.value === index)[0]
      const listAfterDelete = unSelectedItems.filter((object) => object?.value !== index)
      dispatch.selected([...selectedItems, itemToAdd])
      dispatch.unselected([...listAfterDelete])
    }
    return (
      <li key={index}>
        {!collapsed.collapsed?(
        <>
          <button className='button'>{data.data.value}</button>
          <div className='modify icon float' onClick={()=>{ handleAdd(data.data.value) }}><AuditOutlined /></div>
        </>
        ):<Button className='icon sign' icon={data.data.outlined} type='text'></Button>}
      </li>
    )
  }
}

const dispatchContext = createContext({})
const dataContext = createContext({})
const SiderMenu = function (collapsed) {
  const [selected, setSelected] = useState(data.filter((obj) => obj.required))
  const [unselected, setUnselected] = useState(data.filter(obj => !obj.required))
  collapsed = collapsed.collapsed
  return (
    <dispatchContext.Provider value={{ selected: setSelected, unselected: setUnselected }}>
      <dataContext.Provider value={{ selected: selected, unselected: unselected }}>
        <div className='sider-list-container '>
          <SelectedList collapsed={collapsed} />
          <UnSelectedList collapsed={collapsed} />
        </div>
      </dataContext.Provider>
    </dispatchContext.Provider>
  )
}
export default SiderMenu