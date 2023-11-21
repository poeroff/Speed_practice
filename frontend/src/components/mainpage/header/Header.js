import React, { useState } from 'react';
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarToggler,MDBIcon,MDBNavbarNav,MDBNavbarItem,MDBNavbarLink,MDBBtn,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem,MDBCollapse,
} from 'mdb-react-ui-kit';
import classes from "./Header.module.css"
import { Link } from 'react-router-dom';
const Header = () => {
    const [openBasic, setOpenBasic] = useState(false);
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>Speed practice </MDBNavbarBrand>
    
            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setOpenBasic(!openBasic)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
    
            <MDBCollapse navbar open={openBasic}>
              <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='#'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                </MDBNavbarItem>
    
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                      Dropdown
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link>Action</MDBDropdownItem>
                      <MDBDropdownItem link>Another action</MDBDropdownItem>
                      <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
               
              </MDBNavbarNav>
              <form className={classes.Search}>
                <input type='search' className={classes.SearchInput} placeholder='Type query' aria-label='Search' />
                <MDBBtn color='primary'>Search</MDBBtn>
              </form>
    
             
              <form className={classes.Login}>
                <Link to ="login"><MDBBtn color='primary'>Login</MDBBtn> </Link> 
              </form>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      );

}
export default Header;