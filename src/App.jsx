import { useState, useEffect, useCallback, memo } from "react"
import { ColorMessage } from "./components/ColorMessage"
import { Child1 } from "./components/ch6/Child1"
import { Child4 } from "./components/ch6/Child4"

export const App = memo(() => {
  // レンダリングの確認用
  console.log(`App レンダリング`)

  // State の定義
  const [num, setNum] = useState(0)

  const onClickButton = () =>{
    setNum((num) => num + 1)
  }

  const onClickReset = useCallback(() =>{
    setNum((num) => 0)
  }, [])

  // const contentStyle = {
  //   color: "pink",
  //   fontSize: "calc(20px - 2px)"
  // }

  // // useEffect
  // useEffect(()=>{
  //   console.log(` ()を読んでます`)
  // }, [num])

  return(
    <>
      {/* <h1 style={{color: "#f0f"}}>こんにちは?2</h1>
      <ColorMessage color="skyblue">
        <span style={{color: "orange"}}>あなたは</span>
        <span>お元気ですか？</span>
      </ColorMessage>
      <p style={contentStyle}>お元気で！</p>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p> */}

      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
})
