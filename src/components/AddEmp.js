import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmp = () => {
  const navigate = useNavigate();
  const apiUrl = "https://65d6d5fef6967ba8e3beadc1.mockapi.io/employee/";
  const [EmployeeName, setEmployeeName] = useState("");
  const addName = (e) => {
    setEmployeeName(e.target.value);
  };

  const AddEmp = () => {
    let data = { EmployeeName };
    fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resp) => navigate("/Employee"));
  };

  return (
    <>
      <div>
        <input type="text" value={EmployeeName} onChange={addName} />
        <button onClick={AddEmp}>Add</button>
      </div>
    </>
  );
};

export default AddEmp;
