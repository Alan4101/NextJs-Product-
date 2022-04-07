import styled from "styled-components";

const StyledButton = ({children, className}) => (
    <button className={className}>{children}</button>
  )

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

