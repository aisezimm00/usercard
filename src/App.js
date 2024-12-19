import React from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import UsersList from './UserList';
import UserDetails from './UserDetails';

const App = () => {
  return (
   <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>

   </BrowserRouter>
  );
};

export default App;
