import React from "react";
import Body  from "./Body";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { Switch } from 'react-router';
// import Signup from "./signup";
// import Login from "./Login"

function App(){
    return (
        <Router>

        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/signup" element={<iframe src="/signup.html" />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        </Router>
      );
}

export default App;