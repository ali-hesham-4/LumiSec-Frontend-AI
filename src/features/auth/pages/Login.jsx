import React from 'react'
import logo from "../../../assets/LumiSecLogoB 1@3x.png"
import icon from"../../../assets/Vector.png"
import  "./login.css"
import "../../../styles/global.css"
import { Link } from 'react-router-dom'

export default function Login() {
    return <>
    <div className='login-body pb-5'>
        <div className='container'>
        <div className='row vh-100 d-flex justify-content-center align-items-center'>
            <div className='col-12 col-lg-6'>
                <div className='d-flex align-items-center'>
                    <figure className='me-3 w-25'>
                        <img src={logo} className='w-100' alt="logo" />
                    </figure>
                    <div>
                        <h1 className='text-purple'>LumiSec</h1>
                        <p className='text-secondary w-75'>A Hybrid Cybersecurity Simulation and Real-Time Response Platform.</p>
                    </div>
                </div>
                <h2 className='colred-text w-35 mb-2'>Sign in to your account</h2>
                <p className='text-secondary w-50 mb-5'>Use your institution credentials or project account to access LumiSec dashboard. Access is logged and audited.</p>
                <div className='rounded-3 p-3 dark-background'>
                    <h3 className='text-purple'>Why secure login?</h3>
                    <ul>
                        <li className='text-secondary'>All checks are recorded in audit logs.</li>
                        <li className='text-secondary'>Secure Your Environment.</li>
                        <li className='text-secondary'>Use institution authorization for sensitive operations.</li>
                    </ul>
                </div>
            </div>
            <div className='col-12 col-lg-6'>
                <div className='login-form rounded-4 p-3 py-4 form-background'>
                        <div className='d-flex justify-content-between align-align-items-center'>
                            <div>
                                <h3 className='text-white'>Welcome back</h3>
                                <p className='text-secondary'>Sign in to continue to LumiSec</p>
                        </div>
                            <p className='text-secondary mb-0 d-flex align-items-center'>secure</p>
                        </div>
                    <form action="">
                        <div className='mb-4'>
                            <label className='text-secondary' htmlFor="email">Email</label>
                            <input className='form-control input-field rounded-3 mb-3' type="email" id='email' placeholder='you@organization.org' />
                        </div>
                        <div className='mb-4'>
                            <label className='text-secondary' htmlFor="Password">Password</label>
                            <input className='form-control mb-3 input-field rounded-3 mb-3' placeholder='Your secure password' type="password" id="password"  />
                        </div>
                        <div className='d-flex justify-content-between mb-4'>
                            <div className='mb-3 d-flex align-items-center'>
                            <input className='checkbox-input me-2' type="checkbox" id='rememberMe' />
                            <label className='rememberMe-label' htmlFor="rememberMe">Remember me</label>
                            </div>
                            <Link className='text-purple text-decoration-none'>Forgot password?</Link>
                        </div>
                        <button className='sign-in-btn border-0 text-white w-100 pt-3 p-2 rounded-3 mb-3'>Sign in</button>
                        <p className='text-secondary text-center position-relative sepration-text'>or continue with</p>
                        <button className='bg-sso-btn text-white w-100 pt-3 p-2 rounded-3 mb-3'>
                            <img className='mx-3 w-4' src={icon} alt="icon" />
                            SSO
                            </button>
                    </form>
                    <p className='text-secondary'>By signing in you agree to our <span className='text-purple'>Terms</span>  & <span className='text-purple'>Privacy</span> </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
}
