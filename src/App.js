import './App.css';
import Main from './components/Main/Main';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Slide from './components/Slide';
import Fotos from './components/Galeria/Fotos';


function App() {

    const {pathname} = window.location;


  console.log(pathname)
      if(pathname === '/galle-photos'){
        return (
          <Fotos />
        )
      }
      return (
        <>
        <Slide />
        <Sidebar />
        <main>
        <Main />
        <Section1 />
        <Section2 />
        </main>
        <Footer />
        </>
      );
 
}

export default App;
