import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import symptoms_list from "../public/symptoms_list"; // Adjust the import path as necessary
import { hospitals_data, specializations } from "../public/hospitals_data"; // Adjust the import path as necessary
import "tailwindcss/tailwind.css";

const MedicalDiagnosisApp = () => {
    const [selectedSymptom, setSelectedSymptom] = useState(null);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [predictions, setPredictions] = useState([]);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

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
    const [hospitalSuggestions, setHospitalSuggestions] = useState([]);

    const addSymptom = () => {
        if (selectedSymptom && !selectedSymptoms.some(symptom => symptom.value === selectedSymptom.value)) {
            setSelectedSymptoms([...selectedSymptoms, selectedSymptom]);
            setSelectedSymptom(null);
            console.log("Added symptom:", selectedSymptom);
        }
    };

    const predictDisease = async () => {
        try {
            console.log("Sending symptoms for prediction:", selectedSymptoms);
            const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    selectedSymptoms: selectedSymptoms.map((symptom) => symptom.value),
                }),
            });
            const data = await response.json();
            console.log("Prediction response data:", data);
            setPredictions(data);

            const categorizedHospitals = {};

            data.forEach(prediction => {
                prediction.precautions.forEach(precaution => {
                    if (precaution.toLowerCase().includes("consult")) {
                        const specializationIndex = specializations[prediction.disease];
                        Object.keys(hospitals_data).forEach(hospital => {
                            if (hospitals_data[hospital][specializationIndex] === 1) {
                                if (!categorizedHospitals[prediction.disease]) {
                                    categorizedHospitals[prediction.disease] = [];
                                }
                                categorizedHospitals[prediction.disease].push(hospital);
                            }
                        });
                    }
                });
            });

            console.log("Categorized hospitals:", categorizedHospitals);
            setHospitalSuggestions(categorizedHospitals);
        } catch (error) {
            console.error("There was an error predicting the disease:", error);
        }
    };

    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center gradient">
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
                                href="/#"
                            >
                                {/* HAND SVG */}
                                <svg
                                    className="h-8 fill-current inline"
                                    width="32px"
                                    height="32px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 4.82936C7 6.37714 8.72593 8.00761 10.1497 9.08932C10.9489 9.69644 11.3484 10 12 10C12.6516 10 13.0512 9.69644 13.8503 9.08933C15.2741 8.00763 17 6.37717 17 4.82935C17 2.03918 14.2499 0.997463 12 3.15285C9.75008 0.997463 7 2.03918 7 4.82936Z"
                                        fill={isScrolled ? "#1C274C" : "#FFFFFF"}
                                    />
                                    <path
                                        d="M6.25993 21.3884H6C5.05719 21.3884 4.58579 21.3884 4.29289 21.0955C4 20.8026 4 20.3312 4 19.3884V18.2764C4 17.7579 4 17.4987 4.13318 17.2672C4.26636 17.0356 4.46727 16.9188 4.8691 16.6851C7.51457 15.1464 11.2715 14.2803 13.7791 15.7759C13.9475 15.8764 14.0991 15.9977 14.2285 16.1431C14.7866 16.77 14.746 17.7161 14.1028 18.2775C13.9669 18.396 13.8222 18.486 13.6764 18.5172C13.7962 18.5033 13.911 18.4874 14.0206 18.4699C14.932 18.3245 15.697 17.8375 16.3974 17.3084L18.2046 15.9433C18.8417 15.462 19.7873 15.4619 20.4245 15.943C20.9982 16.3762 21.1736 17.0894 20.8109 17.6707C20.388 18.3487 19.7921 19.216 19.2199 19.7459C18.6469 20.2766 17.7939 20.7504 17.0975 21.0865C16.326 21.4589 15.4738 21.6734 14.6069 21.8138C12.8488 22.0983 11.0166 22.0549 9.27633 21.6964C8.29253 21.4937 7.27079 21.3884 6.25993 21.3884Z"
                                        fill={isScrolled ? "#1C274C" : "#FFFFFF"}
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
                <h1 className="text-4xl font-bold mb-6 text-center text-white mt-36">
                    Symptoms Detection
                </h1>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                    <Select
                        options={symptoms_list}
                        value={selectedSymptom}
                        onChange={setSelectedSymptom}
                        placeholder="Select a symptom..."
                        className="mb-4"
                    />
                    <button
                        onClick={addSymptom}
                        className="bg-pink text-white py-2 px-4 rounded hover:bg-lightpink w-full mb-4"
                    >
                        Add Symptom
                    </button>
                    <button
                        onClick={predictDisease}
                        className="bg-orange text-white py-2 px-4 rounded hover:bg-lightorange w-full"
                    >
                        Predict Disease
                    </button>
                    <h3 className="text-lg font-bold mt-6">Symptoms:</h3>
                    <ul className="mt-2 mb-6">
                        {selectedSymptoms.map((symptom, index) => (
                            <li key={index} className="text-gray-700">
                                {symptom.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 lg:px-10 sm:p-2">
                    {predictions.slice(0, 3).map((prediction, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow">
                            <p>
                                <strong>Disease:</strong> {prediction.disease}
                            </p>
                            <p>
                                <strong>Probability:</strong>{" "}
                                {(prediction.probability * 100).toFixed(2)}%
                            </p>
                            <p>
                                <strong>Description:</strong> {prediction.description}
                            </p>
                            <p>
                                <strong>Precautions:</strong> {prediction.precautions.join(", ")}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="bg-gray-900">
                <div className="container mx-auto py-8">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full text-center">
                            <p className="text-gray-300">
                                &copy; 2024 CITeam. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MedicalDiagnosisApp;
