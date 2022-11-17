import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

function EmployeeList() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getUsers();
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res)=>{
        console.log(res);
        setEmployees(employees.filter((emp)=>{
            return emp.id !== id;
        }))
    })
  }

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addemployee")}
          className="rounded px-4 py-2 bg-slate-600 text-white"
        >
          Add Employee
        </button>
      </div>

      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="font-semibold tracking-wider text-gray-700 uppercase px-3 py-4">
                First Name
              </th>
              <th className="font-semibold tracking-wider text-gray-700 uppercase px-3 py-4">
                Last Name
              </th>
              <th className="font-semibold tracking-wider text-gray-700 uppercase px-3 py-4">
                Email Id
              </th>
              <th className="font-semibold tracking-wider text-gray-700 uppercase px-3 py-4">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {employees.map((employee) => 
                <Employee employee={employee} deleteEmployee={deleteEmployee} key={employee.id} />
                
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
