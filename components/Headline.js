// import React from "react"
import styles from '@/styles/Home.module.css'

export function Headline(props) {
  console.log(props)

  const page = props.page || `index`

  return (
    <div>
      <h1>見出し：{props.title}</h1>

      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/{page}.js</code>
      </p>
    </div>
  )
}
