import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-3">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;