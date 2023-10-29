import { Link } from "react-router-dom";
import db from "../Database";


function Dashboard() {
  const courses = db.courses;
  return (
    <div className="container-fluid">
      <h2 style={{margin:0}}>Dashboard</h2>
      <hr/>
      <h2>Published Courses({courses.length})</h2>
      <div className="row flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4" style={{marginBottom:10, marginLeft:0}}>
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item" style={{width: "250px", marginRight: "20px"}}>
            <div class="card h-80" style={{width:"250px"}}>
                <img src={course["img-url"]} class="card-img-top" alt={course.name} style={{height:"140px"}} />
                <div class="card-body">
                    <h5 class="card-title">{course.name}</h5>
                    <p class="card-text">{course.number}</p>
                    <p class="card-text">{`Start Date: ${course.startDate}`}</p>
                    <button style={{width: "100%"}} class="btn btn-primary">Course page</button>
                </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}
export default Dashboard;