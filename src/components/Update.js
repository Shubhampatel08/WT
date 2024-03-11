import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmp = () => {
  const navigate = useNavigate();
  const apiUrl = "https://65d6d5fef6967ba8e3beadc1.mockapi.io/employee/";
  const { id } = useParams();

  const [employeeData, setEmployeeData] = useState({
    EmployeeName: "",
    EmployeeImage: "",
  });

  useEffect(() => {
    fetch(apiUrl + id)
      .then((res) => res.json())
      .then((data) => {
        setEmployeeData(data);
      })
      .catch((error) => {
        console.error("Error fetching employee data: ", error);
      });
  }, [apiUrl, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    fetch(apiUrl + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/Employee");
      })
      .catch((error) => {
        console.error("Error updating employee: ", error);
      });
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <div>
        <label htmlFor="employeeName">Employee Name:</label>
        <input
          type="text"
          id="employeeName"
          name="EmployeeName"
          value={employeeData.EmployeeName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="employeeImage">Employee Image URL:</label>
        <input
          type="text"
          id="employeeImage"
          name="EmployeeImage"
          value={employeeData.EmployeeImage}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateEmp;
