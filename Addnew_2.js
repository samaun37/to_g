//import { Form, Input, Button, Checkbox } from "antd";
import React, { useState } from "react";
import Axios from "axios";
const Addnew_2 = () => {
  const [emp, setemp] = useState({
    name: "",
    age: "",
    department: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setemp({
      ...emp,
      [name]: value,
    });
  };

  const adding = () => {
    const { name, age, department, salary } = emp;
      Axios.post("http://localhost:3001/addnew", emp).then((res) => {
        alert(res.data.message);
      });
  };

  return (
    <div className="card-body">
      <div className="container">
        <h1>Add New Employee</h1>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={emp.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            value={emp.age}
            onChange={handleChange}
            placeholder="Enter Age"
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            className="form-control"
            name="department"
            value={emp.department}
            onChange={handleChange}
            placeholder="Enter Department"
          />
        </div>
        
        <div className="form-group">
          <label>Salary</label>
          <input
            type="text"
            className="form-control"
            name="salary"
            value={emp.salary}
            onChange={handleChange}
            placeholder="Enter Salary"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={adding}>
          emp
        </button>
      </div>
    </div>
  );
};

export default Addnew_2;