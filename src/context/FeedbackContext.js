import {v4 as uuidv4} from 'uuid'
import {createContext, useState} from "react";

const FeedbackContext = createContext()

export const FeedBackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'Text from context',
        rating: 10,
    }])

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

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
