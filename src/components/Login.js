import React from 'react';
// import PropTypes from 'prop-types';

// Login.propTypes = {
    
// };

function Login(props) {
    return (
        <div>
            <div className="card" style={{width:'18rem',textAlign:'center',margin:'auto'}}>
  <div className="card-body">
  <h2 className='card-head'>Login</h2> 
           <form>
  <div className="form mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
</div>
        </div>
    );
}

export default Login;