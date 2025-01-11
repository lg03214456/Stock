// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import StockList from './components/StockList';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';


function App() {
    return (
        // <div>
        //     <h1>我的 React App</h1>
        //     <StockList />
        // </div>
        <Router>
        <Routes>
            <Route path="/" element={<StockList />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    </Router>
    );
}

export default App;
