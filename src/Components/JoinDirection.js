import React from 'react';

const JoinDirection = () => {
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100 bg-gray-50">
            <div className="container mx-auto">
                <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-400">How it works</span>
                <h2 className="text-5xl font-bold text-center dark:text-gray-50">Building with Us is simple</h2>
                <div className="grid gap-6 my-3 lg:grid-cols-3">
                    <div className="flex flex-col p-3 lg:p-8 space-y-4 rounded-md dark:bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">1</div>
                        <p className="text-2xl font-semibold">
                            <b>Register</b> First in our Website.
                        </p>
                    </div>
                    <div className="flex flex-col p-3 lg:p-8 space-y-4 rounded-md dark:bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">2</div>
                        <p className="text-2xl font-semibold">
                            <b>Choose Course</b> from many courses.
                        </p>
                    </div>
                    <div className="flex flex-col p-3 lg:p-8 space-y-4 rounded-md dark:bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">3</div>
                        <p className="text-2xl font-semibold">
                            <b>Pay</b> from anywhere of the world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinDirection;