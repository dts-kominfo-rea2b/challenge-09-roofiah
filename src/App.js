import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="boxContact">
          {contacts.map((data) => {
            return <Contact key={data.email} data={data} />
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
