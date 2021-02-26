import React, {useState} from "react"
import GoogleLogin from "react-google-login";

 const Google =(props)=>{
 const [isSignedIn,setIsSignedIn] = useState(false);
 const [error,setError] = useState();
        const failResponse = (data) =>{
            if(data){
                setError(data);
            }
        }
    return(
        <>
        <GoogleLogin
                clientId="523594328071-mcppgl821vmufbh7ts570533mq7bjc4o.apps.googleusercontent.com"
                buttonText=""
                onSuccess={props.responseGoogle}
                onFailure={failResponse}
                cookiePolicy={"single_host_origin"}
                isSignedIn={isSignedIn}
                render={(renderProps) => (
                  <button
                  onClick={()=>{
                    setIsSignedIn(true);
                    renderProps.onClick();
                  }}
                    className="social-button"
                  >
                    <img
                      src="/images/google.svg"
                      style={{ width: "30px",float:"left",marginTop:'7px' }}
                    />
                   <span >Login With Google</span>
                  </button>
                )}
              />
            {error && <p style={{color:"red"}}>{error}</p>}
              </>
    )
}

export default Google