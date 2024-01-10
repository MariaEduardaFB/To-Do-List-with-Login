import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Tasks from './Tasks.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tasks" element={<Tasks />} />
        {/* Outras rotas aqui, se necessário */}
      </Routes>
    </Router>
  );
}

export default App;
