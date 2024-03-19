import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { colors } from "./theme";

export const Buttonn = styled.button`
    background: transparent;
    //background: linear-gradient(black, pink);
    border-radius: 3px;
    border: 2px solid #f3f1f2;
    color: ${colors.rosado}; 
    font-size: 1em;
    margin: 0;
    padding: 0.25em 1em;
    cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  background-color: black;
  color: white;
  flex-direction: row;
  align-content: center;
  padding: 8px;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    
`;

export const BtnLInk = styled.button`
    background-color: white;
    padding: 0.5em;
    border-radius: 5px;
    border: 2px solid black;
    cursor: pointer;
    margin-bottom: 0.5em;

`;

/*export const styledNavLink = styled(NL)`
    color: white;
    padding: 1em;
    list-style: none;
    &.is-active{

    }
`;*/

export const DetailsCont = styled.div`
    background-color: aliceblue;
    padding: 0.5em;
    border-radius: 10px;
    margin-top: 1em;
    h1, h3, h4{
        color: #333;
    }
`;

export const CenteredCont = styled.div`
    width: 80%;
    margin: 0 auto;
    align-content: center;

`;

export const CenterInfo = styled.div`
    justify-content: center;
    text-align: center;
`