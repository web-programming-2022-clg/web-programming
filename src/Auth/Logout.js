import React from 'react';

const Logout = ({login}) => {
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Babay!</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={()=>{
                        login(false)
                    }}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
