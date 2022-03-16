import React from 'react';
import Card from "./shared/Card";
import {useParams, Navigate, useNavigate, Routes, Route} from "react-router-dom";

const Post = () => {
    const params = useParams()

    const status = 404
    const navigate = useNavigate()

    if (status === 404) {
        <Navigate to={'/notfound'} />
    }

    const onClick = () => {
        console.log('Hello')
        navigate('/about')
    }
    return (
        <Card>
           <h1>Публікація #{params.id}</h1>
            <p>Автор: {params.name}</p>
            <button onClick={onClick}>Click </button>
            <Routes>
                <Route path={'/show'} element={<h1>Show post</h1>}/>
            </Routes>
        </Card>
    );
};

export default Post;
