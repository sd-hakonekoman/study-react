import { createContext, useState } from "react";

export const AdminFlagContext = createContext({})

export const AdminFlagProvider = props => {
  const {children} = props

  const [isAdmin, setIsAdmin] = useState(false)

  // 動作確認のために適当なオブジェクトを定義
  const sampleObj = {sampleValue: `テスト`}

  // AdminFlagContextの中にProviderがあるのでそれでchildrenを囲む
  // valueの中にグローバルに扱う実際の値を設定
  return (
    <AdminFlagContext.Provider value={{isAdmin,setIsAdmin}}>
      {children}
    </AdminFlagContext.Provider>
  )
}
