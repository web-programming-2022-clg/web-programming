import React from 'react';
import PropTypes from "prop-types";
import Card from "./shared/Card";
import {FaTimes} from "react-icons/fa";

const FeedbackItem = ({item, handleDelete}) => {
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('це приклад відгуку')

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)}
                className="close"><FaTimes color='purple' /></button>


            <div className="text-display">{item.text}</div>

        </Card>
    );
};

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;
