import React from 'react';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

const Faq = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:mx-48 my-2">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:mx-48 my-2">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:mx-48 my-2">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box lg:mx-48 my-2">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Faq;