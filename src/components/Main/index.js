import React from 'react'
import Footer from '../Footer'
import ScrolledElements from '../ScrolledElements'
import ModalContact from '../ModalContact'
import ModalThank from '../ModalThank'
function App() {
  return (
    <React.Fragment>
      <ScrolledElements />
      <ModalContact />
      <ModalThank />
      <Footer />
    </React.Fragment>
  )
}

export default App
