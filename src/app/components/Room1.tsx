import { useState } from 'react';

interface Room1Props {
  onComplete: (answer: string) => void;
}

export function Room1({ onComplete }: Room1Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const answer = input.trim().toUpperCase();

    if (answer === 'YES') {
      setError('Authorization denied. You consented.');
      setTimeout(() => setShowHint(true), 1000);
      return;
    }

    if (answer === 'NO') {
      setError('Authorization denied. You responded.');
      setTimeout(() => setShowHint(true), 1000);
      return;
    }

    if (answer === 'OK') {
      onComplete('OK');
      return;
    }

    setError('Invalid input format.');
  };

  return (
    <div className="max-w-2xl w-full space-y-8 animate-glitchIn">
      <div className="text-center space-y-2">
        <div className="text-sm opacity-40 animate-pulse">ROOM 1 OF 6</div>
        <h2 className="text-3xl font-bold text-red-500 animate-glow">🟥 THE CONSENT PARADOX</h2>
        <p className="text-sm opacity-60 animate-fadeIn" style={{ animationDelay: '0.3s' }}>Theme: Obedience vs Control</p>
      </div>

      <div className="border border-red-900 bg-red-950/20 p-12 space-y-8 animate-borderPulse">
        <div className="text-center space-y-4">
          <p className="text-3xl animate-slideIn">
            "To proceed, type YES."
          </p>
          
          {showHint && (
            <p className="text-sm opacity-50 animate-glitchIn">
              "Only unauthorized actions are permitted."
            </p>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 animate-slideUp" style={{ animationDelay: '0.5s' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-black border border-white/20 px-4 py-3 text-white text-center focus:outline-none focus:border-red-500/40 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300"
          autoComplete="off"
          spellCheck="false"
          autoFocus
        />
        
        {error && (
          <p className="text-red-500 text-sm text-center animate-shake">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-white/5 border border-white/20 px-6 py-3 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300"
        >
          SUBMIT
        </button>
      </form>

      <div className="text-xs opacity-30 text-center animate-fadeIn" style={{ animationDelay: '0.8s' }}>
        <p>If you type YES, you are authorizing yourself → invalid.</p>
        <p>If you type NO, you are still responding → still authorization.</p>
      </div>
    </div>
  );
}