import React, { useEffect, useState } from 'react';
import CourseCard from '../Components/CourseCard';
import LeftSideNav from '../Pages/Shared/LeftSideNav';

const Courses = () => {

    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        fetch('https://electro-man-server.vercel.app/courseData')
            .then(res => res.json())
            .then(data => setCourseData(data));
    }, []);

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-3">
                    {
                        courseData.map(course => <CourseCard course={course} key={course.id}></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;