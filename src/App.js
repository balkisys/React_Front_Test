import React, {useState }from 'react';
import Navbar from './components/Navbar';
import TaskContextProvider from './contexts/TaskContext';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "user@gmail.com",
    password: "user2021"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else {
      console.log("Details do not match!");
      setError("Details do not match!")
    }
  }
  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
    setError("");
  }
  return (
    <div className="App">
      <TaskContextProvider>
        {(user.email !="") ? (<Navbar Logout={Logout} />) : (<LoginForm Login={Login} error={error}/>)}
        
      
        
      </TaskContextProvider>
    </div>
  );
}

export default App;
