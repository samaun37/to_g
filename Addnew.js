import { Route, Routes } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Newemployeeform from '../components/employees/Newemployeeform';
function AddnewemployeePage() {
    return <section>
      <h1>Add New Employee</h1>
      <Newemployeeform />
    </section>
  }
  export default AddnewemployeePage;