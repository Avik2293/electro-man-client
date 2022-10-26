import React from 'react';
import { createRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const Course = () => {

    const courseInfo = useLoaderData();
    // console.log(courseInfo);

    const ref = createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [12,10]
    };

    return (
        <div>
            <div>
                <Pdf targetRef={ref} filename="course-details.pdf" options={options} x={.5} y={.5} scale={0.8}>
                    {({ toPdf }) => <button onClick={toPdf} className="btn btn-info mr-4 mt-2">Download PDF</button>}
                </Pdf>
                <div ref={ref}>
                    <div className='border-4 border-teal-600 bg-sky-200 rounded-xl m-2 p-3'>
                        <div className='flex justify-center m-3'>
                            <img className='w-1/2' src={courseInfo.image_url} alt=''></img>
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
            </div>
            <div className='mb-2 flex justify-end'>
                <Link to='/checkout'><button className='btn btn-secondary mr-4'>Get Premium Access</button></Link>
            </div>
        </div>
    );
};


export default Course;