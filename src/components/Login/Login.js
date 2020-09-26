import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';



function Login() {

  const[newUser,setNewUser]= useState(false);
  const [user,setUser] = useState({
    isSignIn : false,
    newUser : false,
    name :'',
    email :'',
    photo :''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = ()=>{
      handleGoogleSignIn()
      .then(res=> {
        handleResponse(res, true);
      })
  }

  const fbSignIn = ()=>{
    handleFbSignIn()
    .then(res => {
            handleResponse(res, true); 
    })
}

  const signOut =()=>{
    handleSignOut()
    .then(res => {
        handleResponse(res, false);
    })
  }
 
  
const handleResponse = (res, redirect)=>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }
  
  


  const handleBlur=(event)=>{
    let isFormValid = true;
    console.log(event.target.name, event.target.value);
    if(event.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);

    }
    if(event.target.name === 'password'){
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (event) =>{
    if (newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res =>{
        handleResponse(res, true);
      })
    }
    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res =>{
        handleResponse(res, true);
      })
    }
    event.preventDefault();
  }

  
  return (
    <div>
        <div style={{textAlign : 'center'}}>
          <div className="sign-in-form">

            {/* <input type="checkbox" onChange = {()=>setNewUser(!newUser)} name="newUser" id=""/> */}
            <input type="checkbox" onChange = {()=>setNewUser(!newUser)} name="newUser" id=""/>
            <label htmlFor="newUser">New User SignUp</label>
            {
              !newUser && <h5>Login</h5>
            }
            {
              newUser && <h5>Create an account</h5>
            }
            <form onSubmit={handleSubmit}>
              {newUser && <input className="field-style" type="text" onBlur={handleBlur} name="name" placeholder="Username" required/>}
              <br/>
              <input type="text" onBlur={handleBlur} name="email" placeholder="Your Email" required/>
              <br/>
              <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required/>
              <br/>
              <input type="submit" onClick ={handleSubmit} value={newUser ? 'Sign up' : 'Log In'}/>
            </form>
            <p style={{color:'red'}}>{user.error}</p>
            {
              user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Logged In'} Successfully !!</p>
            }
            {/* {
               <p><small>{!newUser ? 'Donot Have an Account?' : 'Already have an Account?'} <a href="" onClick = {()=>setNewUser(!newUser)}>{!newUser ? 'Create an account' : 'Log In'}</a></small></p>
            } */}
            {/* {
              !newUser && <p><small>Don't Have an Account? <a href="" onClick = {()=>setNewUser(!newUser)}>Create an account</a></small></p>
            }
            {
              newUser && <p><small>Already have an Account? <a href="" onClick = {()=>setNewUser(newUser)}>Login</a></small></p>
            } */}
          </div>
          <p>------------------------------ Or --------------------------</p>
          <div>
            <div className="facebook">
              
              <button onClick={fbSignIn}><img src={"https://imgur.com/CDOrfVc.png"} alt=""/> Continue with Facebook</button>
              {
                user.isSignIn && <div>
                  <p> Welcome, {user.name}</p>
                  <p>Your email : {user.email}</p>
                  <img src={user.photo} alt=""/>
                </div>
              }
            </div>
          <div className="google">
            {
              user.isSignIn ? <button onClick={signOut}>Sign Out</button>
              : <button onClick={googleSignIn}><img src={"https://imgur.com/q4dusK5.png"} alt=""/>Continue with Google</button>
              
            }
          </div>
          
          </div>
          
        </div>
    </div>
    
  );
}

export default Login;
