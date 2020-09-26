import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import BookingDetail from './components/BookingDetail/BookingDetail';
import PrivateRoute from '../src/components/PrivateRoute/PrivateRoute';
import Login from '../src/components/Login/Login';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
       <Router>
         <Switch>
           <Route path ="/home">
               <Home></Home>
           </Route>
           <Route path="/login">
               <Login></Login>
           </Route>
           <Route path="/places/:id">
               <Booking></Booking>
           </Route>
           <PrivateRoute path="/booking/:bookingPlaceId">
               <BookingDetail></BookingDetail>
           </PrivateRoute>
           <Route path="/places/">
               <Home></Home>
           </Route>
           <Route exact path="/">
               <Home></Home>
           </Route>
           <Route path="*">
               <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>
      </UserContext.Provider>
  );
}

export default App;
