import { Button, Divider, Tooltip, Typography, Input, Flex } from 'antd';

const Header = (props) => {
  const { tools, toolbarActions, methods } = props;
  function handleClick(key) {
    if (methods && methods[key]) methods[key]();
  }

  return (
    <Flex justify="space-between" align="center" style={{paddingBottom: '10px'}}>
      <Typography.Title level={5}>用户数据列表</Typography.Title>
      <Flex gap="small" align="center">
        {toolbarActions?.map((btn) => (
          <Button {...btn} key={btn.key} onClick={() => handleClick(btn.key)}>
            {btn.text}
          </Button>
        ))}
        <Input.Search
          placeholder="input search text"
          allowClear
          enterButton="高级搜索"
          style={{width: 300}}
        />
        <Divider type='vertical' />
        {tools?.map(btn => (
          <Tooltip key={btn.key} title={btn.text}>
            <Button {...btn} onClick={() => handleClick(btn.key)} />
          </Tooltip>
        ))}
      </Flex>
    </Flex>
  )
}
export default Header;