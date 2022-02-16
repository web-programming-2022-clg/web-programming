import React, {useState} from 'react';
import Card from "./shared/Card";

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    return (
        <Card>
            <form>
                <h2>Дайте оцінку нашому курсу</h2>
                {/* todo - вибір рейтингу*/}
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Напишіть відгук'/>
                    <button type="submit">Надіслати</button>
                </div>
            </form>
        </Card>
    );
};

export default FeedbackForm;
