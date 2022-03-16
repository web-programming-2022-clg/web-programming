import {createContext, useState} from "react";

const FeedbackContext = createContext()

export const FeedBackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'Text from context',
        rating: 10,
    }])

    return <FeedbackContext.Provider value={{
        feedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;