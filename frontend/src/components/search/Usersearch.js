

import { MDBModal, MDBModalDialog, MDBSwitch, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalFooter, MDBContainer, MDBNavbar, MDBNavbarToggler, MDBIcon, MDBNavbarLink, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse, } from 'mdb-react-ui-kit';
import classes from "./Usersearch.module.css"
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
const Usersearch = () => {

  const [serarch, setsearch] = useState(true)
  const searchopen = (event) => { event.preventDefault(); setsearch(!serarch) }
  const searchnickname = useRef()
  const [usersearch, setusersearch] = useState([])


  const inputhandler = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/" + event.target.value, {
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json()).then(resData => setusersearch(resData.searchinfo)).catch(err => console.log(err))

  }
  
  return (
    <form onSubmit={inputhandler}>
      <MDBModal open={serarch} setOpen={setsearch} tabIndex='-1'>
        <MDBModalDialog >
          <MDBModalContent>

            <input type='search' className={classes.SearchInput} placeholder="search..." aria-label='Search' onChange={inputhandler} />

            {usersearch && usersearch.map(user => (
               
                <p className={classes.serchname} key={user.userId}>
                  <Link to={`mypage/${user.userId}`}>{user.nickname}</Link>
                </p>
              
            ))}

          </MDBModalContent>

        </MDBModalDialog>

      </MDBModal>
    </form>





  )









}

export default Usersearch 