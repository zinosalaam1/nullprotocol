import { useState } from 'react';

interface Room5Props {
  onComplete: (answer: string) => void;
}

export function Room5({ onComplete }: Room5Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const answer = input.trim().toUpperCase();

    if (answer === 'SLOW') {
      setError('Speed determines direction, not semantics.');
      setAttempts(attempts + 1);
      return;
    }

    if (answer === 'FAST') {
      setError('Cannot map to itself.');
      setAttempts(attempts + 1);
      return;
    }

    if (answer === 'AFTS') {
      onComplete('AFTS');
      return;
    }

    setError('Think directionally, not semantically.');
    setAttempts(attempts + 1);
  };

  return (
    <div className="max-w-2xl w-full space-y-8 animate-glitchIn">
      <div className="text-center space-y-2">
        <div className="text-sm opacity-40 animate-pulse">ROOM 5 OF 6</div>
        <h2 className="text-3xl font-bold text-orange-500 animate-glow">🟧 THE DELAYED MEANING</h2>
        <p className="text-sm opacity-60 animate-fadeIn" style={{ animationDelay: '0.3s' }}>Theme: Temporal misdirection</p>
      </div>

      <div className="border border-orange-900 bg-orange-950/20 p-12 space-y-8 animate-borderPulse">
        <div className="text-center space-y-8">
          <div className="text-3xl md:text-4xl font-mono space-y-4">
            <div className="flex items-center justify-center gap-4 md:gap-8 animate-slideIn" style={{ animationDelay: '0.2s' }}>
              <span>NOW</span>
              <span className="text-2xl opacity-50">→</span>
              <span>LATER</span>
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-8 animate-slideIn" style={{ animationDelay: '0.4s' }}>
              <span>FAST</span>
              <span className="text-2xl opacity-50">→</span>
              <span className="text-orange-400 animate-pulse">?</span>
            </div>
          </div>

          <p className="text-xl italic animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            "Speed determines direction."
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 animate-slideUp" style={{ animationDelay: '0.8s' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-black border border-white/20 px-4 py-3 text-white text-center focus:outline-none focus:border-orange-500/40 focus:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300 uppercase font-mono text-xl"
          autoComplete="off"
          spellCheck="false"
          autoFocus
        />
        
        {error && (
          <p className="text-orange-400 text-sm text-center animate-shake">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-white/5 border border-white/20 px-6 py-3 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
        >
          SUBMIT
        </button>
      </form>

      <div className="text-xs opacity-30 text-center animate-fadeIn" style={{ animationDelay: '1s' }}>
        <p>NOW → LATER is forward in time</p>
        <p>So FAST → should preserve forward reading</p>
      </div>
    </div>
  );
}