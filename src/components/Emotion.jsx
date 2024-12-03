/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"

export const Emotion =()=>{
  // scssの書き方が可能
  const containerStyle = css`
    border: 1px solid #0aa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `

  // インラインスタイルの書き方
  const titleStyle = css({
    marginTop: 0,
    color: `#aaa`
  })

  return(
    <>
      <h3>Emotion</h3>
      <div css={containerStyle}>
        <p css={titleStyle}>Emotion</p>
        <SButton type="button">ボタン</SButton>
      </div>
    </>
  )
}

// styled-componentsの書き方
const SButton = styled.button`
  background-color: #dde;
  border: none;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: #cc5;
    color: #f0f;
    cursor: pointer;
  }
`
