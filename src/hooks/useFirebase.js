import axios from 'axios'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { apiUrl } from '../config/config'

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const [admin, setAdmin] = useState(false)

  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  const googleSignIn = (history, redirect_uri) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        setError('')
        setUser(user)
        upsertUserDb(user.email, user.displayName)
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

  const handleSignUpWithEmailPassword = (
    name,
    email,
    password,
    history,
    redirect_uri
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user
        setUser(user)
        updateDisplayName(name)
        history.push(redirect_uri)
        setError('')
      })
      .catch(error => {
        const errorMessage = error.message
        console.log()
        setError(errorMessage)
        // ..
      })
  }

  const updateDisplayName = name => {
    setIsLoading(true)
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(userCredential => {
        setUser(userCredential.user)
      })
      .catch(() => {
        setError(error.message)
      })
  }

  const loginUser = (email, password, location, history) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const destination = location?.state?.from || '/'
        history.replace(destination)
        // Signed in

        setError('')

        // ...
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  // set admin
  useEffect(() => {
    fetch(`${apiUrl}/users/${user.email}`)
      .then(response => response.json())
      .then(data => {
        setAdmin(data.admin)
      })
  }, [user.email])

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribed
  }, [auth])

  const saveUserDB = (email, displayName) => {
    const user = { email, displayName }
    axios.post(`${apiUrl}/users`, user).then()
  }
  const upsertUserDb = (email, displayName) => {
    const user = { email, displayName }
    axios.put(`${apiUrl}/users`, user).then()
  }

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
    admin,
    setError,
    googleSignIn,
    handleSignOut,
    handleSignUpWithEmailPassword,
    loginUser
  }
}
export default useFirebase
