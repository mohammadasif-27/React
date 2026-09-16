import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

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
      <div className="container">
        <Navbar />
      </div>

      <Alert alert={alert} />

      <div className="container">
        <TextForm showAlert={showAlert} />
        <About/>
      </div>

      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;