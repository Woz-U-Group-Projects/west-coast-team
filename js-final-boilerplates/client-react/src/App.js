import React from "react";
import  Task from "./components/Task";
import "./App.css";

/*
function App() {
  return (
    <div className="App">
      <Task />
    </div>
  );
}
*/


function App() {
  return (
    <>
    <Navbar/>
   <Router>
     <Route path="/" exact render={() => <Home />} />
     <Route path="/register" exact render={() => <Register />} />
     <Route path="/login" exact render={() => <Login />} />
   </Router>
   </>
  );
}

export default App;
