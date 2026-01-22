import { useState } from 'react';

interface Room2Props {
  onComplete: (answer: string) => void;
}

export function Room2({ onComplete }: Room2Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const answer = input.trim();

    if (answer === '') {
      setError('Nothing is not an answer.');
      setAttempts(attempts + 1);
      if (attempts >= 1) {
        setTimeout(() => setShowHint(true), 500);
      }
      return;
    }

    if (answer === '6') {
      setError('Extension is not incompletion.');
      setAttempts(attempts + 1);
      setTimeout(() => setShowHint(true), 500);
      return;
    }

    if (answer === '0') {
      onComplete('0');
      return;
    }

    setError('Incorrect.');
    setAttempts(attempts + 1);
    if (attempts >= 2) {
      setTimeout(() => setShowHint(true), 500);
    }
  };

  return (
    <div className="max-w-2xl w-full space-y-8 animate-glitchIn">
      <div className="text-center space-y-2">
        <div className="text-sm opacity-40 animate-pulse">ROOM 2 OF 6</div>
        <h2 className="text-3xl font-bold text-blue-500 animate-glow">🟦 THE BROKEN COUNT</h2>
        <p className="text-sm opacity-60 animate-fadeIn" style={{ animationDelay: '0.3s' }}>Theme: False completeness</p>
      </div>

      <div className="border border-blue-900 bg-blue-950/20 p-12 space-y-8 animate-borderPulse">
        <div className="text-center space-y-6">
          <div className="text-6xl font-mono tracking-widest animate-slideIn">
            1   2   3   4   5
          </div>
          
          <p className="text-xl opacity-80 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            "Enter the missing number."
          </p>

          {showHint && (
            <p className="text-sm opacity-50 italic animate-glitchIn">
              "The sequence is complete only when it is incomplete."
            </p>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 animate-slideUp" style={{ animationDelay: '0.6s' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-black border border-white/20 px-4 py-3 text-white text-center focus:outline-none focus:border-blue-500/40 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 font-mono text-2xl"
          autoComplete="off"
          spellCheck="false"
          autoFocus
        />
        
        {error && (
          <p className="text-blue-400 text-sm text-center animate-shake">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-white/5 border border-white/20 px-6 py-3 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
        >
          SUBMIT
        </button>
      </form>

      <div className="text-xs opacity-30 text-center animate-fadeIn" style={{ animationDelay: '0.9s' }}>
        <p>Most players say nothing is missing. That's the trap.</p>
        <p>The only number that makes the sequence incomplete is one that cannot belong.</p>
      </div>
    </div>
  );
}