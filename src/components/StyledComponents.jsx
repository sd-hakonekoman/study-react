import styled from "styled-components"

export const StyledComponents = ()=>{
  return(
    <>
      <h3>styled components</h3>
      <SContainer>
        <STitle>styled componentsです</STitle>
        <SButton type="button">ボタン</SButton>
      </SContainer>
    </>
  )
}

const SContainer = styled.div`
  border: 1px solid #aaa;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const STitle = styled.p`
  margin: 0;
  color: #0a0;
`

const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: #ccc;
    color: #f00;
    cursor: pointer;
  }
`
