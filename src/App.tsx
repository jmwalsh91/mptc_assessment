import { BrowserRouter } from 'react-router-dom'
import CreateAcct from './forms/CreateAcct'

export function App() {
  return (
    <BrowserRouter>
      <div>App goes here</div>
      <CreateAcct/>
    </BrowserRouter>
  )
}
