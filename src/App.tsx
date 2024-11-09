import React from 'react';
import Navbar from './components/layout/Navbar';
import UserDashboard from './components/dashboard/UserDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <UserDashboard />
    </div>
  );
}

export default App;