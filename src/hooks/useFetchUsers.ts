import { useState } from "react"

interface User {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
}

// ユーザー一覧を取得するカスタムフック
export const useFetchUsers = () => {
  // const [userList, setUserList] = useState([{id:1}])
  const [userList, setUserList] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // const onClickFetchUser = () => { alert('関数実行') }

  // ユーザー取得ボタン押下アクション
  const onClickFetchUser = () => {
    // ボタン押下時にローディングフラグ on、エラーフラグ off
    setIsLoading(true)
    setIsError(false)

    setUserList([
      {
        id: 1,
        firstname: '佐藤',
        lastname: '一郎',
        age: 23,
      },
      {
        id: 2,
        firstname: 'スズキ',
        lastname: '二郎',
        age: 20,
      },
      {
        id: 3,
        firstname: '山田',
        lastname: '太郎',
        age: 26,
      },
    ])

    // 任意の秒数後にエラーを発生させるか、データを取得する
    setTimeout(() => {
      // 0か1のランダムな数値を生成
      const random = Math.floor(Math.random() * 2)

      if(random === 0) {
        setIsError(true)
      } else {
        setIsLoading(false)
      }
    }, 1000)
  }

  // まとめて返却したいのでオブジェクトに設定する
  return { userList, onClickFetchUser, isError, isLoading }
}
