import{ useState } from 'react'
import { Card, Avatar, List} from 'antd'

const tabListNoTitle = [
  {
    key: '1',
    label: '通知',
  },
  {
    key: '2',
    label: '公告',
  },
];
const dataList = [
  {
    title: 'React Antd Title 1',
  },
  {
    title: 'React Antd Title 2',
  },
  {
    title: 'React Antd Title 3',
  },
  {
    title: 'React Antd Title 4',
  },
];

function NoticeList({ data }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item style={{ padding: '5px 0' }} >
          <List.Item.Meta
            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="请给我点一个免费的小星星♥"
          />
        </List.Item>
      )}
    />
  )
}

const Notice = () => {
  const [activeTabKey, setActiveTabKey] = useState('1');
  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <Card
      style={{ width: '300px' }}
      styles={{
        body: { paddingTop: '5px', paddingBottom: '5px'}
      }}
      tabList={tabListNoTitle}
      activeTabKey={activeTabKey}
      onTabChange={onTabChange}
    >
      <NoticeList data={dataList} />
    </Card>
  )
}

export default Notice
