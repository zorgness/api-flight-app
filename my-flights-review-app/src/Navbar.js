import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const Wrapper = styled.nav`
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;
`

const Right = styled.div`
  flex-basis: 12%;
  align-self: flex-end !important;
  margin-right: 24px;

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer
  }
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0;
  margin:0;
  list-style-type: none;
`

const Logo = styled.span`
  font-family: 'Poppins-ExtraBold';
  font-weight: bold;
  font-size: 20px;
  float: left;

  a {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: #fff;
    text-decoration: none;
  }
`



const Navbar2 = (props) => {

  

  return (
    
        <Wrapper>
          <Container>
            <Nav>
              <Left>
                <Logo><Link to="/">OpenFlights</Link></Logo>
              </Left>
              <Right>
                <Menu>
                   
                    <Fragment>
                      <li><Link to="/">Home</Link></li>
                      <li><a onClick={props.logout}>Log Out</a></li>
                    
                     <li><Link to="/login">Login</Link></li>
                     <li><Link to="/registration">Signup</Link></li>
                   </Fragment>

                </Menu>
              </Right>
            </Nav>  
          </Container>
        </Wrapper>
      
    
  )
}


const Navbar = (props) => {

  return (
    
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <Logo><Link to="/">OpenFlights</Link></Logo>
      <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-chevron-circle-down"></i>
      </button>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          <li className="nav-item">
              <a className="nav-link" onClick={props.logout}>Log Out</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/registration">Signup</Link>
          </li>
        </ul>
      </div>
      
    </nav>
   
  )

}



export default Navbar