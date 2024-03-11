import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Employee from "./components/Employee";
import EmployeeDetails from "./components/EmployeeDetails";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import AddEmp from "./components/AddEmp";
import UpdateEmp from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employeeDetails/:id" element={<EmployeeDetails />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/add" element={<AddEmp />} />
        <Route path="/update/:id" element={<UpdateEmp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
