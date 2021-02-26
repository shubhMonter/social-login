import React, { Suspense,useState,useEffect } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
// routes config
import routes from '../../routes'

const TheLayout =() => {
    const [auth,setAuth] =  useState(JSON.parse(localStorage.getItem('auth')));
  
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('auth'));
        setAuth(data);
    },[])
  return (
    <main className="c-main">
  
        <Suspense fallback='Loading...'>
          <Switch>
           
           { routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  
                  render={props => 
                   auth && auth.expiresIn >  Date.now() / 1000 && auth.Role == route.path.split('/')[1] ? (
                     
                      <route.component {...props} Role={auth.Role}/>
                   
                    ) : (
                      <Redirect to="/" />
                    )
                  } />
              )
            })}
          
          </Switch>
        </Suspense>
    </main>
  )
}

export default TheLayout;

