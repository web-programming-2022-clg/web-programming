import {v4 as uuidv4} from 'uuid'
import {createContext, useEffect, useState} from "react";
import  getData from "../data/Utils";

const FeedbackContext = createContext()

// const jsonUrl = 'https://gist.githubusercontent.com/Volodymyr-Kovdrysh/368f472d3de21193171cdce3498939d5/raw/f3af065a83e7a8660a81f1e7f6f960e287bcd855/data.json'
const googleURL = 'https://script.google.com/macros/s/AKfycbxqTOww_l7e6jElel2ANi3Mzzpvmjy56fS9PsUzSdZrcqvo-GqVVbRncdAuLGc-5NF4qA/exec'

export const FeedBackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    useEffect(()=>{


        getData(`${googleURL}?action=GET`).then(data => {
            setFeedback(data.feedback.reverse())
            setIsLoading(false)
        })
    },[])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (newFeedback) => {
        setIsLoading(true)
        newFeedback.id = uuidv4()

        getData(`${googleURL}?action=POST&id=${newFeedback.id}&rating=${newFeedback.rating}&text=${newFeedback.text}`).then(data => {

            setFeedback(data.feedback.reverse())

            setIsLoading(false)
        })

    }

    const deleteFeedback = (id) => {

        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            setIsLoading(true)
            // setFeedback(feedback.filter(msg => msg.id !== id))
            getData(`${googleURL}?action=DELETE&id=${id}`).then(data => {

                setFeedback(data.feedback.reverse())
                setIsLoading(false)
            })
        }

    }

    // update feedback item
    const updateFeedback = (id, updItem) => {
        setIsLoading(true)
        getData(`${googleURL}?action=PUT&id=${id}&rating=${updItem.rating}&text=${updItem.text}`).then(data => {

            setFeedback(data.feedback.reverse())
            setIsLoading(false)
        })
    }

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
