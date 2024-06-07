import React, { useState } from "react";

const Chatbot = () => {
    const [chat, setChat] = useState([
        {
            text: "Hello! I'm your health assistance guide. How can I help you today? Here are a few options to get started, or feel free to type your question.",
            options: [
                "Learn about health assistance programs",
                "Check eligibility for a program",
                "Find a nearby hospital",
                "Understand required documents",
                "Talk to a human representative",
            ],
        },
    ]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchResponse = async (prompt) => {
        setLoading(true);
        const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

        try {
            const response = await fetch("/api/gemini", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt, geminiApiKey }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error("Error fetching data:", error);
            return "I'm sorry, something went wrong. Please try again.";
        } finally {
            setLoading(false);
        }
    };

    const handleOptionClick = async (option) => {
        setChat([...chat, { text: option }]);

        const prompt = `The user selected: ${option}. Respond with detailed information from the following dataset:

    **Chatbot Prompt for "Ask for Health":**

    ---

    **Introduction:**

    Hello! I'm your health assistance guide. How can I help you today? Here are a few options to get started, or feel free to type your question.

    **Options:**

    1. Learn about health assistance programs
    2. Check eligibility for a program
    3. Find a nearby hospital
    4. Understand required documents
    5. Talk to a human representative

    ---

    **Program Information:**

    **1. CHAMP: City Hospitalization Assistance and Medicines Program**

    **Coverage:**

    - Hospital Bill Assistance
    - Laboratory Services
    - Hemodialysis

    **Qualifications:**

    - Resident of Cebu City
    - Dependents of eligible Cebu City residents voters

    **Requirements:**

    1. Prepare Required Documents:
       - Filled-up application form
       - Voter’s certificate from the COMELEC
       - Barangay clearance
       - Medical abstract
       - Hospital bills and/or receipts
    2. Visit the Department of Social Welfare and Services (DSWS)
    3. Complete Application Form
    4. Submit Application Form
    5. Evaluation by DSWS
    6. Avail of CHAMP Services

    **Participating Hospitals:**

    1. Chong Hua Hospital
    2. Cebu City Medical Center
    3. The Dialysis Co.
    4. Cebu Doctor’s University Hospital (refund basis/admission only)
    5. Perpetual Succour Hospital (refund basis/admission only)
    6. Sto. Nino Dialysis Center Inc.
    7. Southwestern University PHINMA
    8. South General Hospital (refund basis/admission only)
    9. St. Vincent General Hospital
    10. Allied Care Experts Medical Center (ACE)
    11. Nephro Group Dialysis Centers
    12. Cebu Velez General Hospital (refund basis/admission only)
    13. Adventist Hospital Cebu (refund basis/admission only)
    14. Asia Renal Care

    ---

    **2. PCSO: Medical Assistance Program**

    **Coverage:**

    - Confinement
    - Erythropoietin (Dialysis Injection)
    - Hemodialysis
    - Chemotherapy Drugs
    - Radiation Therapy
    - Specialty Medicines
    - Laboratory, Diagnostic and Imaging Requests
    - Implant and Medical Devices
    - Rehabilitation Therapy
    - Catastrophic Illnesses

    **Requirements:**

    1. Confinement:
       - Original or Certified True Copy of the Clinical or Medical Abstract or Discharge Summary with full name, signature, and license number of the attending physician
       - Original Statement of Account with full name and signature of the Billing Officer
       - Copy of Valid ID of the patient, Medical Social Services-issued ID, school ID for minors, copy of the birth certificate (for newborn up to 5 years old), and/or valid ID of the representative if applicable

    2. Erythropoietin (Dialysis Injection):
       - Original or Certified True Copy of the Clinical or Medical Abstract with full name, signature, and license number of the attending physician
       - Original Prescription of Epoetin injection with full name, signature, and license number of the attending physician
       - Original Copy of endorsement and quotation (applicable for Dialysis Center and hospital)
       - Three (3) official quotations from 3 different suppliers if the medicine is not available in the dialysis center/hospital
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    3. Hemodialysis:
       - Original or Certified True Copy of the Clinical or Medical Abstract with full name, signature, and license number of the attending physician
       - Original endorsement with official quotation from the Dialysis Center and Hospital
       - Certification of PhilHealth benefits availed from the Dialysis Center and Hospital or Certification of PhilHealth exhaustion
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    4. Chemotherapy Drugs:
       - Original or Certified True Copy of the Clinical or Medical Abstract with full name, signature, and license number of the attending physician
       - Original Prescription with full name, signature, and license number of the attending physician
       - Original or Certified True Copy of Treatment Protocol with full name, signature, and license number of the attending physician
       - Three (3) official quotations from 3 different suppliers if the medicine is not available in the dialysis center/hospital
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    5. Radiation Therapy:
       - Original or Certified True Copy of the Clinical or Medical Abstract with full name, signature, and license number of the attending physician
       - Official quotation from the Hospital
       - Certification of PhilHealth benefit availed from the Hospital
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    6. Specialty Medicines:
       - Original or Certified True Copy of the Clinical or Medical Abstract with full name, signature, and license number of the attending physician
       - Original Prescription with full name, signature, and license number of the attending physician
       - Original or Certified True Copy of Treatment Protocol with full name, signature, and license number of the attending physician
       - Three (3) official quotations from 3 different suppliers if the medicine is not available in the dialysis center/hospital
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    7. Laboratory, Diagnostic and Imaging Requests:
       - Original or Certified True Copy of the Clinical or Medical Certificate with full name, signature, and license number of the attending physician
       - Original Copy of request of the laboratory/diagnostic and imaging request
       - Official Quotation from the Hospital/Diagnostic Center
       - Letter of Acceptance of Guarantee Letter
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    8. Implant and Medical Devices:
       - Original or Certified True Copy of the Clinical or Medical Certificate with full name, signature, and license number of the attending physician
       - Original Copy of prescription with full name, signature, and license number of the attending physician
       - Schedule of operation as certified by the attending physician
       - Three (3) official quotations from 3 different suppliers if the medicine is not available in the dialysis center/hospital
       - Letter of Acceptance for Guarantee Letter
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    9. Rehabilitation Therapy:
       - Original or Certified True Copy of the Clinical or Medical Certificate with full name, signature, and license number of the attending physician
       - Original Copy of prescription with full name, signature, and license number of the attending physician
       - Official Quotation from the health facility where the therapy will be performed
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    10. Catastrophic Illnesses:
        - Kidney/Liver/Lung/Pancreatic/Heart Transplant Organ Transplant (prior to or during admission/scheduled procedure with living donor)
        - Original or Certified True Copy of the Clinical or Medical Certificate with full name, signature, and license number of the attending physician
        - Certification from the attending Physician that the patient is due for transplant procedure including the patient’s non-availability to avail the Z-Benefit for kidney transplant) of PhilHealth
        - Valid ID of the patient and valid ID representative if applicable (photocopy)

    ---

    **3. DSWD: Medical Assistance Program**

    **Coverage:**

    - Hospitalization expenses
    - Medication and prescription coverage
    - Laboratory and diagnostic tests
    - Specialized medical procedures
    - Post-treatment and rehabilitation support

    **Eligibility Criteria:**

    - Families who are economically disadvantaged, vulnerable, or part of the informal sector, as identified by the DSWD Listahanan.
    - Government employees and contract service workers.
    - Individuals facing crisis situations, as determined by the assessment of social workers.
    - Those affected by natural calamities such as floods, earthquakes, typhoons, and landslides are also eligible for assistance.

    **Benefits:**

    1. Financial Relief for Low-Income Individuals
    2. Improved Healthcare Access
    3. Prevention of Medical Indebtedness
    4. Support for Vulnerable and Marginalized Groups
    5. Promotion of Preventive Healthcare Practices
    6. Positive Economic Impact

    **Requirements:**

    1. For paying hospital bills:
       - Medical Certificate/Clinical Abstract/Discharge Summary/Alagang Pinoy Tagubilin Form with diagnosis, complete name, license number, and signature of the Physician issued within three months (Original or Certified True Copy)
       - Hospital Bill or Statement of Account (Outstanding Balance) with name and signature of the billing clerk or Certificate of Balance and Promissory Note signed by the credit and collection officer/billing clerk.
       - Social Case Study Report or Case Summary

    2. For buying medicines:
       - Medical Certificate/Clinical Abstract/Discharge Summary/Alagang Pinoy Tagubilin Form with diagnosis, complete name of the patient, license number, and signature of the Physician issued within three months (Original or Certified True Copy)
       - Prescription with date of issuance, complete name, license number, and signature of the Physician issued within three months

    3. For medical procedures or operations:
       - Medical laboratory examination
       - Protocol for laboratory testing
       - Physician’s directive (Doctor’s order)

    4. For therapy and other forms of treatment:
       - Protocol for Treatment (including the date it was prescribed, complete name, license number, and signature of the doctor)
       - PhilHealth Certification (confirming exhaustion of member benefits)
       - Quotation or Cost Estimate (containing the total payable amount, along with the full name and signature of the issuing officer)
       - Certification from Psychiatrist or Psychologist (with specified date, complete name, license number, and the doctor’s signature)

    ---

    **4. PhilHealth Benefits**

    **Coverage:**

    - Inpatient benefits
    - Outpatient benefits
    - Z benefits (for severe conditions)
    - SDG-related benefits
    - Maternity benefits
    - Mental health services

    **Types of Members:**

    1. Formal economy members
    2. Informal economy members
    3. Overseas Filipino Workers (OFWs)
    4. Senior citizens
    5. Lifetime members
    6. Sponsored members
    7. Indigent members
    8. Qualified dependents

    **How to Claim Benefits:**

    - Your PhilHealth ID and another valid ID
    - An original copy of PhilHealth Claim Form 1 signed by your employer
    - A clear and updated copy of your Member Data Record Form (MDR)
    - Proof of contribution payments with official receipts if the information is not included on the MDR

    ---

    **Interactive Chatbot Example:**

    **User selects "Learn about health assistance programs"**

    **Chatbot:**
    Great! We have several health assistance programs available. Which one would you like to know more about?

    **Options:**

    1. CHAMP: City Hospitalization Assistance and Medicines Program
    2. PCSO: Medical Assistance Program
    3. DSWD: Medical Assistance Program
    4. PhilHealth Benefits

    ---

    **User selects "CHAMP: City Hospitalization Assistance and Medicines Program"**

    **Chatbot:**
    CHAMP provides hospital bill assistance, laboratory services, and hemodialysis for residents of Cebu City. Would you like to know about the qualifications or how to apply?

    **Options:**

    1. Qualifications
    2. How to apply
    3. Participating hospitals

    ---

    **User selects "Qualifications"**

    **Chatbot:**
    To qualify for CHAMP, you must be a resident of Cebu City or a dependent of an eligible Cebu City resident voter. Here are the required documents:
    - Filled-up application form
    - Voter’s certificate from the COMELEC
    - Barangay clearance
    - Medical abstract
    - Hospital bills and/or receipts

    Would you like more details on any of these?

    **Options:**

    1. Yes, more details on [specific document]
    2. No, go back to main menu
    3. Talk to a human representative

    ---

    **User selects "No, go back to main menu"**

    **Chatbot:**
    Alright, how else can I assist you today?

    **Options:**

    1. Learn about health assistance programs
    2. Check eligibility for a program
    3. Find a nearby hospital
    4. Understand required documents
    5. Talk to a human representative

    ---

    Feel free to expand on this structure or customize it further based on specific user interactions and needs.`;

        const response = await fetchResponse(prompt);

        setChat([...chat, { text: option }, { text: response }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const prompt = `User input: ${userInput}. Respond with detailed information from the following dataset:

    **Chatbot Prompt for "Ask for Health":**

    ---

    **Introduction:**

    Hello! I'm your health assistance guide. How can I help you today? Here are a few options to get started, or feel free to type your question.

    **Options:**

    1. Learn about health assistance programs
    2. Check eligibility for a program
    3. Find a nearby hospital
    4. Understand required documents
    5. Talk to a human representative

    ---

    **Program Information:**

    **1. CHAMP: City Hospitalization Assistance and Medicines Program**

    **Coverage:**

    - Hospital Bill Assistance
    - Laboratory Services
    - Hemodialysis

    **Qualifications:**

    - Resident of Cebu City
    - Dependents of eligible Cebu City residents voters

    **Requirements:**

    1. Prepare Required Documents:
       - Filled-up application form
       - Voter’s certificate from the COMELEC
       - Barangay clearance
       - Medical abstract
       - Hospital bills and/or receipts
    2. Visit the Department of Social Welfare and Services (DSWS)
    3. Complete Application Form
    4. Submit Application Form
    5. Evaluation by DSWS
    6. Avail of CHAMP Services

    **Participating Hospitals:**

    1. Chong Hua Hospital
    2. Cebu City Medical Center
    3. The Dialysis Co.
    4. Cebu Doctor’s University Hospital (refund basis/admission only)
    5. Perpetual Succour Hospital (refund basis/admission only)
    6. Sto. Nino Dialysis Center Inc.
    7. Southwestern University PHINMA
    8. South General Hospital (refund basis/admission only)
    9. St. Vincent General Hospital
    10. Allied Care Experts Medical Center (ACE)
    11. Nephro Group Dialysis Centers
    12. Cebu Velez General Hospital (refund basis/admission only)
    13. Adventist Hospital Cebu (refund basis/admission only)
    14. Asia Renal Care

    ---

    **2. PCSO: Medical Assistance Program**

    **Coverage:**

    - Confinement
    - Erythropoietin (Dialysis Injection)
    - Hemodialysis
    - Chemotherapy Drugs
    - Radiation Therapy
    - Specialty Medicines
    - Laboratory, Diagnostic and Imaging Requests
    - Implant and Medical Devices
    - Rehabilitation Therapy
    - Catastrophic Illnesses

    **Requirements:**

    1. Confinement:
       - Original or Certified True Copy of the Clinical or Medical Abstract or Discharge Summary with full name, signature, and license number of the attending physician
       - Original Statement of Account with full name and signature of the Billing Officer
       - Copy of Valid ID of the patient, Medical Social Services-issued ID, school ID for minors, copy of the birth certificate (for newborn up to 5 years old), and/or valid ID of the representative if applicable

    2. Erythropoietin (Dialysis Injection):
       - Original or Certified True Copy of the Clinical or Medical Abstract with full name, signature, and license number of the attending physician
       - Original Prescription of Epoetin injection with full name, signature, and license number of the attending physician
       - Original Copy of endorsement and quotation (applicable for Dialysis Center and hospital)
       - Three (3) official quotations from 3 different suppliers if the medicine is not available in the dialysis center/hospital
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    3. Hemodialysis:
       - Original or Certified True Copy of the Clinical or Medical Abstract with full name, signature, and license number of the attending physician
       - Original endorsement with official quotation from the Dialysis Center and Hospital
       - Certification of PhilHealth benefits availed from the Dialysis Center and Hospital or Certification of PhilHealth exhaustion
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    4. Chemotherapy Drugs:
       - Original or Certified True Copy of the Clinical or Medical Abstract with full name, signature, and license number of the attending physician
       - Original Prescription with full name, signature, and license number of the attending physician
       - Original or Certified True Copy of Treatment Protocol with full name, signature, and license number of the attending physician
       - Three (3) official quotations from 3 different suppliers if the medicine is not available in the dialysis center/hospital
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    5. Radiation Therapy:
       - Original or Certified True Copy of the Clinical or Medical Abstract with full name, signature, and license number of the attending physician
       - Official quotation from the Hospital
       - Certification of PhilHealth benefit availed from the Hospital
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    6. Specialty Medicines:
       - Original or Certified True Copy of the Clinical or Medical Abstract with full name, signature, and license number of the attending physician
       - Original Prescription with full name, signature, and license number of the attending physician
       - Original or Certified True Copy of Treatment Protocol with full name, signature, and license number of the attending physician
       - Three (3) official quotations from 3 different suppliers if the medicine is not available in the dialysis center/hospital
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    7. Laboratory, Diagnostic and Imaging Requests:
       - Original or Certified True Copy of the Clinical or Medical Certificate with full name, signature, and license number of the attending physician
       - Original Copy of request of the laboratory/diagnostic and imaging request
       - Official Quotation from the Hospital/Diagnostic Center
       - Letter of Acceptance of Guarantee Letter
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    8. Implant and Medical Devices:
       - Original or Certified True Copy of the Clinical or Medical Certificate with full name, signature, and license number of the attending physician
       - Original Copy of prescription with full name, signature, and license number of the attending physician
       - Schedule of operation as certified by the attending physician
       - Three (3) official quotations from 3 different suppliers if the medicine is not available in the dialysis center/hospital
       - Letter of Acceptance for Guarantee Letter
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    9. Rehabilitation Therapy:
       - Original or Certified True Copy of the Clinical or Medical Certificate with full name, signature, and license number of the attending physician
       - Original Copy of prescription with full name, signature, and license number of the attending physician
       - Official Quotation from the health facility where the therapy will be performed
       - Valid ID of the patient and valid ID of representative if applicable (photocopy)

    10. Catastrophic Illnesses:
        - Kidney/Liver/Lung/Pancreatic/Heart Transplant Organ Transplant (prior to or during admission/scheduled procedure with living donor)
        - Original or Certified True Copy of the Clinical or Medical Certificate with full name, signature, and license number of the attending physician
        - Certification from the attending Physician that the patient is due for transplant procedure including the patient’s non-availability to avail the Z-Benefit for kidney transplant) of PhilHealth
        - Valid ID of the patient and valid ID representative if applicable (photocopy)

    ---

    **3. DSWD: Medical Assistance Program**

    **Coverage:**

    - Hospitalization expenses
    - Medication and prescription coverage
    - Laboratory and diagnostic tests
    - Specialized medical procedures
    - Post-treatment and rehabilitation support

    **Eligibility Criteria:**

    - Families who are economically disadvantaged, vulnerable, or part of the informal sector, as identified by the DSWD Listahanan.
    - Government employees and contract service workers.
    - Individuals facing crisis situations, as determined by the assessment of social workers.
    - Those affected by natural calamities such as floods, earthquakes, typhoons, and landslides are also eligible for assistance.

    **Benefits:**

    1. Financial Relief for Low-Income Individuals
    2. Improved Healthcare Access
    3. Prevention of Medical Indebtedness
    4. Support for Vulnerable and Marginalized Groups
    5. Promotion of Preventive Healthcare Practices
    6. Positive Economic Impact

    **Requirements:**

    1. For paying hospital bills:
       - Medical Certificate/Clinical Abstract/Discharge Summary/Alagang Pinoy Tagubilin Form with diagnosis, complete name, license number, and signature of the Physician issued within three months (Original or Certified True Copy)
       - Hospital Bill or Statement of Account (Outstanding Balance) with name and signature of the billing clerk or Certificate of Balance and Promissory Note signed by the credit and collection officer/billing clerk.
       - Social Case Study Report or Case Summary

    2. For buying medicines:
       - Medical Certificate/Clinical Abstract/Discharge Summary/Alagang Pinoy Tagubilin Form with diagnosis, complete name of the patient, license number, and signature of the Physician issued within three months (Original or Certified True Copy)
       - Prescription with date of issuance, complete name, license number, and signature of the Physician issued within three months

    3. For medical procedures or operations:
       - Medical laboratory examination
       - Protocol for laboratory testing
       - Physician’s directive (Doctor’s order)

    4. For therapy and other forms of treatment:
       - Protocol for Treatment (including the date it was prescribed, complete name, license number, and signature of the doctor)
       - PhilHealth Certification (confirming exhaustion of member benefits)
       - Quotation or Cost Estimate (containing the total payable amount, along with the full name and signature of the issuing officer)
       - Certification from Psychiatrist or Psychologist (with specified date, complete name, license number, and the doctor’s signature)

    ---

    **4. PhilHealth Benefits**

    **Coverage:**

    - Inpatient benefits
    - Outpatient benefits
    - Z benefits (for severe conditions)
    - SDG-related benefits
    - Maternity benefits
    - Mental health services

    **Types of Members:**

    1. Formal economy members
    2. Informal economy members
    3. Overseas Filipino Workers (OFWs)
    4. Senior citizens
    5. Lifetime members
    6. Sponsored members
    7. Indigent members
    8. Qualified dependents

    **How to Claim Benefits:**

    - Your PhilHealth ID and another valid ID
    - An original copy of PhilHealth Claim Form 1 signed by your employer
    - A clear and updated copy of your Member Data Record Form (MDR)
    - Proof of contribution payments with official receipts if the information is not included on the MDR

    ---

    **Interactive Chatbot Example:**

    **User selects "Learn about health assistance programs"**

    **Chatbot:**
    Great! We have several health assistance programs available. Which one would you like to know more about?

    **Options:**

    1. CHAMP: City Hospitalization Assistance and Medicines Program
    2. PCSO: Medical Assistance Program
    3. DSWD: Medical Assistance Program
    4. PhilHealth Benefits

    ---

    **User selects "CHAMP: City Hospitalization Assistance and Medicines Program"**

    **Chatbot:**
    CHAMP provides hospital bill assistance, laboratory services, and hemodialysis for residents of Cebu City. Would you like to know about the qualifications or how to apply?

    **Options:**

    1. Qualifications
    2. How to apply
    3. Participating hospitals

    ---

    **User selects "Qualifications"**

    **Chatbot:**
    To qualify for CHAMP, you must be a resident of Cebu City or a dependent of an eligible Cebu City resident voter. Here are the required documents:
    - Filled-up application form
    - Voter’s certificate from the COMELEC
    - Barangay clearance
    - Medical abstract
    - Hospital bills and/or receipts

    Would you like more details on any of these?

    **Options:**

    1. Yes, more details on [specific document]
    2. No, go back to main menu
    3. Talk to a human representative

    ---

    **User selects "No, go back to main menu"**

    **Chatbot:**
    Alright, how else can I assist you today?

    **Options:**

    1. Learn about health assistance programs
    2. Check eligibility for a program
    3. Find a nearby hospital
    4. Understand required documents
    5. Talk to a human representative

    ---

    Feel free to expand on this structure or customize it further based on specific user interactions and needs.`;

        const response = await fetchResponse(prompt);

        setChat([...chat, { text: userInput }, { text: response }]);
        setUserInput("");
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Health Assistance Chatbot</h2>
            <div className="mb-4">
                {chat.map((message, index) => (
                    <div key={index} className="mb-2">
                        <p>{message.text}</p>
                        {message.options && (
                            <div className="flex flex-col">
                                {message.options.map((option, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleOptionClick(option)}
                                        className="my-1 py-2 px-4 bg-pink text-white font-semibold rounded hover:bg-lightpink"
                                        disabled={loading}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="w-full p-3 border rounded mb-4"
                    placeholder="Type your question here..."
                    rows="3"
                />
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-pink text-white font-semibold rounded hover:bg-lightpink"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Send"}
                </button>
            </form>
        </div>
    );
};

export default Chatbot;
