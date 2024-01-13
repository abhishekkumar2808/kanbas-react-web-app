
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld"
import Kanbas from './Kanbas/index'
import {HashRouter} from "react-router-dom"
import {Routes, Route} from "react-router";
import Project from "./Project";
import LandingPage from "./LandingPage";

function App() {
  return (
    <HashRouter>
      <div>
          <Routes>
              <Route path="/*"           element={<LandingPage />}/>
              <Route path="/project/*" element={<Project />} />
              <Route path="/hello"    element={<HelloWorld/>}/>
              <Route path="/Labs/*"   element={<Labs/>}/>
              <Route path="/Kanbas/*" element={<Kanbas/>}/>
          </Routes>

      </div>  
    </HashRouter>
    
      
  );
}
export default App;
 