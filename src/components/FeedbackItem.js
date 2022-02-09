import React, {useState} from 'react';

const FeedbackItem = ({item}) => {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('це приклад відгуку')

    return (
        <div className={'card'}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>

        </div>
    );
};

export default FeedbackItem;
