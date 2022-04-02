import React from "react";
import { Route, Routes} from 'react-router-dom'

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedBackProvider} from "./context/FeedbackContext";

import "./Feedback.css"


function FeedbackApp(){

    return <FeedBackProvider>

      <Header />
  <div className="feedback-container">
<Routes>
  <Route
      path='/'
      element={
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </>
  } />
    <Route path='/about' element={<AboutPage /> } />
</Routes>
    <AboutIconLink />
  </div>
    </FeedBackProvider>
}

export default FeedbackApp;
