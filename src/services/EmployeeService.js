import axios from "axios"

const EMPLOYEE_API_BASE_URI ="http://localhost:8080/api/v1/employees"

class EmployeeService{
    saveUser(employee){
        return axios.post(EMPLOYEE_API_BASE_URI,employee);
    }
    getUsers(){
        return axios.get(EMPLOYEE_API_BASE_URI);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URI+'/'+id);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URI+'/'+id);
    }

    updateEmployeeById(id,employee){
        return axios.put(EMPLOYEE_API_BASE_URI+'/'+id,employee)
    }
}

export default new EmployeeService();