import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom'

import FeedbackApp from "./FeedbackApp/FeedbackApp";
import Spinner from "./FeedbackApp/components/shared/Spinner";

const App = () => {
    return (
        <Router>
            <div className="navbar bg-neutral text-neutral-content">
                <NavLink to={'/'} className={({isActive}) => 'btn btn-ghost normal-case text-xl' + (isActive ?' loading' : '')} >Головна</NavLink>
                <NavLink to={'/feedbackapp'} className={({isActive}) => 'btn btn-ghost normal-case text-xl' + (isActive ?' loading' : '')} >Зворотній зв'язок </NavLink>
            </div>

            <Routes>
                <Route path='/' element={<>
                    <Spinner />
                </> } />
                <Route path='/feedbackapp/*' element={<FeedbackApp /> } />
            </Routes>




        </Router>
    );
};

export default App;
