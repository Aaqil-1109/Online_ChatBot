// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './HomeComponent/HomeComponent';
import LoginComponent from './LoginComponent/LoginComponent';
import RegistrationComponent from './RegistrationComponent/RegistrationComponent';
import HomePage from './IntroComponent/HomePage';
import { ThemeProvider } from './IntroComponent/ThemeContext';
import { NavigationProvider } from './IntroComponent/NavigationContext';
import ForgetPasswordPage from './LoginComponent/ForgetPasswordPage';
import ChatBox from './HomeComponent/ChatBox'; // Import the ChatBox component
import AboutUs from './HomeComponent/About'; // Import the AboutUs component
import ContactUs from './HomeComponent/ContactUs'; // Import the AboutUs component
import Debate from './HomeComponent/Debate';
import { UsernameProvider } from './LoginComponent/UsernameContext';

// App component
const App = () => {
  const handleLogin = (credentials) => {
    // Implement your login logic here
    console.log('Login credentials:', credentials);
  };

  const handleCancel = () => {
    // Implement your cancel logic here
    console.log('Login canceled');
  };

  const handleRegister = (credentials) => {
    // Implement your registration logic here
    console.log('Registration credentials:', credentials);
    // You might want to redirect the user to a different page after successful registration
  };

  return (
    <ThemeProvider>
      <NavigationProvider>
      <UsernameProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginComponent onLogin={handleLogin} onCancel={handleCancel} />} />
            <Route path="/forgot-password" element={<ForgetPasswordPage />} />
            <Route path="/register" element={<RegistrationComponent onRegister={handleRegister} onCancel={handleCancel} />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/chatbox" element={<ChatBox />} /> {/* Route to ChatBox component */}
            <Route path="/aboutus" element={<AboutUs />} /> {/* Route to ChatBox component */}
            <Route path="/Debate" element={<Debate />} /> {/* Route to AboutUs component */}
            <Route path="/contact-us" element={<ContactUs />} /> {/* Route to AboutUs component */}
          </Routes>
        </Router>
        </UsernameProvider>
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
