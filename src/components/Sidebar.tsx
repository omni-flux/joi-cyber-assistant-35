
import { Archive, Fingerprint, History, Home, MessageSquare, Search, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: MessageSquare, label: 'Chat', active: true },
    { icon: Search, label: 'Search', active: false },
    { icon: History, label: 'History', active: false },
    { icon: Archive, label: 'Archive', active: false },
  ];
  
  const settingsItems = [
    { icon: Shield, label: 'Security' },
    { icon: Zap, label: 'System' },
    { icon: Fingerprint, label: 'Profile' },
  ];
  
  return (
    <aside 
      className={cn(
        "fixed left-0 top-16 bottom-0 z-40 w-56 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="cyber-panel h-full flex flex-col py-4">
        <div className="px-2 mb-8">
          <div className="cyber-panel-header mb-2">
            <span className="text-sm text-cyber-text-dim">NAVIGATION</span>
          </div>
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <Button 
                key={index}
                variant={item.active ? "default" : "ghost"} 
                className={cn(
                  "w-full justify-start text-left mb-1 cyber-button",
                  item.active && "border-cyber-highlight text-cyber-highlight"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
        
        <div className="cyber-panel-header mx-2 mt-auto mb-2">
          <span className="text-sm text-cyber-text-dim">SETTINGS</span>
        </div>
        <div className="px-2">
          <nav className="space-y-1">
            {settingsItems.map((item, index) => (
              <Button 
                key={index}
                variant="ghost" 
                className="w-full justify-start text-left mb-1 cyber-button"
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
        
        <div className="mt-8 mx-2 pt-4 border-t border-cyber-border">
          <div className="text-xs text-cyber-text-dim mb-1">SYSTEM STATUS</div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyber-teal animate-pulse-neon"></div>
            <span className="text-xs text-cyber-text">ONLINE</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
