import React, {Component} from 'react'
import Google from "../component/Login/google"
import Facebook from "../component/Login/facebook"  
class Home extends Component{
    state={
        error:''
    }
    componentDidMount(){
        if(localStorage.getItem('auth')){
            console.log();
              this.props.history.push(`/${JSON.parse(localStorage.getItem('auth')).Role}`)
        }else{
            this.props.history.push(`/`)
        }
    }
    response = (data) =>{
        let auth ={};
        if(data){
           auth.Role = data.graphDomain ? data.graphDomain : data.tokenObj.idpId;
           auth.user = {
               email:data.email ? data.email : data.profileObj.email,
               name:data.name ? data.name : data.profileObj.familyName + data.profileObj.giveName,
               id:data.userId ? data.userId : data.googleId
           }
           auth.expiresIn = data.data_access_expiration_time ? data.data_access_expiration_time : data.tokenObj.expires_at;
           auth.accessToken = data.accessToken ? data.accessToken :data.tokenObj.access_token
           localStorage.setItem('auth',JSON.stringify(auth));
           if(auth.Role){
                this.props.history.push(`/${auth.Role}`)
           }
        }else{
            this.setState({error:'Login Unsucessfull!!'});
        }
       
    }
    render(){
        const {error} = this.state
        return( <header className="App-header">
            <p>Login Options:</p>
            <div className="row" >
            <Google className="col-md" responseGoogle={this.response}/>
            <Facebook className="col-md" responseFacebook={this.response} />
            </div>
            {error && <p>{error}</p>}
        </header>)
    }

}

export default Home;