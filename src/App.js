import React, {useState} from "react";
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";


function App(){
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
    ){
      setFeedback(feedback.filter(msg => msg.id !== id))
    }

  }
    return <Router>
      <Header />
  <div className="container">
<Routes>
  <Route
      path='/'
      element={
    <>
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  } />
    <Route path='/about' element={<AboutPage /> } />
  <Route path={'/post/*'} element={<Post />}/>
</Routes>
    <Card>
      <NavLink to={'/'} activeClassName={'active'}>
        Додому
      </NavLink>
      <NavLink to={'/about'} activeClassName={'active'}>
        Про нас
      </NavLink>
    </Card>
    <AboutIconLink />
  </div>
  </Router>
}

export default App;
