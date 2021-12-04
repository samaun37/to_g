import { useState, useEffect } from 'react';
import EmployeeList from '../components/employees/EmployeeList';
import Axios from "axios";

///
/*
const AllrecordsPage = () => {
  const [empList, setempList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/showrecords").then((res) => {
      setempList(res.data);
    });
  },[]);
  return (
    <div>
      <div>
        <h1 style={{color: "green"}}>All records</h1>

        {empList.map((val, key) => {
          return (
            <div className="card" style={{color: "red", marginTop: "10px"}} key={key}>
              <h1>name:{val.name}</h1>
              <h1>age:{val.age}</h1>
              <h1>department:{val.department}</h1>
              <h1>salary:{val.salary}</h1>              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllrecordsPage;
*/

const dummy = [
  {
    id: 'm1',
    Name: 'first employee',
    Age: '33',
    Department: 'marketing',
    Salary: '40 k',
  },
  {
    id: 'm2',
    Name: 'second employee',
    Age: '23',
    Department: 'sales',
    Salary: '45 k',
  },
];
/// dummy works but loadedemps doesn't. but it gets the number of data correct but cant show

function AllrecordsPage() {
  return (
    <section>
      <h1>All Records</h1>
      <EmployeeList emps = {dummy}/>
    </section>
  );
}

export default AllrecordsPage;