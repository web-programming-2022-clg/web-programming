import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom'

import FeedbackApp from "./FeedbackApp/FeedbackApp";

const App = () => {
    return (
        <Router>
            <nav>

                <NavLink to={'/'} activeClassName={'active'}>Home </NavLink>
                <NavLink to={'/feedbackapp'} activeClassName={'active'}>Опитувальник </NavLink>


            </nav>

            <Routes>
                <Route path='/feedbackapp/*' element={<FeedbackApp /> } />
            </Routes>




        </Router>
    );
};

export default App;
