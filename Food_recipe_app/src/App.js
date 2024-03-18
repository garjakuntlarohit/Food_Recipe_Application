import './App.css';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
