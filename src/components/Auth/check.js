import React, { useState } from "react";

export default function PatientsList() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [patients, setPatients] = useState([]);
  const [message, setMessage] = useState("");

  const handleFetchPatients = () => {
    const payload = {
      email: email,
      password: password
    };

    fetch('/patients_fetch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      setMessage(data.message);
      if (data.patients) {
        setPatients(data.patients);
      }
    })
    .catch(error => {
      console.error('Fetch patients error:', error);
    });
  };

  return (
    <div>
      <h2>Patients List</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button onClick={handleFetchPatients}>Fetch Patients</button>
      <p>{message}</p>
      <ul>
        {patients.map(patient => (
          <li key={patient._id}>
            Name: {patient.name}, Diagnosis: {patient.diagnosis}, Status: {patient.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
