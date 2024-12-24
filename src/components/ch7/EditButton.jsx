import { useContext } from "react"
import { AdminFlagContext } from "./providers/AdminFlagProvider"

const style = {
  width: `100px`,
  padding: `6px`,
  borderRadius: `8px`
}

export const EditButton = () => {
  console.log(`EditButton.jsx レンダリング`)

  const {isAdmin} = useContext(AdminFlagContext)

  // useContextの引数に参照するContextを指定する
  // const contextValue = useContext(AdminFlagContext)
  // console.log(contextValue) // {sampleValue: "テスト"}

  // isAdmin がfalse時にボタンを非活性にする
  return (
    <button style={style} disabled={!isAdmin}>編集</button>
  )
}
