import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const showMessage = () => {
    setMessage('Hello from frontend!');
  };

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={showMessage}>
          Get Backend Message
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default App;
