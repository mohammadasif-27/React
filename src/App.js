import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [page, setPage] = useState('home');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar setPage={setPage} />

      {/* Alert */}
      <Alert alert={alert} />

      {/* Pages */}
      {page === 'home' && (
        <div className="container">
          <TextForm showAlert={showAlert} />
        </div>
      )}

      {page === 'about' && (
        <div className="container">
          <About />
        </div>
      )}
    </>
  );
}

export default App;

