import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBCardBody ,MDBCard} from 'mdbreact';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
       
   }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6" >
                    <MDBCard>
                        <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Mon App TODO
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4">
        <form onSubmit={submitHandler}> 
            <div className="form-inner">
                
                {(error != "") ? (<div>{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text"> Nom </label>
                    <input type="text" name="name" id="name" className="form-control" onChange={e => setDetails({...details,name:e.target.value})} value={details.name} />
                    
                            </div>
                            <br/>
                <div className="form-group">
                    <label htmlFor="email" className="grey-text">Adresse E-mail </label>
                    <input type="email" name="email" id="email" className="form-control" onChange={e => setDetails({...details,email:e.target.value})} value={details.email}  />
                    
                </div>
               <br/>
                <div className="form-group">
                    <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text"> Mot de passe   </label>
                    <input type="password" name="password" id="password" className="form-control" onChange={e => setDetails({...details,password:e.target.value})} value={details.password}  />
                    
                                    </div>
                       <div className="text-center mt-4">             
                                        <input class="btn btn-info" type="submit" value="Soummettre" />
                                        </div>
            </div>
                    </form>
                   
                        </MDBCardBody>
                    </MDBCard>
                     </MDBCol>
                </MDBRow>
            </MDBContainer>
            
    )
}

export default LoginForm
