import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)
`
background:${({primary})=>(primary?'#F26A2E':'#077BF1')};
white-space:nowrap;
margin:15px;
padding:${({big})=>(big?'18px 40px':'16px 32px')};
color:#fff;
outline:none;
cursor:pointer;
text-decoration:none;
transition:0.3s !important;
border-radius:${({round})=>(round?'50px':'none')};

&:hover{
    background:${({primary})=>(primary?'#077BF1':'#F26A2E')};
    transform:translateY(-2px);
   
}
`