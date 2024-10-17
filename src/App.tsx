import { Ban, CheckCheck, Info, TriangleAlert } from 'lucide-react'
import './App.css'
import Alert from './components/ui/alert/Alert'

function App() {

  return (
    <>
      <Alert type='alert_danger' title='Error Alert' description="This is an error Alert." icon={<Ban />}/>
      <Alert type='alert_info' title='Info Alert' description="This is an info Alert." icon={<Info />}/>
      <Alert type='alert_success' title='Success Alert' description="This is an success Alert." icon={<CheckCheck />}/>
      <Alert type='alert_warning' title='Warning Alert' description={<div>This is an warning Alert. <a href="">link</a> Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>} icon={<TriangleAlert />}/>
    </>
  )
}

export default App
