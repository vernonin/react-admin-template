import axios from 'axios';
import PubSub from 'pubsub-js'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function Header() {

  const [keyWord, setKeyWord] = useState('')
  const handleInput = event => {
    setKeyWord(event.target.value)
  }
  const onclickSearch = () => {
    if(keyWord.trim() === '') return
  
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(res => {
      PubSub.publish('transmitUsers', res.data.items);
    }, fail => {
      console.log('获取失败！')
      PubSub.publish('transmitUsers', []);
    })
  }
  return (
    <div>
      <TextField id="filled-basic" onInput={handleInput} label="请输入关键字" variant="filled" />
      <Button
        variant="contained"
        style={{height: '56px'}}
        color="secondary"
        onClick={onclickSearch}
        startIcon={<SearchIcon />}
      >搜 索</Button>
    </div>
  )
}