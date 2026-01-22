import { useState } from 'react';

interface Room4Props {
  onComplete: (answer: string) => void;
}

export function Room4({ onComplete }: Room4Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const answer = input.trim().toUpperCase();

    if (answer === '1') {
      setError('Statement becomes false → contradiction');
      setAttempts(attempts + 1);
      if (attempts >= 1) {
        setTimeout(() => setShowHint(true), 500);
      }
      return;
    }

    if (answer === '0') {
      setError('Statement becomes true → contradiction');
      setAttempts(attempts + 1);
      if (attempts >= 1) {
        setTimeout(() => setShowHint(true), 500);
      }
      return;
    }

    if (answer === 'NULL') {
      onComplete('NULL');
      return;
    }

    setError('Binary logic cannot solve this.');
    setAttempts(attempts + 1);
    if (attempts >= 2) {
      setTimeout(() => setShowHint(true), 500);
    }
  };

  return (
    <div className="max-w-2xl w-full space-y-8 animate-glitchIn">
      <div className="text-center space-y-2">
        <div className="text-sm opacity-40 animate-pulse">ROOM 4 OF 6</div>
        <h2 className="text-3xl font-bold text-yellow-500 animate-glow">🟨 THE SELF-CANCELING RULE</h2>
        <p className="text-sm opacity-60 animate-fadeIn" style={{ animationDelay: '0.3s' }}>Theme: Logical annihilation</p>
      </div>

      <div className="border border-yellow-900 bg-yellow-950/20 p-12 space-y-8 animate-borderPulse">
        <div className="text-center space-y-6">
          <div className="space-y-4 text-lg">
            <p className="animate-slideIn" style={{ animationDelay: '0.2s' }}>If this statement is false, enter 1.</p>
            <p className="animate-slideIn" style={{ animationDelay: '0.4s' }}>If this statement is true, enter 0.</p>
          </div>

          {showHint && (
            <p className="text-sm opacity-50 italic animate-glitchIn mt-8">
              "Do not resolve contradictions. Exit them."
            </p>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 animate-slideUp" style={{ animationDelay: '0.6s' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-black border border-white/20 px-4 py-3 text-white text-center focus:outline-none focus:border-yellow-500/60 focus:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all duration-300 uppercase"
          autoComplete="off"
          spellCheck="false"
          autoFocus
        />
        
        {error && (
          <p className="text-yellow-400 text-sm text-center animate-shake">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-white/5 border border-white/20 px-6 py-3 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300"
        >
          SUBMIT
        </button>
      </form>

      <div className="text-xs opacity-30 text-center animate-fadeIn" style={{ animationDelay: '0.9s' }}>
        <p>This is a classic paradox.</p>
        <p>You must refuse the binary entirely.</p>
      </div>
    </div>
  );
}