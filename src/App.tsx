import { useState, useEffect } from 'react'
import { ListItem } from './components/ListItem'
// import axios from 'axios'
import type { User } from './types/user'

function App() {
  // 取得したユーザー情報
  const [users, setUsers] = useState<User[]>([])

  // 画面表示時にユーザー情報取得
  useEffect(()=>{
    // axios.get("https://example.com/users").then((res)=>{
    //   setUsers(res.data)
    // })
    setUsers([
      {
        id: 1,
        name: '佐藤',
        age: 23,
        personalColor: '#00f'
      },
      {
        id: 2,
        name: 'スズキ',
        age: 20,
        personalColor: 'red'
      },
      {
        id: 3,
        name: '太郎',
        age: 26,
        hobbies: ['game', 'soccer']
      },
    ])
  }, [])

  return (
    <div>
      <h1>ch8</h1>
      {users.map(users=>(
        <ListItem id={users.id} name={users.name} age={users.age} personalColor={users.personalColor} hobbies={users.hobbies} />
      ))}
    </div>
  )
}

export default App
