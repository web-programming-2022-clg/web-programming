import {v4 as uuidv4} from 'uuid'
import {createContext, useEffect, useState} from "react";
import  {getDataFromGoogleApp} from "../data/Utils";

const FeedbackContext = createContext()

// const jsonUrl = 'https://gist.githubusercontent.com/Volodymyr-Kovdrysh/368f472d3de21193171cdce3498939d5/raw/f3af065a83e7a8660a81f1e7f6f960e287bcd855/data.json'
const googleURL = 'https://script.google.com/macros/s/AKfycbxSDs6g2iirqf4j6sXBmPuy1jg5TRk7xQ-iMvW75NoLCtXZRL0raKLzX71IuGi15NkJ9A/exec'

export const FeedBackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([])

    useEffect(()=>{

        // getData(jsonUrl).then(data => {
        //     setFeedback(data)
        // })
        getDataFromGoogleApp(`${googleURL}?action=GET`).then(data => {
            // console.log('from google', data.feedback)
            setFeedback(data.feedback)
        })

        // fetch(jsonUrl).then(response => {
        //          response.json().then(data => {
        //             console.log('response data', data)
        //              setFeedback(data)
        //         });
        //
        //     })

    },[])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // setFeedback([newFeedback, ...feedback])

        getDataFromGoogleApp(`${googleURL}?action=POST&id=${newFeedback.id}&rating=${newFeedback.rating}&text=${newFeedback.text}`).then(data => {

            setFeedback(data.feedback)
        })

    }

    const deleteFeedback = (id) => {
        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            // setFeedback(feedback.filter(msg => msg.id !== id))
            getDataFromGoogleApp(`${googleURL}?action=DELETE&id=${id}`).then(data => {

                setFeedback(data.feedback)
            })
        }

    }

    // update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map(item => item.id === id ? {...item, ...updItem} : item))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
