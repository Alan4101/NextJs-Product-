import styled from "styled-components";

const StyledButton = ({children , handler , id, className}) => {
  if(id){
    return(
      <button className={className} onClick={()=> handler(id)}>{children}</button>
    ) 
  }else{
    return(
      <button className={className} onClick={()=> handler()}>{children}</button>
    ) 
  }
  
}


 export default styled(StyledButton)`
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

