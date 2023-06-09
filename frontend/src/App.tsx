import Navbar from './Navbar'
import Modal from './Modal'

function App() {
  return (
    <div>
      <Modal isOpen disabled={false} actionLabel="My Button" />
      <Navbar />
    </div>
  )
}

export default App
