import React, {useState} from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom'
import FeedbackApp from "./FeedbackApp/FeedbackApp";
import MainPage from "./MainPage/MainPage";
import {ImEnter, ImExit} from "react-icons/im";
import NavBar from "./components/shared/NavBar";

const App = () => {
    const [login, setLogin] = useState(false)
    return (
        <Router>
            <NavBar />

            <Routes>
                <Route path='*' element={<MainPage login={setLogin} islogin={login} /> } />
                <Route path='/feedbackapp/*' element={<FeedbackApp /> } />
            </Routes>
        </Router>
    );
};
export default App;
