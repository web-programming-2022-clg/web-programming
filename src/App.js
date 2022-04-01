import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom'

import FeedbackApp from "./FeedbackApp/FeedbackApp";
import Spinner from "./FeedbackApp/components/shared/Spinner";

const App = () => {
    return (
        <Router>
            <div className="navbar bg-neutral text-neutral-content">
                <NavLink to={'/'} className="btn btn-ghost normal-case text-xl">Головна</NavLink>
                <NavLink to={'/feedbackapp'} className="btn btn-ghost normal-case text-xl" >Зворотній зв'язок </NavLink>
            </div>

            <Routes>
                <Route path='/' element={<>
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                    <Spinner />
                </> } />
                <Route path='/feedbackapp/*' element={<FeedbackApp /> } />
            </Routes>




        </Router>
    );
};

export default App;
