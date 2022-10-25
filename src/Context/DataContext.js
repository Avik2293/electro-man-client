import React, { Children } from 'react';
import { createContext } from 'react';

export const CourseContext = createContext();

const DataContext = () => {
    const user = "ghh";

    const dataInfo = {user};

    return (
        <CourseContext.Provider value={dataInfo}>
            {Children}
        </CourseContext.Provider>
    );
};

export default DataContext;