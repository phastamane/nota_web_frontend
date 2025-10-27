
import { HeroUIProvider } from '@heroui/react'
import MainPage from './pages/MainPage'
import Hero from './components/hero/Hero'
import Clients from './components/clients/Clients'
import Functions from './components/functions/Functions'
import Feautures from './components/features/Features'
import Benefits from './components/benefits/Benefits'
import Tarifs from './components/tarifs/Tarifs'
import Footer from './common/footer/Footer'


function App() {
  
  const stylesOfButtons: string[] =['']
  
  return (
    <HeroUIProvider>
      <MainPage/>
      <Hero/>
      <Clients/>
      <Functions/>
      <Feautures/>
      <Benefits/>
      <Tarifs/>
      <Footer/>
    </HeroUIProvider>
  )
}

export default App
