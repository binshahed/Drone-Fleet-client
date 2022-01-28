import './Register.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navigation from '../Shared/Navigation/Navigation'
import { Alert, Spinner } from 'react-bootstrap'
import useAuth from '../context/useAuth'
import {
  useHistory,
  useLocation
} from 'react-router-dom/cjs/react-router-dom.min'

const Login = () => {
  const { loginUser, isLoading, authError, googleSignIn } = useAuth()

  const location = useLocation()
  const history = useHistory()
  const redirect_uri = location.state?.from || '/'

  const handleGoogleSignIn = () => {
    googleSignIn(history, redirect_uri)
  }

  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    loginUser(data.email, data.password, location, history)
  }

  return (
    <div>
      <Navigation />
      <div className='container py-5 my-5'>
        <div className='row justify-content-center mt-5'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='card shadow'>
              <div className='card-title text-center border-bottom'>
                <h2 className='p-3'>Login</h2>
              </div>
              <div className='card-body'>
                {!isLoading && (
                  <form onSubmit={handleSubmit(onSubmit)}>
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

                    <div className='d-grid'>
                      <button type='submit' className='btn text-light bg-dark'>
                        Login
                      </button>
                    </div>
                  </form>
                )}
                {isLoading && <Spinner animation='border' variant='danger' />}
                <div className='mt-3 text-center'>
                  <p>
                    New User? Please <Link to='/register'>Register</Link>.
                  </p>
                  <button
                    onClick={handleGoogleSignIn}
                    type='button'
                    className='login-with-google-btn'
                  >
                    Sign in with Google
                  </button>
                </div>
                {authError && (
                  <Alert
                    style={{ textAlign: 'center', marginTop: '15px' }}
                    variant='danger'
                  >
                    {authError}
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

export default Login
