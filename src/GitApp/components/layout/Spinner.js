import React from 'react';
import spinner from "../assets/spinner.gif"

const Spinner = () => {
    return <div className="w-100 mt-20 h-screen">
        <img
            src={spinner}
            alt={'Loading...'}
            width={180}
            className="text-center mx-auto"
        />
    </div>

};

export default Spinner;
