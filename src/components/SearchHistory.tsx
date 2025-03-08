
import { Clock, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchItem {
  id: string;
  query: string;
  timestamp: Date;
}

interface SearchHistoryProps {
  isVisible: boolean;
}

const SearchHistory = ({ isVisible }: SearchHistoryProps) => {
  // Mock search history data
  const searchHistory: SearchItem[] = [
    { id: '1', query: 'Weather in New York', timestamp: new Date(Date.now() - 5 * 60000) },
    { id: '2', query: 'Schedule meeting for tomorrow', timestamp: new Date(Date.now() - 30 * 60000) },
    { id: '3', query: 'Play ambient music', timestamp: new Date(Date.now() - 120 * 60000) },
    { id: '4', query: 'System status report', timestamp: new Date(Date.now() - 300 * 60000) },
  ];
  
  const formatTimeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };
  
  return (
    <div 
      className={`cyber-panel w-64 fixed right-0 top-16 bottom-0 transform transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="cyber-panel-header">
        <span className="flex items-center">
          <Clock className="mr-2 h-4 w-4 text-cyber-teal" />
          SEARCH HISTORY
        </span>
      </div>
      
      <div className="py-2">
        {searchHistory.map((item) => (
          <div key={item.id} className="cyber-panel p-2 mb-2 hover:cyber-border-glow transition-all duration-300">
            <div className="text-sm text-cyber-highlight">{item.query}</div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-cyber-text-dim">{formatTimeAgo(item.timestamp)}</span>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Trash className="h-3 w-3 text-cyber-text-dim hover:text-cyber-teal" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-cyber-border">
        <Button variant="outline" size="sm" className="w-full cyber-button">
          <Clock className="mr-2 h-4 w-4" />
          View All History
        </Button>
      </div>
    </div>
  );
};

export default SearchHistory;
