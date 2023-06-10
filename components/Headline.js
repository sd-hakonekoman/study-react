import React from "react"

export function Headline(props) {
  console.log(props)

  const page = props.page || `index`

  return (
    <>
      <h1>見出し：{props.title}</h1>

      <p>
        Get started by editing&nbsp;
        {props.children}
      </p>
    </>
  )
}
