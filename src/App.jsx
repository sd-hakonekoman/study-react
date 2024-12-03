import { useState, useEffect } from "react"
import { ColorMessage } from "./components/ColorMessage"

export const App = () => {
  // レンダリングの確認用
  console.log(`レンダリング`)

  // State の定義
  const [num, setNum] = useState(0)

  const onClickButton = () =>{
    setNum((num) => num + 1)
  }

  const contentStyle = {
    color: "pink",
    fontSize: "calc(20px - 2px)"
  }

  // useEffect
  useEffect(()=>{
    console.log(`useEffect()を読んでます`)
  }, [num])

  return(
    <>
      <h1 style={{color: "#f0f"}}>こんにちは?2</h1>
      <ColorMessage color="skyblue">
        <span style={{color: "orange"}}>あなたは</span>
        <span>お元気ですか？</span>
      </ColorMessage>
      <p style={contentStyle}>お元気で！</p>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
}
