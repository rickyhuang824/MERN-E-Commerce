import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Pay } from './pages/Pay';
import { Success } from './pages/Success';


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/pay" element={ <Pay /> }></Route>
              <Route path="/success" element={ <Success /> }></Route>
          </Routes>
      </Router>
  );
}

export default App;
