import { Title } from '@mantine/core'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import UserProvider from './components/contexts/UserProvider'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import Index from './pages/Index'
import { queryClient } from './services/QueryClient'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Title> MPTC ASSESSMENT </Title>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dash" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  )
}
