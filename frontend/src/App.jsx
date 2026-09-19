import Header from "./components/header"
import Footer from "./components/footer"
import Sobre from "./components/sobre"
import RecursoCard from "./components/recursoCard"
import Recursos from "./components/Recurso"
import Hero from "./components/hero"
export default function App(){

  return(
    <div className="min-h-screen bg-slate-500 p-10">
      <Header />

      <main >
        <Hero />
        <Recursos />
        <Sobre />
      </main>

      <Footer />
    </div>
    )
  
  
}