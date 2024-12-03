export const StyledJsx = ()=>{
  return (
    <>
      <h3>Styled JSX</h3>
      <div className="container">
        <p className="title">Styled JSXです</p>
        <button type="button" className="button">ボタン</button>
      </div>

      <style jsx>
        {`
          .container {
            border: 1px solid #aaa;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .title {
            margin: 0;
            color: #a00;
          }

          .button {
            background-color: #ddd;
            border: none;
            padding: 8px;
            border-radius: 8px;

            &:hover {
              background-color: #aaa;
              color: #fff;
              cursor: pointer;
            }
          }
        `}
      </style>
    </>
  )
}
