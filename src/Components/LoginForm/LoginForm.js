import React, { useContext, useState } from "react";
import "./LoginForm.css";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';




import {
  
  TextField,
  Box,
  FormControlLabel,
  
  Checkbox,
  Link, 
  
  
  
} from "@mui/material";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { SiteContext } from "../../Context/Context";

export const LoginForm = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setdisplayName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regLogState, setRegLogState] = useState(true);
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const { user, setUser, bg } = useContext(SiteContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberUpdates, setRememberUpdates] = useState(false);
 
  const [validEmailError, setValidEmailError] = useState(false);
  const [validNameError, setValidNameError]= useState(false);
  const [validLastNameError, setValidLastNameError] = useState(false);
  const[validConfirmPassword, setValidConfirmPassword]= useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [validAcceptTerms, setValidAcceptTerms] = useState(false);

  const handleToggleAcceptTerms = () => {
    setAcceptTerms(!acceptTerms);
    setValidAcceptTerms(false);
  };


  

  function isValidEmail(email) {
    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }
  const handleToggleRegisterPassword = () => {
    setShowRegisterPassword(!showRegisterPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
 
  const register = async () => {

    setValidLastNameError(false)
    setValidNameError(false)
    setValidEmailError(false)
    setValidConfirmPassword(false)

    if (!acceptTerms) {
      setErrorMessage("Please accept the terms and conditions");
      setValidAcceptTerms(true);
      return;
    }
    

    if (displayName === "") {
      setErrorMessage("Please Enter your name")
      setValidNameError(true);
      return;
    }

    if (lastName === "") {
      setErrorMessage("Please Enter your name")
      setValidLastNameError(true);
      return;
    }

    if (registerEmail === "" || !isValidEmail(registerEmail)) {
      setErrorMessage("Please Enter a valid Email Address");
      setValidEmailError(true);
      return;
    }

    if (registerPassword.length < 6) {
      setErrorMessage("Password should be at least 6 characters");
    }

    if (registerPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      setValidConfirmPassword(true);
      return;
    }
    const url = "https://librum-dev.azurewebsites.net/api/register";
    const data = {
      FirstName: displayName,
      LastName: lastName,
      Email: registerEmail,
      Password: registerPassword,
    };
    try {
      const headers = {
        "X-Version": "1.0",
      };
      const response = await axios.post(url, data, {
        headers,
      });

      console.log(response.data);

      // Registration successful
      console.log("Registration successful!");
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const login = async () => {
    const token = localStorage.getItem("token");
    console.log("clicked");
    // setLoading(true);
    const data = {
      Email: loginEmail,
      Password: loginPassword,
    };

    const headers = {
      "X-Version": "1.0",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        "https://librum-dev.azurewebsites.net/api/login",
        data,
        { headers }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data);
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      {regLogState ? (
        <div className="form-container login-form-container">
          <div
            className="log-form"
            style={
              bg === "light"
                ? {
                    backgroundColor: "white",
                    color: "var(--color-primary)",
                  }
                : {
                    backgroundColor: "#282c34",
                    color: "white",
                  }
            }
          >
            <div className="login-form-logo">
             <div className="login-form-logo-square" style={{ backgroundColor: bg === "light" ? "white" : "#302c2c" }}></div>
            </div>
            <div className="log-form-header">
              <h2>Welcome back!</h2>
              <small className="log-into-account">Log into your account</small>
            </div>

           
            <Box sx={{marginTop: "3rem"}}> 
              
              <TextField
                type="Email"
                
                label="Email"
                variant="outlined"
                size="small"
                value={loginEmail ? loginEmail : ""}
                name="Email"
                onChange={(e) => {
                  setloginEmail(e.target.value);
                }}
                sx={{
                  width: "100%",
                  
                  maxWidth: "400px",
                  marginBottom: "0.5rem",
                  
                  background: "transparent",
                  borderColor: "#ccc", 
                  color: "#aaa", 
                  "& .MuiInputLabel-outlined": {
                    color: "#aaa !important",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#aaa", 
                    
                    
                  },
                  
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#946bde",
                    
                  },
                  "& .MuiInputLabel-outlined": {
                    color: bg === "light" ? "black !important" : "#aaa !important",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: bg === "light" ? "#946bde" : "#ccc",
                  },
                 
                }}
                inputProps={{
                  style: {
                    color: "#aaa", 
                  },
                }}
              />
              
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                size="small"
                value={loginPassword ? loginPassword : ""}
                name="password"
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                        style={{ color: bg === "light" ? "black" : "#aaa" }}
                        
                        sx={{
                          
                          
                          transform: 'translateY(-17%)',

                          
                        }}
                      >
                        {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "100%",
                  marginTop: "2rem",
                  maxWidth: "400px",
                  marginBottom: "0.5rem",
                  background: "transparent",
                  size:"small",
                  borderColor: "#ccc", // Set a lighter border color
                  color: "#aaa", // Set a lighter label text color
                  "& .MuiInputLabel-outlined": {
                    color: "#aaa !important", // Set a lighter label outline color
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#aaa", // Set a lighter input text color
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#946bde",
                  },
                  "& .MuiInputLabel-outlined": {
                    color: bg === "light" ? "black !important" : "#aaa !important",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: bg === "light" ? "#946bde" : "#ccc",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#aaa", // Set a lighter input text color
                    
                  },
                }}
                inputProps={{
                  style: {
                    color: "#aaa", // Set a lighter input text color
                  },
                }}
              />
            </Box>
             
            <div className="form-checkbox-login">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    style={{ color: "#aaa" }}
                  />
                }
                label={
                  <span style={{ color: "#aaa", fontFamily: "'Lato', sans-serif",color: bg === "light" ? "black" : "#aaa", }}>
                    Remember me
                  </span>
                }
              />

              <Link
                href="#"
                underline="none"
                style={{ color: "#946bde", fontFamily: "'Lato', sans-serif" }}
              >
                Forgot password?
              </Link>
            </div>

            
            <button
              onClick={() => {
                login();
              }}
              className=" btn-login"
            >
              <span className="">L{`ogin`}</span>
            </button>
          </div>

          <div className="login-register-cta">
            {" "}
            Don't have an account? {" "}
            <span
              className="login-cta-text"
              onClick={() => {
                setRegLogState(false);
              }}
              
            >
              Register{" "}
            </span>
          </div>

        </div>
      ) : (
        <div className="form-container login-form-container">
          <div
            className="log-form"
            style={
              bg === "light"
                ? {
                    backgroundColor: "white",
                    color: "var(--color-primary)",
                  }
                : {
                    backgroundColor: "#282c34",
                    color: "white",
                  }
            }
          >
            <div className="log-form-header">
              <div className="login-form-logo">
              <div className="login-form-logo-square" style={{ backgroundColor: bg === "light" ? "white" : "#302c2c" }}></div>
              </div>
              <h2>Welcome</h2>
              <p className="credentials" style={{ color: "grey" }}>
                Your credentials are only used to authenticate yourself.  
                Everything will be stored in a secure database
              </p>
            </div>

            
             
            <div className="form-inputname2 reg2">       
                
                <TextField
                  type="text"
                  label="First Name"
                  variant="outlined"
                  value={displayName ? displayName : ""}
                  name="first-name"
                  size="small"
                  error={validNameError}
                  onChange={(e) => {
                    setdisplayName(e.target.value);
                  }}
                  sx={{
                    width: "100%",
                    maxWidth: "175px",
                    margin: "5px 0",
                    
                    
                    background: "transparent",
                    borderColor: "#ccc", 
                    color: "#aaa", 
                    "& .MuiInputLabel-outlined": {
                      color: bg === "light" ? "black !important" : "#aaa !important", 
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ccc",
                    },
                    "& .MuiOutlinedInput-input": {
                      color: "#aaa", 
                    },
                    "& .MuiOutlinedInput-input": {
                      color: "#aaa", 
                      
                      
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#946bde",
                    },
                  }}
                  inputProps={{
                    style: {
                      color: "#aaa", 
                    },
                  }}
                />

                  
                
             

              
                
                <TextField
                    type="text"
                    name="Last-name"
                    value={lastName ? lastName : ""}
                    size="small"
                    label="Last Name"
                    variant="outlined"
                    error={validLastNameError}
                    
                    
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    sx={{
                      width: "100%",
                      
                      maxWidth: "175px",
                      margin: "5px 0",
                      
                      
                      background: "transparent",
                      borderColor: "#ccc", 
                      color: "#aaa", 
                      "& .MuiInputLabel-outlined": {
                        color: bg === "light" ? "black !important" : "#aaa !important",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ccc",
                      },
                      "& .MuiOutlinedInput-input": {
                        color: "#aaa", // Set a lighter input text color
                      },
                      "& .MuiOutlinedInput-input": {
                        color: "#aaa", // Set a lighter input text color
                        
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#946bde",
                      },
                    }}
                    inputProps={{
                      style: {
                        color: "#aaa", // Set a lighter input text color
                      },
                    }}
                />
            </div>          
                  
                
              
           



            <Box>
              <TextField
                type="Email"
                size="small"
                label="Email"
                variant="outlined"
                value={registerEmail ? registerEmail : ""}
                name="Email"
                error={validEmailError} // Set the error prop based on validEmailError
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  marginBottom: "",
                  background: "transparent",
                  color: "#aaa",
                  "& .MuiInputLabel-outlined": {
                    color: bg === "light" ? "black !important" : "#aaa !important",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: validEmailError ? "red" : "#ccc", // Apply red border when validEmailError is true
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#aaa",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#946bde",
                  },
                }}
                inputProps={{
                  style: {
                    color: "#aaa",
                  },
                }}
              />

              
              
              
                
              
            

            
              <TextField
                label="Password"
                size="small"
                type={showRegisterPassword ? "text" : "password"}
                variant="outlined"
                value={registerPassword ? registerPassword : ""}
                name="password"
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleToggleRegisterPassword}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                        style={{ color: bg === "light" ? "black" : "#aaa" }}
                        
                        sx={{
                          
                          
                          transform: 'translateY(-17%)',

                          
                        }}
                      >
                        {showRegisterPassword ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <VisibilityOutlinedIcon />
                        )}
                            </IconButton>
                          </InputAdornment>
                        ),
                        }}
                sx={{
                  width: "100%",
                  marginTop: "1.5rem",
                  maxWidth: "400px",
                  
                  background: "transparent",
                  borderColor: "#ccc",
                  color: "#aaa", 
                  "& .MuiInputLabel-outlined": {
                    color: bg === "light" ? "black !important" : "#aaa !important",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#aaa", 
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#aaa", 
                    
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#946bde",
                  },
                }}
                inputProps={{
                  style: {
                    color: "#aaa", 
                  },
                }}
              />
              <TextField
                label="Confirmation Password"
                type={showConfirmPassword ? 'text' :  'password'}
                
                variant="outlined"
                size="small"
                value={confirmPassword ? confirmPassword : ""}
                name="password"
                error={validConfirmPassword}
                
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                        style={{ color: bg === "light" ? "black" : "#aaa" }}
                        
                        sx={{
                          
                          
                          transform: 'translateY(-17%)',

                          
                        }}
                      >
                          {showConfirmPassword ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <VisibilityOutlinedIcon />
                        )}
                            </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "100%",
                  marginTop: "1.5rem",
                  maxWidth: "400px",
                  marginBottom: "0rem",
                  background: "transparent",
                  borderColor:
                    errorMessage === "Passwords don't match" ? "crimson" : "#ccc",
                  color: "#aaa",
                  "& .MuiInputLabel-outlined": {
                    color: bg === "light" ? "black !important" : "#aaa !important",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor:
                      errorMessage === "Passwords don't match" ? "crimson" : "#ccc",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#aaa",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#aaa", // Set a lighter input text color
                    
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#946bde",
                  },
                }}
                inputProps={{
                  style: {
                    color: "#aaa",
                  },
                }}
              />
              <div className="form-error">{errorMessage}</div>
            
              
                  
                  
                
            </Box>

            

            <div className="form-checkbox">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberUpdates}
                    onChange={() => setRememberUpdates(!rememberUpdates)}
                    sx={{
                      color: '#aaa',
                      '& .MuiSvgIcon-root': {
                        marginTop: "-6px",
                      },
                    }}
                  />
                }
                label={
                  <span
                    style={{
                      color: '#aaa',
                      fontFamily: "'Lato', sans-serif",
                      color: bg === 'light' ? 'black' : '#aaa',
                    }}
                  >
                    Keep updated about improved features and upcoming improvements.
                  </span>
                }
                sx={{
                  alignItems: 'flex-start',
                }}
              />        

             





              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptTerms}
                    onChange={handleToggleAcceptTerms}
                    
                    sx={{
                      color: '#aaa',
                      '& .MuiSvgIcon-root': {
                        marginTop: '-21px',
                      },
                    }}
                    style={{ color: validAcceptTerms ? "red" : "#aaa",
                     }}
                  />
                }
                label={
                  <span style={{ color: "#aaa", fontFamily: "'Lato', sans-serif", cursor: "default" ,color: bg === "light" ? "black" : "#aaa" }}>
                    I accept the&nbsp;
                    <a href="/terms" style={{ color: "var(--color-primary)" }}>Terms of Service</a>
                    &nbsp;and the&nbsp;
                    <a href="/privacy" style={{ color: "var(--color-primary)" }}> privacy policy</a>.
                  </span>
                }
              />
            </div>


            <button
              className=" btn-login2"
              onClick={() => {
                register();
              }}
            >
              <span className="">L{`et's start`}</span>
            </button>

          </div>
          <div className="login-register-cta">
                {" "}
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setRegLogState(true);
                  }}
                  style={{  cursor: "pointer" }}
                >
                  {" "}Login{" "}
                </span>
                
          </div>
        </div>
      )}
      
    </div>
  );
};
