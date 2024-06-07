import React, { useState, useEffect } from "react";
import Select from "react-select";
import symptoms_list from "../public/symptoms_list"; // Adjust the import path as necessary
import { hospitals_data, specializations } from "../public/hospitals_data"; // Adjust the import path as necessary

const MedicalDiagnosisApp = () => {
    const [selectedSymptom, setSelectedSymptom] = useState(null);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [predictions, setPredictions] = useState([]);
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
            <h1>Medical Diagnosis App</h1>
            <Select
                options={symptoms_list}
                isMulti // allow multiple selections
                value={selectedSymptoms}
                onChange={setSelectedSymptoms}
                placeholder="Select symptoms..."
            />
            <button onClick={predictDisease}>Predict Disease</button>
            <ul>
                {selectedSymptoms.map((symptom, index) => (
                    <li key={index}>{symptom.label}</li>
                ))}
            </ul>
            <div id="result">
                {predictions.map((prediction, index) => (
                    <div key={index}>
                        <p>
                            <strong>Disease:</strong> {prediction.disease}
                        </p>
                        <p>
                            <strong>Probability:</strong> {prediction.probability}
                        </p>
                        <p>
                            <strong>Description:</strong> {prediction.description}
                        </p>
                        <p>
                            <strong>Precautions:</strong> {prediction.precautions.join(", ")}
                        </p>
                        {hospitalSuggestions[prediction.disease] && (
                            <div>
                                <strong>Suggested Hospitals:</strong>
                                <ul>
                                    {hospitalSuggestions[prediction.disease].map((hospital, index) => (
                                        <li key={index}>{hospital}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MedicalDiagnosisApp;
