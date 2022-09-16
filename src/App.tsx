import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateAcct from './forms/CreateAcct'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import StaffDashboard from './pages/Dashboard'

export function App() {
  return (
    <BrowserRouter>
      <div>App goes here</div>
      <BrowserRouter>
      <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dash" element={<Dashboard/>}/>

      </Routes>
      </BrowserRouter>
      <CreateAcct/>
    </BrowserRouter>
  )
}
