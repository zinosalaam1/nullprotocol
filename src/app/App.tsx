import { useState } from 'react';
import { WelcomeScreen } from '@/app/components/WelcomeScreen';
import { Room1 } from '@/app/components/Room1';
import { Room2 } from '@/app/components/Room2';
import { Room3 } from '@/app/components/Room3';
import { Room4 } from '@/app/components/Room4';
import { Room5 } from '@/app/components/Room5';
import { Room6 } from '@/app/components/Room6';

export default function App() {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [username, setUsername] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);

  const handleUsernameSubmit = (name: string) => {
    setUsername(name);
    setCurrentRoom(1);
  };

  const handleRoomComplete = (answer: string) => {
    setAnswers([...answers, answer]);
    setCurrentRoom(currentRoom + 1);
  };

  const handleRestart = () => {
    setCurrentRoom(0);
    setUsername('');
    setAnswers([]);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {currentRoom === 0 && <WelcomeScreen onSubmit={handleUsernameSubmit} />}
      {currentRoom === 1 && <Room1 onComplete={handleRoomComplete} />}
      {currentRoom === 2 && <Room2 onComplete={handleRoomComplete} />}
      {currentRoom === 3 && <Room3 onComplete={handleRoomComplete} />}
      {currentRoom === 4 && <Room4 onComplete={handleRoomComplete} />}
      {currentRoom === 5 && <Room5 onComplete={handleRoomComplete} />}
      {currentRoom === 6 && <Room6 answers={answers} username={username} onRestart={handleRestart} />}
    </div>
  );
}
