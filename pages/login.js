import React from 'react'
import Link from 'next/link';
import auth0 from '../services/auth0';

const Login = () => {
    return (
        <div onClick={auth0.login} className="login"> Login
        <style jsx>{`
            .login{
                cursor: pointer;
            }
        `}

        </style>
         </div>
    )
}

export default Login
