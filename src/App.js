import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Coures from './pages/Courses';

function App() {
  return (
    <div className="App">
      <section> <Header /> </section>
      <section> <Navbar /> </section>
      <section> <Home /> </section>
      <section> <Coures /> </section>
      <section> <Footer /> </section>
    </div>
  );
}

export default App;
