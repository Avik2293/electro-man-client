import React, { createRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
// import ReactToPdf from '../Components/ReactToPdf';
// import Pdf from "react-to-pdf";

const Course = () => {

    const courseInfo = useLoaderData();
    // console.log(courseInfo);

    // const ref = React.createRef();

    return (
        <div>
            {/* <div>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
                <div style={{ width: 50, height: 50, background: 'blue' }} ref={ref} />


                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <div ref={ref}>
                    <h1>Hello CodeSandbox</h1>
                    <h2>Start editing to see some magic happen!</h2>
                </div>
            </div> */}
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