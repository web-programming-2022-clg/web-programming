import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom'
import FeedbackApp from "./FeedbackApp/FeedbackApp";
import MainPage from "./MainPage/MainPage";
const App = () => {
    return (
        <Router>
            <div className="navbar bg-neutral text-neutral-content">
                <NavLink to={'/'} className={({isActive}) => 'btn btn-ghost normal-case text-xl' + (isActive ?' bg-green-500' : '')} >Головна</NavLink>
                <NavLink to={'/feedbackapp'} className={({isActive}) => 'btn btn-ghost normal-case text-xl' + (isActive ?' bg-green-500' : '')} >Зворотній зв'язок </NavLink>
            </div>

            <Routes>
                <Route path='/' element={<MainPage /> } />
                <Route path='/feedbackapp/*' element={<FeedbackApp /> } />
            </Routes>
        </Router>
    );
};
export default App;
