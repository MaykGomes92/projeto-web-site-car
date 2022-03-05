import './App.css';
import Main from './components/Main/Main';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Sidebar from './components/Sidebar/Sidebar';
import Slide from './components/Slide';


function App() {
  return (
    <>
    <Slide />
    <Sidebar />
    <main>
    <Main />
    <Section1 />
    <Section2 />
    </main>
    </>
  );
}

export default App;
