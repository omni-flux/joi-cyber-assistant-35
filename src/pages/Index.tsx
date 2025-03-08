
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import SearchHistory from '@/components/SearchHistory';
import ChatInterface from '@/components/ChatInterface';
import SystemInfo from '@/components/SystemInfo';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const toggleHistory = () => {
    setHistoryOpen(!historyOpen);
  };
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 relative">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className={`flex-1 p-4 transition-all duration-300 ${sidebarOpen ? 'ml-56' : 'ml-0'}`}>
          <div className="max-w-5xl mx-auto">
            <div className="mb-4 py-2">
              <h2 className="text-2xl font-semibold text-cyber-highlight tracking-wider">
                Welcome to <span className="glitch-effect" data-text="JOI">JOI</span> AI Assistant
              </h2>
              <p className="text-cyber-text-dim">
                Your personal AI assistant is ready to help
              </p>
            </div>
            
            <ChatInterface />
            <SystemInfo />
          </div>
        </main>
        
        <SearchHistory isVisible={historyOpen} />
        
        <button 
          onClick={toggleHistory}
          className={`cyber-button fixed top-20 right-0 transform ${historyOpen ? 'translate-x-0' : 'translate-x-8'} rotate-90 origin-top-left z-50`}
        >
          History
        </button>
      </div>
    </div>
  );
};

export default Index;
