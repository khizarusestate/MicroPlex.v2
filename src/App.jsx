import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from './components/Contact'
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
export default function App(){
  return(
    <>
    <ScrollProgress/>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}