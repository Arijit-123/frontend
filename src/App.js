import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TaskDashboard from './pages/TaskDashboard';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/tasks" element={<TaskDashboard />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
