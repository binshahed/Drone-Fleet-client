import './Register.css'
import { useForm } from 'react-hook-form'

import Footer from '../Footer/Footer'
import Navigation from '../Shared/Navigation/Navigation'
import useAuth from '../context/useAuth'

import { Alert, Spinner } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const Register = () => {
  const { user, isLoading, handleSignUpWithEmailPassword,error, authError, googleSignIn } = useAuth()

  const location = useLocation()
 
  const redirect_uri = location.state?.from || '/'

  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    handleSignUpWithEmailPassword(
      data.name,
      data.email,
      data.password,
   
      redirect_uri
    )
  }

  console.log(authError);

  return (
    <div>
      <Navigation />
      <div className='container py-5 my-5'>
        <div className='row justify-content-center mt-5'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='card shadow'>
              <div className='card-title text-center border-bottom'>
                <h2 className='p-3'>Register</h2>
              </div>
              <div className='card-body'>
                {!isLoading && (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                      <label className='form-label'>Name</label>
                      <input
                        {...register('name')}
                        type='text'
                        className='form-control'
                        id='username'
                      />
                    </div>
                    <div className='mb-4'>
                      <label className='form-label'>Email</label>
                      <input
                        {...register('email')}
                        type='email'
                        className='form-control'
                        id='username'
                      />
                    </div>
                    <div className='mb-4'>
                      <label className='form-label'>Password</label>
                      <input
                        {...register('password', { required: true })}
                        type='password'
                        className='form-control'
                        id='password'
                      />
                    </div>
                    <div className='mb-4'>
                      <label className='form-label'>Retype Password</label>
                      <input
                        {...register('password1', { required: true })}
                        type='password'
                        className='form-control'
                        id='password'
                      />
                    </div>

                    <div className='d-grid'>
                      <button type='submit' className='btn text-light bg-dark'>
                        Register
                      </button>
                    </div>
                  </form>
                )}
                {isLoading && <Spinner animation='border' variant='danger' />}
                <div className='mt-3 text-center'>
                  <p>
                    Already have an account? Please{' '}
                    <Link to='/login'>Login</Link>.
                  </p>
                  <button
                    onClick={() => googleSignIn(history, redirect_uri)}
                    type='button'
                    className='login-with-google-btn'
                  >
                    Sign in with Google
                  </button>
                </div>
                {user?.email && (
                  <Alert
                    style={{ textAlign: 'center', marginTop: '15px' }}
                    severity='success'
                  >
                    User Successfully Created
                  </Alert>
                )}
                {error && (
                  <Alert
                    style={{ textAlign: 'center', marginTop: '15px' }}
                    variant='danger'
                  >
                    {error}
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register
