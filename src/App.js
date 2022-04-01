import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom'

import FeedbackApp from "./FeedbackApp/FeedbackApp";
import Spinner from "./FeedbackApp/components/shared/Spinner";

const App = () => {
    return (
        <Router>
            <nav>

                <NavLink to={'/'} >Головна </NavLink>
                <NavLink to={'/feedbackapp'} >Зворотній зв'язок </NavLink>


            </nav>

            <Routes>
                <Route path='/' element={<Spinner /> } />
                <Route path='/feedbackapp/*' element={<FeedbackApp /> } />
            </Routes>




        </Router>
    );
};

export default App;
