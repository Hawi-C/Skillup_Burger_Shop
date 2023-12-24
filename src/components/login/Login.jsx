// Write all the code here
import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function AuthTabs() {
  const [justifyActive, setJustifyActive] = useState('tab1');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Here, you would normally handle login logic (e.g., API call)
    console.log(`Login Email: ${loginEmail}, Password: ${loginPassword}`);
    // After handling login, clear fields or navigate to another page
    setLoginEmail('');
    setLoginPassword('');
  };

  return (
    <MDBContainer>
      <MDBTabs justify className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Signup
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <MDBInput 
              wrapperClass="mb-4" 
              label="Email address" 
              id="form1" 
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <MDBInput 
              wrapperClass="mb-4" 
              label="Password" 
              id="form2" 
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
              <a href="#!">Forgot password?</a>
            </div>
            <MDBBtn className="mb-4 w-100" type="submit">Sign in</MDBBtn>
          </form>
          <p className="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
          {/* Signup Form */}
          <MDBInput wrapperClass="mb-4" label="Email address" id="form3" type="email" />
          <MDBInput wrapperClass="mb-4" label="Password" id="form4" type="password" />
          <MDBInput wrapperClass="mb-4" label="Confirm Password" id="form5" type="password" />
          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
          <p className="text-center">
            Already a member? <a href="#!">Login</a>
          </p>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default AuthTabs;
