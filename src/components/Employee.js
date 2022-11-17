import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({employee, deleteEmployee}) => {
    const navigate = useNavigate();

    const updateEmployee = (e,id) => {
        e.preventDefault();
        navigate(`/updateemployee/${id}`)
    }
  return (
    <tr className="bg-white" key={employee.id}>
      <td className="text-left px-8 py-4">{employee.firstName}</td>
      <td className="text-left px-8 py-4">{employee.lastName}</td>
      <td className="text-left px-8 py-4">{employee.emailId}</td>
      <td className="text-center px-8 py-4 font-medium text-sm">
        <a onClick={(e) => updateEmployee(e,employee.id)} className="text-indigo-700 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a onClick={(e,id) => deleteEmployee(e,employee.id)} className="text-indigo-700 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
