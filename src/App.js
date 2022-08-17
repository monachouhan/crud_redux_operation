import logo from './logo.svg';
import './App.css';
import Register from './screens/Register'
import Login from './screens/Login';
import AddItem from './screens/AddItem';
import {Routes , Route, BrowserRouter } from 'react-router-dom'
import Home from './screens/Home'
import ViewList from './screens/ViewList';
import Dashboard from './screens/Dashboard';
import UserProfile from './screens/UserProfile'
import Edit from './screens/Edit'
import ViewUser from './screens/ViewUser'
import PrivateRoute from './utils/PrivateRoute';

function App() {
  // let redirectToUrl;
  //  let token = localStorage.getItem('token');
  // console.log("token in app.js======/>>>>.", token);
  // if (token)
  // {
  //   redirectToUrl = <Redirect to={<UserProfile />}/>;
  // }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
        <Route path ="/AddItem" element ={<AddItem/>}></Route>
        <Route path ="/ViewList" element ={<ViewList/>}></Route>
        <Route path ="/Dashboard" element ={<Dashboard/>}></Route>
        <Route path ="/UserProfile" element ={<UserProfile/>}></Route>
        <Route path ="/Edit" element ={<Edit/>}></Route>
        <Route path ="/ViewUser" element ={<ViewUser/>}></Route>
        </Route>
        <Route  path ="/" element ={<Home />}></Route>
        <Route path ="/Register" element ={<Register />}></Route>
        <Route path ="/Login" element ={<Login/>}></Route>
       
      </Routes>
      </BrowserRouter>
  
   

    </div>
  );
}

export default App;
