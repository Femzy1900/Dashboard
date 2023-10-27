import './App.css'
import Header from './component/Header/Header'
import Menu from './component/Menu/Menu'

function App() {

  return (
    <div className='flex'>
      <div className="">
        <Menu />
      </div>
      <div>
        <Header />
      </div>
    </div>
  )
}

export default App
