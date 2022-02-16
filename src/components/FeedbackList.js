import React from 'react';
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({feedback, handleDelete}) => {
    console.log(feedback)
    if(!feedback || feedback.length === 0) {
        return <p>Ще немає відгуків</p>
    }

    return (
        <div className={'feedback-list'}>
            {feedback.map(item =>
                ( <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />)
            )}
        </div>
    );
};

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    })
}

export default FeedbackList;
