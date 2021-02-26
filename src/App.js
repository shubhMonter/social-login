import './App.css';
import Home from "./pages/home"
import TheLayout from "./component/Layout/TheLayout";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
// Check for token
if (localStorage.getItem('auth')) {

  let auth = JSON.parse(localStorage.getItem('auth'))
  
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (auth.expireIn < currentTime) {
    // Logout user

     // Clear current Profile
    localStorage.removeItem('auth');
   
    // Redirect to login
    window.location.href = '/';
  }
}


function App() {
  return (
    <div className="App">
     
      <Router>
     <Route exact path="/" component={Home} />
     <Switch>
     <Route exact path="/facebook" name="facebbok" render={props => <TheLayout {...props} /> } />
     <Route exact path="/google" name="google" render={props => <TheLayout {...props} />} />
     </Switch>
   </Router>
    </div>
  );
}

export default App;
