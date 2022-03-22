import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedBackProvider} from "./context/FeedbackContext";



function App(){
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

    return <FeedBackProvider>
      <Router>
      <Header />
  <div className="container">
<Routes>
  <Route
      path='/'
      element={
    <>
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStats />
      <FeedbackList />
    </>
  } />
    <Route path='/about' element={<AboutPage /> } />
</Routes>
    <AboutIconLink />
  </div>
  </Router>
    </FeedBackProvider>
}

export default App;
