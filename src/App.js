import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


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
    return <>
      <Header />
  <div className="container">
    <FeedbackForm handleAdd={addFeedback}/>
    <FeedbackStats feedback={feedback} />
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />

  </div>
  </>
}

export default App;
