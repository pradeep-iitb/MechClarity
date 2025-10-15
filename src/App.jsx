import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TimeAndBooks from './components/TimeAndBooks'
import Notes from './components/Notes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/Images/bg.jpg')" }}>
      <Header />
      <main>
        <Hero />
        <TimeAndBooks />
        <Notes />
      </main>
      <Footer />
    </div>
  )
}

export default App
