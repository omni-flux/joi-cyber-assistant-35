
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Fingerprint, LogIn, User, Shield } from 'lucide-react';

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would authenticate with a backend
    if (username && password) {
      onLogin();
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-bg-dark p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-wider text-cyber-highlight mb-2 cyber-text-glow">
            JOI ASSISTANT
          </h1>
          <p className="text-cyber-text-dim">
            {isLogin ? "Login to access your AI assistant" : "Create a new account"}
          </p>
        </div>
        
        <div className="cyber-panel p-6">
          <div className="cyber-panel-header">
            <span className="text-lg font-medium">
              {isLogin ? "AUTHENTICATION" : "REGISTRATION"}
            </span>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm">
                <User className="inline mr-2 h-4 w-4" />
                Username
              </Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="cyber-input"
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm">
                <Shield className="inline mr-2 h-4 w-4" />
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="cyber-input"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <Button type="submit" className="w-full cyber-button mt-6">
              {isLogin ? (
                <>
                  <LogIn className="mr-2 h-5 w-5" />
                  Login
                </>
              ) : (
                <>
                  <Fingerprint className="mr-2 h-5 w-5" />
                  Create Account
                </>
              )}
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-cyber-teal hover:text-cyber-highlight text-sm transition-colors"
            >
              {isLogin ? "Need an account? Register" : "Already have an account? Login"}
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-cyber-text-dim">
          <div>SYSTEM ID: 5198028</div>
          <div className="mt-1">CONNECTION ESTABLISHED</div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
