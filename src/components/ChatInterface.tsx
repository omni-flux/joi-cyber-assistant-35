
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, Send } from 'lucide-react';
import VoiceVisualizer from './VoiceVisualizer';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello, I am Joi, your AI assistant. How can I help you today?',
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputValue),
        sender: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };
  
  const toggleVoiceInput = () => {
    setIsVoiceActive(!isVoiceActive);
    
    // If activating voice, simulate voice recognition after a few seconds
    if (!isVoiceActive) {
      setTimeout(() => {
        const voiceText = "What's the weather like today?";
        setInputValue(voiceText);
        setIsVoiceActive(false);
      }, 4000);
    }
  };
  
  const getAIResponse = (message: string): string => {
    // Simple response logic - in a real app, this would call an AI API
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      return 'Hello! How can I assist you today?';
    } else if (lowerMsg.includes('weather')) {
      return 'I cannot access real-time weather information yet, but I will be integrated with weather APIs soon.';
    } else if (lowerMsg.includes('time')) {
      return `The current time is ${new Date().toLocaleTimeString()}.`;
    } else if (lowerMsg.includes('name')) {
      return 'My name is Joi. I am your personal AI assistant.';
    } else {
      return 'I understand your message. Once connected to OpenAI, I will provide more helpful responses.';
    }
  };
  
  return (
    <div className="cyber-panel flex-1 flex flex-col h-[calc(100vh-8rem)]">
      <div className="cyber-panel-header">
        <span className="text-cyber-highlight font-medium">JOI ASSISTANT</span>
        <span className="text-xs text-cyber-text-dim">ENCRYPTED CHANNEL</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 cyber-grid-bg">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] cyber-panel p-3 ${
                message.sender === 'user'
                  ? 'bg-cyber-bg-light border-cyber-border'
                  : 'bg-cyber-teal/10 border-cyber-teal/30 cyber-border-glow'
              }`}
            >
              <div className="text-sm mb-1">
                {message.sender === 'user' ? 'YOU' : 'JOI'}
                <span className="text-xs text-cyber-text-dim ml-2">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <div className={message.sender === 'assistant' ? 'text-cyber-text' : ''}>
                {message.content}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {isVoiceActive && (
        <div className="p-4">
          <VoiceVisualizer isActive={isVoiceActive} />
          <div className="text-center text-cyber-highlight text-sm animate-pulse-neon">
            Listening...
          </div>
        </div>
      )}
      
      <div className="p-4 border-t border-cyber-border">
        <div className="flex space-x-2">
          <Button
            onClick={toggleVoiceInput}
            variant="outline"
            size="icon"
            className={`cyber-button ${isVoiceActive ? 'border-cyber-highlight text-cyber-highlight' : ''}`}
          >
            {isVoiceActive ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message here..."
            className="cyber-input text-base"
          />
          <Button onClick={handleSendMessage} className="cyber-button">
            <Send className="h-5 w-5 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
