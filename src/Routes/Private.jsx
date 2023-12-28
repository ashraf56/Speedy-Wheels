import React, { useContext } from 'react';
import { ContextAuth } from '../Routes/AuthenticationCenter';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    let { user, loader } = useContext(ContextAuth)
    let location = useLocation();
    if (loader) {
        return <div className='text-center' style={{ height: '500px' }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        </div>


    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
}



export default Private;