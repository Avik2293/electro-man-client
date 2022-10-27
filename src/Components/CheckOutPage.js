import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const CheckOutPage = () => {

    const { user } = useContext(AuthContext);
    
    const checkOutData = useLoaderData();
    console.log(checkOutData);

    return (
        <div className="bg-indigo-300 m-2 text-2xl rounded-xl p-3">
            <h1 className='text-3xl'>Hello, <span className='font-bold'>{user.displayName}</span>.</h1>
            <br />
            <h2>Thanks For choosing <span className='font-bold'>{checkOutData.title}</span> course.</h2>
            <p>Our all courses are free, but you need to contact with us imediatly.</p>
            <br></br>
            <p>For Course schedule, Please call -- <span className='font-bold'>01758727366</span></p>
        </div>
    );
};

export default CheckOutPage;