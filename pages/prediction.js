import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Select from "react-select";
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

    const symptomsList = [
        { value: "itching", label: "Itching" },
        { value: "skin_rash", label: "Skin Rash" },
        { value: "nodal_skin_eruptions", label: "Nodal Skin Eruptions" },
        { value: "continuous_sneezing", label: "Continuous Sneezing" },
        { value: "shivering", label: "Shivering" },
        { value: "chills", label: "Chills" },
        { value: "joint_pain", label: "Joint Pain" },
        { value: "stomach_pain", label: "Stomach Pain" },
        { value: "acidity", label: "Acidity" },
        { value: "ulcers_on_tongue", label: "Ulcers on Tongue" },
        { value: "muscle_wasting", label: "Muscle Wasting" },
        { value: "vomiting", label: "Vomiting" },
        { value: "burning_micturition", label: "Burning Micturition" },
        { value: "fatigue", label: "Fatigue" },
        { value: "weight_gain", label: "Weight Gain" },
        { value: "anxiety", label: "Anxiety" },
        { value: "cold_hands_and_feets", label: "Cold Hands and Feets" },
        { value: "mood_swings", label: "Mood Swings" },
        { value: "weight_loss", label: "Weight Loss" },
        { value: "restlessness", label: "Restlessness" },
        { value: "lethargy", label: "Lethargy" },
        { value: "patches_in_throat", label: "Patches in Throat" },
        { value: "irregular_sugar_level", label: "Irregular Sugar Level" },
        { value: "cough", label: "Cough" },
        { value: "high_fever", label: "High Fever" },
        { value: "sunken_eyes", label: "Sunken Eyes" },
        { value: "breathlessness", label: "Breathlessness" },
        { value: "sweating", label: "Sweating" },
        { value: "dehydration", label: "Dehydration" },
        { value: "indigestion", label: "Indigestion" },
        { value: "headache", label: "Headache" },
        { value: "yellowish_skin", label: "Yellowish Skin" },
        { value: "dark_urine", label: "Dark Urine" },
        { value: "nausea", label: "Nausea" },
        { value: "loss_of_appetite", label: "Loss of Appetite" },
        { value: "pain_behind_the_eyes", label: "Pain Behind the Eyes" },
        { value: "back_pain", label: "Back Pain" },
        { value: "constipation", label: "Constipation" },
        { value: "abdominal_pain", label: "Abdominal Pain" },
        { value: "diarrhoea", label: "Diarrhoea" },
        { value: "mild_fever", label: "Mild Fever" },
        { value: "yellow_urine", label: "Yellow Urine" },
        { value: "yellowing_of_eyes", label: "Yellowing of Eyes" },
        { value: "acute_liver_failure", label: "Acute Liver Failure" },
        { value: "fluid_overload", label: "Fluid Overload" },
        { value: "swelling_of_stomach", label: "Swelling of Stomach" },
        { value: "swelled_lymph_nodes", label: "Swelled Lymph Nodes" },
        { value: "malaise", label: "Malaise" },
        { value: "blurred_and_distorted_vision", label: "Blurred and Distorted Vision" },
        { value: "phlegm", label: "Phlegm" },
        { value: "throat_irritation", label: "Throat Irritation" },
        { value: "redness_of_eyes", label: "Redness of Eyes" },
        { value: "sinus_pressure", label: "Sinus Pressure" },
        { value: "runny_nose", label: "Runny Nose" },
        { value: "congestion", label: "Congestion" },
        { value: "chest_pain", label: "Chest Pain" },
        { value: "weakness_in_limbs", label: "Weakness in Limbs" },
        { value: "fast_heart_rate", label: "Fast Heart Rate" },
        { value: "pain_during_bowel_movements", label: "Pain During Bowel Movements" },
        { value: "pain_in_anal_region", label: "Pain in Anal Region" },
        { value: "bloody_stool", label: "Bloody Stool" },
        { value: "irritation_in_anus", label: "Irritation in Anus" },
        { value: "neck_pain", label: "Neck Pain" },
        { value: "dizziness", label: "Dizziness" },
        { value: "cramps", label: "Cramps" },
        { value: "bruising", label: "Bruising" },
        { value: "obesity", label: "Obesity" },
        { value: "swollen_legs", label: "Swollen Legs" },
        { value: "swollen_blood_vessels", label: "Swollen Blood Vessels" },
        { value: "puffy_face_and_eyes", label: "Puffy Face and Eyes" },
        { value: "enlarged_thyroid", label: "Enlarged Thyroid" },
        { value: "brittle_nails", label: "Brittle Nails" },
        { value: "swollen_extremeties", label: "Swollen Extremeties" },
        { value: "excessive_hunger", label: "Excessive Hunger" },
        { value: "extra_marital_contacts", label: "Extra Marital Contacts" },
        { value: "drying_and_tingling_lips", label: "Drying and Tingling Lips" },
        { value: "slurred_speech", label: "Slurred Speech" },
        { value: "knee_pain", label: "Knee Pain" },
        { value: "hip_joint_pain", label: "Hip Joint Pain" },
        { value: "muscle_weakness", label: "Muscle Weakness" },
        { value: "stiff_neck", label: "Stiff Neck" },
        { value: "swelling_joints", label: "Swelling Joints" },
        { value: "movement_stiffness", label: "Movement Stiffness" },
        { value: "spinning_movements", label: "Spinning Movements" },
        { value: "loss_of_balance", label: "Loss of Balance" },
        { value: "unsteadiness", label: "Unsteadiness" },
        { value: "weakness_of_one_body_side", label: "Weakness of One Body Side" },
        { value: "loss_of_smell", label: "Loss of Smell" },
        { value: "bladder_discomfort", label: "Bladder Discomfort" },
        { value: "continuous_feel_of_urine", label: "Continuous Feel of Urine" },
        { value: "passage_of_gases", label: "Passage of Gases" },
        { value: "internal_itching", label: "Internal Itching" },
        { value: "toxic_look_(typhos)", label: "Toxic Look (Typhos)" },
        { value: "depression", label: "Depression" },
        { value: "irritability", label: "Irritability" },
        { value: "muscle_pain", label: "Muscle Pain" },
        { value: "altered_sensorium", label: "Altered Sensorium" },
        { value: "red_spots_over_body", label: "Red Spots Over Body" },
        { value: "belly_pain", label: "Belly Pain" },
        { value: "abnormal_menstruation", label: "Abnormal Menstruation" },
        { value: "watering_from_eyes", label: "Watering from Eyes" },
        { value: "increased_appetite", label: "Increased Appetite" },
        { value: "polyuria", label: "Polyuria" },
        { value: "family_history", label: "Family History" },
        { value: "mucoid_sputum", label: "Mucoid Sputum" },
        { value: "rusty_sputum", label: "Rusty Sputum" },
        { value: "lack_of_concentration", label: "Lack of Concentration" },
        { value: "visual_disturbances", label: "Visual Disturbances" },
        { value: "receiving_blood_transfusion", label: "Receiving Blood Transfusion" },
        { value: "receiving_unsterile_injections", label: "Receiving Unsterile Injections" },
        { value: "coma", label: "Coma" },
        { value: "stomach_bleeding", label: "Stomach Bleeding" },
        { value: "distention_of_abdomen", label: "Distention of Abdomen" },
        { value: "history_of_alcohol_consumption", label: "History of Alcohol Consumption" },
        { value: "blood_in_sputum", label: "Blood in Sputum" },
        { value: "prominent_veins_on_calf", label: "Prominent Veins on Calf" },
        { value: "palpitations", label: "Palpitations" },
        { value: "painful_walking", label: "Painful Walking" },
        { value: "pus_filled_pimples", label: "Pus Filled Pimples" },
        { value: "blackheads", label: "Blackheads" },
        { value: "scurring", label: "Scurring" },
        { value: "skin_peeling", label: "Skin Peeling" },
        { value: "silver_like_dusting", label: "Silver Like Dusting" },
        { value: "small_dents_in_nails", label: "Small Dents in Nails" },
        { value: "inflammatory_nails", label: "Inflammatory Nails" },
        { value: "blister", label: "Blister" },
        { value: "red_sore_around_nose", label: "Red Sore Around Nose" },
        { value: "yellow_crust_ooze", label: "Yellow Crust Ooze" },
    ];

    const addSymptom = () => {
        if (selectedSymptom && !selectedSymptoms.includes(selectedSymptom)) {
            setSelectedSymptoms([...selectedSymptoms, selectedSymptom]);
            setSelectedSymptom(null);
        }
    };

    const predictDisease = async () => {
        try {
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
            setPredictions(data);
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
                        options={symptomsList}
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
