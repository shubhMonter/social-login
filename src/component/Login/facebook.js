import React from "react"
import FacebookLogin from "react-facebook-login";

 const Facebook =(props)=>{     
    return(
        <>
        <FacebookLogin
              appId="379779383176561"
              //autoLoad={true}
              textButton=""
              fields="name,email,picture"
              callback={props.responseFacebook}
              cssClass="social-button"
              icon={
                <span>
                  <img
                    src="/images/facebook.png"
                    style={{ width: "35px",float:"left",marginTop:'5px' }}
                  />
                  Login With FaceBook
                </span>
              }
            />
              </>
    )
}

export default Facebook