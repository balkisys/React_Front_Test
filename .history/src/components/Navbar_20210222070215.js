import React, { useContext,useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBCardBody ,MDBCard,MDBNavbar} from 'mdbreact';
import taskComponents from './taskComponents';
import Login from './Login';

const Navbar = ({ Logout,user }) => {
  
  const submitHandler = e => {
        e.preventDefault();
        Logout(user);
       
   }
  return (
    <Router>
      <MDBContainer>
            <MDBRow>
                <MDBCol md="6" >
            <MDBCard>
              <MDBCardBody>
                <MDBNavbar className="  grey lighten-2 ">
        <h3> Liste des tâches </h3>
       
     <form onSubmit={submitHandler}> 
          <input type="submit" className="btn btn-outline-info btn-sm" value="Déconnexion" />
          </form>
                </MDBNavbar>
                <br></br>
                <taskComponents/>
                 <Switch>
        <Route exact path='/MyList' component={taskComponents} />
        
              
          </Switch>
         </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
    
      
      
      </Router>
  );
}
 
export default Navbar;