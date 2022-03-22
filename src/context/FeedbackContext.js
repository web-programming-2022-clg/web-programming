import {createContext, useState} from "react";

const FeedbackContext = createContext()

export const FeedBackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'Text from context',
        rating: 10,
    }])

    const deleteFeedback = (id) => {
        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            setFeedback(feedback.filter(msg => msg.id !== id))
        }

    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
