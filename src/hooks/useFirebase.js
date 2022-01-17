import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,

} from 'firebase/auth'
import { useEffect, useState } from 'react'

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [authError, setAuthError] = useState('')


  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  const googleSignIn = (history, redirect_uri) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        setError('')
        setUser(user)
        history?.push(redirect_uri)
      })
      .catch(error => {
        const errorMessage = error.message
        setError(errorMessage)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const registerUser = (email, password, name, history,redirect_uri) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
  
        setAuthError('')
        const newUser = { email, displayName: name }
        // saveUser(email, name, 'POST')
        setUser(newUser)

        updateProfile(auth.currentUser, {
          displayName: name
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch(error => {
            // An error occurred
            // ...
          })
        
        // ...
      })
      history?.push(redirect_uri)
      .catch(error => {
        
        setAuthError(error.message)
        // ..
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const loginUser = (email, password, location, history) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const destination = location?.state?.from || '/'
        history.replace(destination)
        // Signed in
      
        setAuthError('')

        // ...
      })
      .catch(error => {
        
        setAuthError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        setError('')

        // ...
      }
      setIsLoading(false)
    })
  }, [])
  /*-------------
    sign out
    ---------------*/

  const handleSignOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
        setError('')
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
    googleSignIn,
    handleSignOut,
    registerUser,
    loginUser,
    authError
  }
}
export default useFirebase
