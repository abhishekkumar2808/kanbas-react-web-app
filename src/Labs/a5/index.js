import EncodingParametersInURLs from "./EncodingParametersInURLs"
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {

    const API_BASE = process.env.REACT_APP_API_BASE;
    let URL = `${API_BASE}`.replace("api","");
    URL = URL + "a5/welcome"

    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={URL}
             className="list-group-item">
            Welcome
          </a>
          
        </div>
        <h1>Simple API Examples</h1>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
        
      </div>
    );
  }
  export default Assignment5;