import React, {useState, useContext} from 'react';
import GitContext from "../../context/GitContext";

const UserSearch = () => {
    const [text, setText] = useState('')
    const {users} = useContext(GitContext)
    const handleChange = (e) => setText(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === ''){
            alert('Будь ласка, щось введіть')
        }else {
            // TODO search users
            setText('')
        }
    }
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text"
                                   className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                   placeholder="Пошук"
                                   value={text}
                                   onChange={handleChange}
                            />
                            <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Вперед
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <buttun className="btn btn-ghost btn-lg">
                        Очистити
                    </buttun>
                </div>
            )}

        </div>
    );
};

export default UserSearch;
