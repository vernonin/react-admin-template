import PubSub from 'pubsub-js'
import { useState, useEffect} from 'react';

import './list.css'
export default function List() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const token = PubSub.subscribe('transmitUsers', (_, data) => {
			if(data.length > 0)	{
				setUser(data)
			} else {
				setUser([])
			}
    })
  })
  const setUser = data => {
    setUsers(data)
  }
  const clickUser = (user) => {
    window.open(user.html_url)
  }
  return (
    <div className='list-content'>
      {
        users.map(item => (
          <div key={item.id} className='list-item' onClick={() => clickUser(item)}>
            <img src={item.avatar_url} alt="图片无法展示" />
            <p>{item.login}</p>
          </div>
        ))
      }
    </div>
  )
}