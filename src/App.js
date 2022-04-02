import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom'

import FeedbackApp from "./FeedbackApp/FeedbackApp";

const App = () => {
    return (
        <Router>
            <nav>

                <NavLink to={'/'} activeClassName={'active'}>Головна </NavLink>
                <NavLink to={'/feedbackapp'} activeClassName={'active'}>Зворотній зв'язок </NavLink>


            </nav>

            <Routes>
                <Route path='/feedbackapp/*' element={<FeedbackApp /> } />
            </Routes>




        </Router>
    );
};

export default App;
