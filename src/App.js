import React, {useState} from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom'
import FeedbackApp from "./FeedbackApp/FeedbackApp";
import MainPage from "./MainPage/MainPage";
import {ImEnter, ImExit} from "react-icons/im";

const App = () => {
    const [login, setLogin] = useState(false)
    return (
        <Router>
            <div className="navbar bg-neutral text-neutral-content flex justify-between">
                <div className="flex justify-start">

                <NavLink to={'/home'} className={({isActive}) => 'btn btn-ghost normal-case text-xl' + (isActive ?' bg-green-500' : '')} >Головна</NavLink>
                    {login && <NavLink to={'/feedbackapp'} className={({isActive}) => 'btn btn-ghost normal-case text-xl' + (isActive ?' bg-green-500' : '')} >Зворотній зв'язок </NavLink> }

                </div>
                    <div className="flex justify-end">
                        {login ? <NavLink to={'/logout'} className="btn" ><ImExit size={32} /> </NavLink> : <NavLink to={'/login'} className="btn" ><ImEnter size={32} /></NavLink>}


                </div>
            </div>

            <Routes>
                <Route path='*' element={<MainPage login={setLogin} islogin={login} /> } />
                <Route path='/feedbackapp/*' element={<FeedbackApp /> } />
            </Routes>
        </Router>
    );
};
export default App;
