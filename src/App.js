import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const people = [
    {
      name: 'MissMayulee Chailangka',
      description: "นางสาวมยุลีย์ พงษ์บุพศิริกุล\nหัวหน้าสาขางานเทคโนโลยีสารสนเทศ",
      img: 'https://www.lannapoly.ac.th/online/Tea_picture/10402.jpg'
    },
    {
      name: 'MissMayulee Chailangka',
      description: "นางสาวมยุลีย์ พงษ์บุพศิริกุล\nหัวหน้าสาขางานเทคโนโลยีสารสนเทศ",
      img: 'https://www.lannapoly.ac.th/online/Tea_picture/10402.jpg'
    }
  ];
  return (
    <div className="App">
      <section> <Navbar /> </section>
      <section> <Header /> </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-4">
        {people.map((person, index) => (
          <div className="col-1" key={index}>
            <Home 
              name={person.name}
              description={person.description} 
              img={person.img} 
            />
          </div>
        ))}
      </section>
      <section> <Footer /> </section>
    </div>
  );
}

export default App;
