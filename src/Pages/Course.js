import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Course = () => {

    const courseInfo = useLoaderData();
    console.log(courseInfo);
    return (
        <div>
            <div className='mt-2'>
                <button className='btn btn-info mr-4'>Download PDF</button>
                <button className='btn btn-secondary ml-4'>Get Premium Access</button>
            </div>
            <div className='border-4 border-teal-600 bg-sky-200 rounded-xl m-2 p-3'>
                <div className='flex justify-center m-3'>
                    <img className='' src={courseInfo.image_url} alt=''></img>
                    <div className='grid content-evenly p-3'>
                        <p className='border-2 border-green-500 rounded-lg m-1'><span className='font-bold'>Instructor:</span> {courseInfo.instructor}</p>
                        <p className='border-2 border-green-500 rounded-lg m-1 flex'><FaStar className='m-1'></FaStar><span className='font-bold'>Ratings:</span> {courseInfo.rating}</p>
                        <p className='border-2 border-green-500 rounded-lg m-1'><span className='font-bold'>Duration:</span> {courseInfo.duration} Hours</p>
                    </div>
                </div>
                <h2 className='text-3xl font-bold'>{courseInfo.title}</h2>
                <p className='text-2xl'>{courseInfo.details}</p>
            </div>
        </div>
    );
};

export default Course;