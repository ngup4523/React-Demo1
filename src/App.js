import { Link, Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';
import React from 'react';
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
// class App  extends React.Component {
//   render() {
//     return (
//       <div>First Component</div>
//     )
//   }
// }

function App() {
  return (
    // <div>func component</div>
    // <React.Fragment>
    //   <Routes>
    //   <Route path='/todos' Component={TodoList} />
    //   <Route path='/profile' Component={Profile} />
    //   </Routes>
    //   <Navigation />
    // </React.Fragment>
    <TesterFunc></TesterFunc>
  )
}
export default App;

const Profile = () => {
  return (
    <div>
      Profile
    </div>
  )
}

const Navigation = () => {
  return (    
    <div>
    <Link to='/todos'>TodoList</Link>
    <br />
    <Link to='/profile'>Profile</Link>
    </div>
  )
}

function TesterFunc() {
  let value = true
  return (
    <div>{ value ? "Value is true": "Value is false"}</div>
  )
}