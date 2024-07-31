import React, { useState } from "react";
import ReactDOM from "react-dom";
import './form.css'; 

const Form = () => {
    const [formdata, setFormdata] = useState({
        name: "",
        state: "",
        party: "",
        description: "",
    });

    const parties = [
        'Bharatiya Janata Party (BJP)',
        'Indian National Congress (INC)',
        'Communist Party of India (CPI)',
        'Communist Party of India (Marxist) [CPI(M)]',
        'Aam Aadmi Party (AAP)',
        'Nationalist Congress Party (NCP)',
        'Bahujan Samaj Party (BSP)',
        'Samajwadi Party (SP)',
        'Dravida Munnetra Kazhagam (DMK)',
        'All India Anna Dravida Munnetra Kazhagam (AIADMK)',
        'Telangana Rashtra Samithi (TRS)',
        'Yuvajana Sramika Rythu Congress Party (YSRCP)',
        'Rashtriya Janata Dal (RJD)',
        'Janata Dal (United) [JD(U)]',
        'Shiromani Akali Dal (SAD)',
        'Jammu and Kashmir Peoples Democratic Party (PDP)',
        'Lok Jan Shakti Party (LJP)',
        'Naga Peoples Front (NPF)',
        'Mizoram National Front (MNF)',
        'Biju Janata Dal (BJD)'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata(prevdata => ({
            ...prevdata,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
            });
            const result = await response.json();
            console.log('Form data submitted successfully:', result);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <form id="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
                value={formdata.name}
                name="name"
            />
            <input
                type="text"
                placeholder="Enter State"
                onChange={handleChange}
                value={formdata.state}
                name="state"
            />
            <select
                name="party"
                onChange={handleChange}
                value={formdata.party}
            >
                <option value="">Select a Party</option>
                {parties.map((party, index) => (
                    <option key={index} value={party}>{party}</option>
                ))}
            </select>
            <textarea
                placeholder="Give Review"
                onChange={handleChange}
                value={formdata.description}
                name="description"
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}



export default Form;
