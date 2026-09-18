import Header from "./components/header"
import Footer from "./components/footer"
import Sobre from "./components/sobre"
export default function App(){

  return(
    <div className="min-h-screen bg-blue-100 p-10">
      <Header />

      <main >
        <Sobre />
      </main>

      <Footer />
    </div>
    )
  
  
}