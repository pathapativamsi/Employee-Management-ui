import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const EditEmployee = () => {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
    });

    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await EmployeeService.getEmployeeById(id);
            setEmployee(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

    const updateEmployee = () => {
        EmployeeService.updateEmployeeById(id,employee).then((data)=>{
            console.log(data);
            navigate('/employeelist');
        })
    }

    const cancel = () => {
        navigate('/employeelist');
    }


    const handleChange = (e) => {
      setEmployee({...employee, [e.target.name]:e.target.value});
    }
    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
          <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
              <h1>Update Employee</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block font-normal text-gray-600">First Name</label>
              <input
                type="text"
                name="firstName"
                value={employee.firstName}
                onChange={(val)=>handleChange(val)}
                className="border w-96 h-10 px-2 py-2 mt-2"
              ></input>
            </div>
    
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block font-normal text-gray-600">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={employee.lastName}
                onChange={(val)=>handleChange(val)}
                className="border w-96 h-10 px-2 py-2 mt-2"
              ></input>
            </div>
    
            <div className="items-center justify-center h-14 w-full my-4">
              <label className="block font-normal text-gray-600">Email</label>
              <input
                type="email"
                name="emailId"
                value={employee.emailId}
                onChange={(val)=>handleChange(val)}
                className="border w-96 h-10 px-2 py-2 mt-2"
              ></input>
            </div>
    
            <div className="items-center justify-center h-14 w-full my-4 space-x-4">
              <button onClick={updateEmployee} className="rounded text-white bg-green-600 mt-2 px-4 py-2 font-semibold hover:bg-green-700">Update</button>
              <button onClick={cancel} className="rounded text-white bg-red-600 mt-2 px-4 py-2 font-semibold hover:bg-red-700">Cancel</button>
            </div>
          </div>
        </div>
      );
}

export default EditEmployee