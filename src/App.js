import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom'
import FeedbackApp from "./FeedbackApp/FeedbackApp";
import MainPage from "./MainPage/MainPage";
import {ImEnter, ImExit} from "react-icons/im";
const App = () => {
    return (
        <Router>
            <div className="navbar bg-neutral text-neutral-content flex justify-between">
                <div className="flex justify-start">

                <NavLink to={'/'} className={({isActive}) => 'btn btn-ghost normal-case text-xl' + (isActive ?' bg-green-500' : '')} >Головна</NavLink>
                <NavLink to={'/feedbackapp'} className={({isActive}) => 'btn btn-ghost normal-case text-xl' + (isActive ?' bg-green-500' : '')} >Зворотній зв'язок </NavLink>
                </div>
                    <div className="flex justify-end">
                    <a className="btn"><ImEnter size={32} /></a>
                        <a className="ImExit"><ImExit size={32} /></a>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<MainPage /> } />
                <Route path='/feedbackapp/*' element={<FeedbackApp /> } />
            </Routes>
        </Router>
    );
};
export default App;
