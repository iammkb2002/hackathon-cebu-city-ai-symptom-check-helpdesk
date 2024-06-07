import React, { useEffect, useState } from "react";

const Home = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="leading-normal tracking-normal text-white gradient">
            <nav
                id="header"
                className={`fixed w-full z-30 top-0 text-white transition-all duration-300 ${
                    isScrolled ? "bg-white shadow text-gray-900" : ""
                }`}
            >
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                    <div className="pl-4 flex items-center">
                        <a
                            className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                            href="#"
                        >
                            <svg
                                className="h-8 fill-current inline"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512.005 512.005"
                            >
                                <rect
                                    fill="#2a2a31"
                                    x="16.539"
                                    y="425.626"
                                    width="479.767"
                                    height="50.502"
                                    transform="matrix(1,0,0,1,0,0)"
                                />
                                <path
                                    className="plane-take-off"
                                    d="M510.7 189.151C505.271 168.95 484.565 156.956 464.365 162.385L330.156 198.367L155.924 35.878L107.19 49.008L211.729 230.183L86.232 263.767L36.614 224.754L0 234.603L45.957 314.27L65.274 347.727L105.802 336.869L240.011 300.886L349.726 271.469L483.935 235.486C504.134 230.057 516.129 209.352 510.7 189.151Z"
                                />
                            </svg>
                            AskForHealth
                        </a>
                    </div>
                    <div className="block lg:hidden pr-4">
                        <button
                            id="nav-toggle"
                            onClick={toggleNav}
                            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                        >
                            <svg
                                className="fill-current h-6 w-6"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
                            isNavOpen ? "block" : "hidden"
                        } mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`}
                        id="nav-content"
                    >
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-3">
                                <a
                                    className="inline-block py-2 px-4 text-black font-bold no-underline"
                                    href="#"
                                >
                                    Active
                                </a>
                            </li>
                            <li className="mr-3">
                                <a
                                    className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                                    href="#"
                                >
                                    link
                                </a>
                            </li>
                            <li className="mr-3">
                                <a
                                    className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                                    href="#"
                                >
                                    link
                                </a>
                            </li>
                        </ul>
                        <button
                            id="navAction"
                            className={`mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-white text-gray-800 ${
                                isScrolled
                                    ? "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out gradient text-white"
                                    : ""
                            }`}
                        >
                            Action
                        </button>
                    </div>
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
            <div className="pt-24">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                        <p className="tracking-loose w-full">How are you feeling today?</p>
                        <h1 className="mb-4 text-5xl font-bold leading-tight">
                            Know your Symptoms, Know your Next Step!
                        </h1>
                        <p className="leading-normal text-2xl mb-8">
                            Sub-hero message, not too long and not too short. Make it just right!
                        </p>
                        <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Start
                        </button>
                    </div>
                    <div className="w-full md:w-3/5 py-6 text-center">
                        <img className="w-full md:w-4/5 z-50" src="hero.png" alt="Hero" />
                    </div>
                </div>
            </div>
            <div className="relative -mt-12 lg:-mt-24">
                <svg
                    viewBox="0 0 1428 174"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g
                            transform="translate(-2.000000, 44.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                        >
                            <path
                                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                                opacity="0.100000001"
                            ></path>
                            <path
                                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                opacity="0.100000001"
                            ></path>
                            <path
                                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                                id="Path-4"
                                opacity="0.200000003"
                            ></path>
                        </g>
                        <g
                            transform="translate(-4.000000, 76.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                        >
                            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                        </g>
                    </g>
                </svg>
            </div>
            <section className="bg-white border-b py-8">
                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Our Features
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-5/6 sm:w-1/2 p-6">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Sub Title
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                dignissim posuere nulla, id vulputate nisl dapibus nec. Nullam eget
                                arcu in elit venenatis pulvinar. Praesent at ligula venenatis,
                                gravida nibh ut, scelerisque lectus. Sed eget urna sit amet arcu
                                ultricies suscipit quis nec lorem.
                                <br />
                                <br />
                                <a className="text-pink-500 underline" href="#">
                                    Learn More
                                </a>
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2 p-6">
                            <img
                                className="w-full sm:h-64 mx-auto"
                                src="hero.png"
                                alt="Placeholder"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <img
                                className="w-full sm:h-64 mx-auto"
                                src="hero.png"
                                alt="Placeholder"
                            />
                        </div>
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Sub Title
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                dignissim posuere nulla, id vulputate nisl dapibus nec. Nullam eget
                                arcu in elit venenatis pulvinar. Praesent at ligula venenatis,
                                gravida nibh ut, scelerisque lectus. Sed eget urna sit amet arcu
                                ultricies suscipit quis nec lorem.
                                <br />
                                <br />
                                <a className="text-pink-500 underline" href="#">
                                    Learn More
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-900">
                <div className="container mx-auto py-8">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/4 p-6">
                            <h4 className="text-white font-bold mb-4">Column 1</h4>
                            <ul>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 p-6">
                            <h4 className="text-white font-bold mb-4">Column 2</h4>
                            <ul>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 p-6">
                            <h4 className="text-white font-bold mb-4">Column 3</h4>
                            <ul>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 p-6">
                            <h4 className="text-white font-bold mb-4">Column 4</h4>
                            <ul>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-gray-100">
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
