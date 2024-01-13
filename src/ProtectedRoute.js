import React from 'react';
import {Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children}) => {

  const { isSignedIn } = useAuth();
  console.log("signin value at protected route: ", isSignedIn)
  // console.log("element: ", props.element)

  return (

    isSignedIn? ( 
    children
    )
    :
    (<Navigate to="/" />)



   
  );
};

export default ProtectedRoute;