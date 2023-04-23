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
            <Route path="/" element={<iframe src="/login.html" />} />
            <Route path="/signup" element={<iframe style="width:1535px; height: 910px" src="/signup.html" />} />
            <Route path="/app" element={<Body />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        </Router>
      );
}

export default App;