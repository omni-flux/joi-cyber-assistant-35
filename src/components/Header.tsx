
import { Menu, Power, Settings, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [systemTime, setSystemTime] = useState(new Date().toLocaleTimeString());
  
  // Update system time every second
  useState(() => {
    const interval = setInterval(() => {
      setSystemTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(interval);
  });
  
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
        </div>
      </div>
    </header>
  );
};

export default Header;
