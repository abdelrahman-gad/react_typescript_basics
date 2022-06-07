type ContainerProps = {
    styles:React.CSSProperties
}

const Container = (props:ContainerProps )=> {
  return <div style={props.styles}>
        <h1>TExt Content Goes Here </h1>
  </div>
}

export default Container;