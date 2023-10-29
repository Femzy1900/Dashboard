import './App.css'
import Body from './component/Body/Body'
import Menu from './component/Menu/Menu'

function App() {

  return (
    <div className='flex bg-[#efefef]'>
      <div className="flex-1">
        <Menu />
      </div>
      <div>
        <Body />
      </div>
    </div>
  )
}

export default App
