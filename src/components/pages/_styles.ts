import styled from "styled-components";

const NavWrapper = styled.div`
  font-size: 20px;
  margin-left: 10px;

  & > a {
    display: inline-block;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 10px;
    color: dimgrey;
    outline: none;
  }

  & > a.active {
    color: #38fa8c;
  }

  & > a:hover {
    color: #cc5403;
  }
`

const Header = styled.header`
  background-color: #000000;
  width: 100%;
  height: 100px;
  text-align: center;
  color: white;
`

const Body = styled.body`
  display: flex;
`

const Nav = styled.nav`
  background-color: #bebebe;
  min-height: 400px;
  width: 30%;
  color: #282c34;
  font-size: 30px;
`

const Content = styled.div`
  background-color: #282c34;
  min-height: 400px;
  width: 70%;
  color: white;
  font-size: 30px;
`

const Footer = styled.footer`
  background-color: #000000;
  width: 100%;
  height: 120px;
  text-align: center;
  color: white;
`


export const S = {
    NavWrapper, Header, Body, Nav, Content,Footer
}
