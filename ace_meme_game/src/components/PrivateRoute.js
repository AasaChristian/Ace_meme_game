import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, socket, ...allProps }) => {
    return (
      <Route
        {...allProps}
        
        render={props => {
          if (localStorage.getItem('token')) {
            
            return <Component {...props} socket={socket} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };

  export default PrivateRoute;