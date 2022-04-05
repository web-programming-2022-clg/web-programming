import React from 'react';


const Login = ({login}) => {
    return (

        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={()=>{
                        login(true)
                    }}>Login</button>
                </div>

            </div>
        </div>

    );
};

export default Login;
