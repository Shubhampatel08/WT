import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const navigate = useNavigate();
  const apiUrl = "https://65d6d5fef6967ba8e3beadc1.mockapi.io/employee/";
  const [EmployeeName, setEname] = useState("");
  const [EmployeeImage, setEimage] = useState("");
  const [EmployeeDesignation, setEDesig] = useState("");
  function AddUpdateEmployee() {
    let data = { EmployeeName, EmployeeImage, EmployeeDesignation };
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
  }
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Add Employee</h1>
      <div class="mb-3">
        <label for="" class="form-label">
          Employee Name
        </label>
        <input
          type="text"
          value={EmployeeName}
          onChange={(e) => setEname(e.target.value)}
          name="EmployeeName"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Employee Image
        </label>
        <input
          type="text"
          value={EmployeeImage}
          onChange={(e) => setEimage(e.target.value)}
          name="EmployeeName"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Employee Designation
        </label>
        <input
          type="text"
          value={EmployeeDesignation}
          onChange={(e) => setEDesig(e.target.value)}
          name="EmployeeDesignation"
          class="form-control"
        />
      </div>

      <button type="submit" class="btn btn-primary" onClick={AddUpdateEmployee}>
        Add Employee
      </button>
    </div>
  );
}

export default AddEmployee;
