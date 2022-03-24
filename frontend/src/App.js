import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Loading } from './components'

const Landing = lazy(() => import('./pages/landing/Landing.js'))
const Register = lazy(() => import('./pages/register/Register.js'))
const Error = lazy(() => import('./pages/404/Error.js'))

const App = () => {
  return (
    <Routes>
      <Route
        path='/landing'
        element={
          <Suspense fallback={<Loading />}>
            <Landing />
          </Suspense>
        }
      />
      <Route
        path='/register'
        element={
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path='*'
        element={
          <Suspense fallback={<Loading />}>
            <Error />
          </Suspense>
        }
      />
    </Routes>
  )
}
export default App
