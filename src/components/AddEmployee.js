import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
    const navigate = useNavigate();
    const [Employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
    });

    const handleChange = (e) => {
      setEmployee({...Employee, [e.target.name]:e.target.value});
    }

    const saveEmployee = () => {
      EmployeeService.saveUser(Employee).then((data)=>{
        console.log(data);
        navigate('/employeelist')
      }).catch((err)=>{
        console.log(err);
      })
    }

    const resetData = () => {
      setEmployee({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
    })
    }


    
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add new Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block font-normal text-gray-600">First Name</label>
          <input
            type="text"
            name="firstName"
            value={Employee.firstName}
            onChange={(val)=>handleChange(val)}
            className="border w-96 h-10 px-2 py-2 mt-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block font-normal text-gray-600">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={Employee.lastName}
            onChange={(val)=>handleChange(val)}
            className="border w-96 h-10 px-2 py-2 mt-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block font-normal text-gray-600">Email</label>
          <input
            type="email"
            name="emailId"
            value={Employee.emailId}
            onChange={(val)=>handleChange(val)}
            className="border w-96 h-10 px-2 py-2 mt-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4">
          <button onClick={saveEmployee} className="rounded text-white bg-green-600 mt-2 px-4 py-2 font-semibold hover:bg-green-700">Save</button>
          <button onClick={resetData} className="rounded text-white bg-red-600 mt-2 px-4 py-2 font-semibold hover:bg-red-700">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
