import * as React from 'react'

import { Card } from 'antd'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const MarkDown = () => {
  const [value, setValue] = React.useState('### 请在此处输入文本...');
  const [selectedTab, setSelectedTab] = React.useState('write');
  return (
    <Card title="markdown的使用" bordered={false}>
      <div className="container">
        <ReactMde
          value={value}
          onChange={setValue}
          heightUnits={350}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={markdown =>
            Promise.resolve(converter.makeHtml(markdown))
          }
        />
      </div>
    </Card>
    
  );
}

export default MarkDown