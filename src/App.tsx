import { useState } from 'react'
// import axios from 'axios'
import { useFetchUsers } from './hooks/useFetchUsers';

function App() {
  const { userList, onClickFetchUser, isError, isLoading } = useFetchUsers()
  console.log(userList)

  return (
    <div>
      <button onClick={onClickFetchUser} type='button'>ユーザー取得</button>
      {/* エラーの場合はエラーメッセージを表示 */}
      {isError && <p style={{color:'red'}}>エラーが発生しました</p>}

      {/* ローディング中は表示を切り替える */}
      { isLoading ? (
        <p>データ取得中です</p>
        ) : (
          userList.map(user => (
            <p key={user.id}>{`${user.id}:${user.lastname} (${user.age}歳)`}</p>
          ))
        ) }
    </div>
  )
}

export default App
