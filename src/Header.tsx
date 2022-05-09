export interface Props{
    title: string,
    color?:string
}

const Header = (props:Props) => {
  return (
      <header style={{textAlign:"center"}}><h1 style={{ color: props.color }}>{ props.title}</h1></header>
  )
}

export default Header