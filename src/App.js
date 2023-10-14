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
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld"
import Kanbas from './Kanbas/index'

function App() {
  return (
    <div>
      <HelloWorld />
      <Labs/>
      <Kanbas />
    </div>
      
  );
}
export default App;
