import { OffCanvasExample } from './component/header'
import { Home } from './component/home'
import  DarkVariantExample  from './component/Carousel'
import BasicExample from './component/cards'
import Footer from './component/footer'
function App() {
  return (
    <>
    <div className='container'>
    <OffCanvasExample />
    <DarkVariantExample />
    <Home />
    <BasicExample/>
    </div>
    <Footer/>
    </>
  )
}

export default App
