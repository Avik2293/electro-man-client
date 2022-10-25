import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
    // console.log(props.course);
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-3">
            <figure><img className='h-auto' src={props.course.image_url} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.course.title}</h2>
                <p>{props.course.about}</p>
                <div>
                    <div className='flex space-x'>
                        <p className='border-2 border-green-500 rounded-lg m-1'><span className='font-bold'>Instructor:</span> {props.course.instructor}</p>
                        <p className='border-2 border-green-500 rounded-lg m-1 flex'><FaStar className='m-1'></FaStar><span className='font-bold'>Ratings:</span> {props.course.rating}</p>
                        <p className='border-2 border-green-500 rounded-lg m-1'><span className='font-bold'>Duration:</span> {props.course.duration} Hours</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/course/${props.course.id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;