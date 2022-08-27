import { useState } from 'react';
import logo from './assets/images/logo.png'

function SecretMagicApp() {

  const [isActive, setActive] = useState(false);

  const dismissAlert = () => {
    setActive(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(true);
    document.getElementById("loginForm").reset();  
    console.log('You clicked submit.');
  } 


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="centered">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div id='loginAlert' className={isActive ? "alert alert-danger alert-dismissible fade show" : "hid alert alert-danger alert-dismissible fade show"} role="alert">
              <strong>Error.</strong> Incorrect credentials
              <button onClick={dismissAlert} type="button" className="btn-close" aria-label="Close"></button>
            </div>
            <form id='loginForm' onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="email" placeholder='mail@thesecretmagicsociety.com' required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder='Type your password' required/>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-outline-light">Login</button>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default SecretMagicApp
