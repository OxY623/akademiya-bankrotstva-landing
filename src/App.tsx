import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Advantages, Market, Who, Process, Trust } from './components/Sections';
import { Calculator } from './components/Calculator';
import { Comparison } from './components/Comparison';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Advantages />
      <Market />
      <Who />
      <Process />
      <Trust />
      <Calculator />
      <Comparison />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
