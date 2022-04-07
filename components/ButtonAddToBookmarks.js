import styled from "styled-components";

const ButtonAddToBookmarks = ({children , handler , id, className}) => (
    <button className={className} onClick={()=> handler(id)}>{children}</button>
  )
  
 export default styled(ButtonAddToBookmarks)`
  border-radius: 15px;
  border: none;
  background: #37b98f;
  padding: 1rem;
  color: #fff;
  font-weigth: 400;
  &:hover{
    color: #000;
    transition: all .3s easy-in;
  }
`

