
import { CpuIcon, HardDrive, Memory, Shield } from "lucide-react";

const SystemInfo = () => {
  return (
    <div className="cyber-panel mt-4">
      <div className="cyber-panel-header">
        <span>
          <Shield className="inline mr-2 h-4 w-4 text-cyber-teal" />
          SYSTEM STATUS
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="cyber-panel p-3">
          <div className="flex items-center mb-2">
            <CpuIcon className="h-4 w-4 text-cyber-teal mr-2" />
            <span className="text-sm text-cyber-text-dim">CPU USAGE</span>
          </div>
          <div className="h-2 bg-cyber-bg-dark rounded overflow-hidden">
            <div 
              className="h-full bg-cyber-teal animate-pulse-neon"
              style={{ width: '42%' }}
            ></div>
          </div>
          <div className="mt-1 text-right text-xs text-cyber-highlight">42%</div>
        </div>
        
        <div className="cyber-panel p-3">
          <div className="flex items-center mb-2">
            <Memory className="h-4 w-4 text-cyber-teal mr-2" />
            <span className="text-sm text-cyber-text-dim">MEMORY</span>
          </div>
          <div className="h-2 bg-cyber-bg-dark rounded overflow-hidden">
            <div 
              className="h-full bg-cyber-purple animate-pulse-neon"
              style={{ width: '68%' }}
            ></div>
          </div>
          <div className="mt-1 text-right text-xs text-cyber-highlight">68%</div>
        </div>
        
        <div className="cyber-panel p-3">
          <div className="flex items-center mb-2">
            <HardDrive className="h-4 w-4 text-cyber-teal mr-2" />
            <span className="text-sm text-cyber-text-dim">STORAGE</span>
          </div>
          <div className="h-2 bg-cyber-bg-dark rounded overflow-hidden">
            <div 
              className="h-full bg-cyber-blue animate-pulse-neon"
              style={{ width: '35%' }}
            ></div>
          </div>
          <div className="mt-1 text-right text-xs text-cyber-highlight">35%</div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-cyber-text-dim">
        <div>LAST UPDATE: {new Date().toLocaleTimeString()}</div>
        <div className="mt-1 flex items-center">
          <div className="h-2 w-2 rounded-full bg-cyber-teal animate-pulse-neon mr-2"></div>
          SYSTEM RUNNING NORMALLY
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;
