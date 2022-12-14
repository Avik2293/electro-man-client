import React from 'react';
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const Stat = () => {

    return (
        <section className="p-4 my-2 md:p-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container grid grid-cols-1 gap-8 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-4">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-100 bg-gray-400">
                        <div className="flex items-center justify-center px-4 dark:bg-violet-400 dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
                                <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
                                <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-evenly flex-1 p-3">
                            <p className="text-2xl font-semibold"><CountUp end={20} duration={10}/>+</p>
                            <p>Courses</p>
                        </div>
                    </div>
                </motion.button >
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-100 bg-gray-400">
                        <div className="flex items-center justify-center px-4 dark:bg-violet-400 dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
                                <path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-evenly flex-1 p-3">
                            <p className="text-2xl font-semibold"><CountUp end={750} duration={15}/>+</p>
                            <p>Students</p>
                        </div>
                    </div>
                </motion.button >
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-100 bg-gray-400">
                        <div className="flex items-center justify-center px-4 dark:bg-violet-400 dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-evenly flex-1 p-3">
                            <p className="text-2xl font-semibold"><CountUp end={4} duration={3}/></p>
                            <p>Awards</p>
                        </div>
                    </div>
                </motion.button >
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    <div className="flex overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-100 bg-gray-400">
                        <div className="flex items-center justify-center px-4 dark:bg-violet-400 dark:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                <path d="M256.25,16A240,240,0,0,0,88,84.977V16H56V144H184V112H106.287A208,208,0,0,1,256.25,48C370.8,48,464,141.2,464,255.75S370.8,463.5,256.25,463.5,48.5,370.3,48.5,255.75h-32A239.75,239.75,0,0,0,425.779,425.279,239.75,239.75,0,0,0,256.25,16Z"></path>
                                <polygon points="240 111.951 239.465 288 368 288 368 256 271.563 256 272 112.049 240 111.951"></polygon>
                            </svg>
                        </div>
                        <div className="flex items-center justify-evenly flex-1 p-3">
                            <p className="text-2xl font-semibold">24/7 hr.</p>
                            <p>Support</p>
                        </div>
                    </div>
                </motion.button >
            </div>
        </section>
    );
};

export default Stat;