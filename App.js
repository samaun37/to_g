import { Route, Routes } from 'react-router-dom';
import AllrecordsPage from './pages/Allrecords';
import AddnewemployeePage from './pages/Addnew';
import Addnew_2 from './pages/Addnew_2'
import OthersPage from './pages/Others';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Route path='/' exact>
          <AllrecordsPage/>
      </Route>
      <Route path='/add'>
          <AddnewemployeePage />
        </Route>
      <Route path='/other'>
          <OthersPage />
      </Route>
    </div>
  );
}
export default App;