import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/courses')
        .then( res => res.json())
        .then(data => setCourses(data));
    }, []);

    return (
        <div className='bg-gray-400 text-white rounded-xl my-3'>
            <h2>All Courses : {courses.length}</h2>
            {
                courses.map(course => <p className='border-x-8 border-y-4 bg-cyan-600 rounded-sm' key={course.id}>
                    <Link to={`/course/${course.id}`}>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;