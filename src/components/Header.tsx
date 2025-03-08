
import { Menu, Power, Settings, User, Minus, Square, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  toggleSidebar: () => void;
}

// Check if running in Electron
const isElectron = window.electron !== undefined;

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [systemTime, setSystemTime] = useState(new Date().toLocaleTimeString());
  
  // Update system time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Window control handlers for Electron
  const handleMinimize = () => {
    if (isElectron) {
      window.electron.send('minimize-app');
    }
  };
  
  const handleMaximize = () => {
    if (isElectron) {
      window.electron.send('maximize-app');
    }
  };
  
  const handleClose = () => {
    if (isElectron) {
      window.electron.send('close-app');
    }
  };
  
  return (
    <header className="cyber-panel sticky top-0 z-50 py-2 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="cyber-button p-2">
          <Menu className="h-5 w-5 text-cyber-teal" />
        </Button>
        <h1 className="text-xl font-semibold tracking-wide text-cyber-text">
          <span className="text-cyber-highlight">JOI</span> CYBER ASSISTANT
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-sm text-cyber-text-dim cyber-scan-effect px-4 py-1">
          SYSTEM ID: 5198028
        </div>
        <div className="text-sm text-cyber-text-dim">
          {systemTime}
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="cyber-button p-2">
            <User className="h-5 w-5 text-cyber-teal" />
          </Button>
          <Button variant="ghost" size="icon" className="cyber-button p-2">
            <Settings className="h-5 w-5 text-cyber-teal" />
          </Button>
          <Button variant="ghost" size="icon" className="cyber-button p-2">
            <Power className="h-5 w-5 text-cyber-teal" />
          </Button>
          
          {/* Window Controls for Electron */}
          {isElectron && (
            <div className="ml-4 flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleMinimize} 
                className="cyber-button p-2 hover:bg-cyber-blue/20"
              >
                <Minus className="h-4 w-4 text-cyber-text" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleMaximize} 
                className="cyber-button p-2 hover:bg-cyber-teal/20"
              >
                <Square className="h-4 w-4 text-cyber-text" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleClose} 
                className="cyber-button p-2 hover:bg-cyber-purple/20"
              >
                <X className="h-4 w-4 text-cyber-text" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
