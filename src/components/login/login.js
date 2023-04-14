import { useRef, useState, useEffect } from 'react'
import signinVector from '../../assets/signin.png'
import Logo from '../../assets/logo.png'
import './login.css'


const Login = () => {

  // const userRef = useRef();
  // const errRef = useRef();

  // const [user, setUser] = useState('');
  // const [pwd, setPwd] = useState('');
  // const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);


  // useEffect(() => {
  //     userRef.current.focus();
  // }, [])

  // useEffect(() => {
  //     setErrMsg('')
  // }, [user, pwd])

  

  return (
    <div className="main">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>     
      <div className="row">
        <div className="myForm col-md-6">
          <div className="welcomeNote">
            <h6>Welcome Back</h6>
            <p>Please sign in to continue</p>
          </div>
          <form>
            <div className="myInput input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="myInput input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
              <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="form-check mb-0">
                <input class="rememberInput form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label class="rememberLabel form-check-label" for="form2Example3"> Remember me  </label>
              </div>
              <a className="forgot" href="#!" class="text-body">Forgot password?</a>
            </div>
            <div className="signinBtn text-center">
              <button type="button" class="btn btn-success">Sign in</button>
            </div>
            <div className="new text-center">
              <p>New to VetClinic? <a href="#!"> Create a new account</a></p>
            </div>
          </form>
        </div>
        <div className="signinVector col-md-6">
          <img src={signinVector} alt="signin" />
        </div>
      </div>
    </div>
  )


}

export default Login