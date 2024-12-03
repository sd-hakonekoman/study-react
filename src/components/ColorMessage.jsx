export const ColorMessage = (props) =>{
  console.log(props)

  
  const { color, children } = props
  const fz = 20 - 1;

  const contentStyle = {
    color,
    // fontSize: "20px"
    fontSize: `${fz}px`
  }

  return <p style={contentStyle}>{children}</p>
}
