import { useState, useEffect } from 'react';

interface Room3Props {
  onComplete: (answer: string) => void;
}

export function Room3({ onComplete }: Room3Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [showItems, setShowItems] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowItems(false);
      setTimeout(() => setShowPrompt(true), 500);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const answer = input.trim().toUpperCase();

    if (answer === 'CAT') {
      setError('Objects are meant to be remembered.');
      return;
    }

    if (answer === 'GLASS') {
      setError('Objects are meant to be remembered.');
      return;
    }

    if (answer === '7') {
      setError('Numbers are meant to be remembered.');
      return;
    }

    if (answer === 'RAIN') {
      onComplete('RAIN');
      return;
    }

    setError('Incorrect.');
  };

  return (
    <div className="max-w-2xl w-full space-y-8 animate-glitchIn">
      <div className="text-center space-y-2">
        <div className="text-sm opacity-40 animate-pulse">ROOM 3 OF 6</div>
        <h2 className="text-3xl font-bold text-green-500 animate-glow">🟩 THE MEMORY POISON</h2>
        <p className="text-sm opacity-60 animate-fadeIn" style={{ animationDelay: '0.3s' }}>Theme: Retroactive corruption</p>
      </div>

      <div className="border border-green-900 bg-green-950/20 p-12 space-y-8 min-h-[300px] flex flex-col justify-center animate-borderPulse">
        {showItems ? (
          <div className="text-center space-y-6 animate-glitchIn">
            <div className="text-4xl md:text-5xl font-mono tracking-widest flex flex-wrap justify-center gap-4 md:gap-8">
              <span className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>CAT</span>
              <span className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>GLASS</span>
              <span className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>7</span>
              <span className="animate-fadeIn" style={{ animationDelay: '0.8s' }}>RAIN</span>
            </div>
            <p className="text-xs opacity-40 animate-pulse">Memorize carefully...</p>
          </div>
        ) : showPrompt ? (
          <div className="text-center space-y-4 animate-glitchIn">
            <p className="text-xl">
              "Enter the item that should not be remembered."
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-sm opacity-40 animate-flicker">...</p>
          </div>
        )}
      </div>

      {showPrompt && (
        <form onSubmit={handleSubmit} className="space-y-4 animate-slideUp">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-black border border-white/20 px-4 py-3 text-white text-center focus:outline-none focus:border-green-500/40 focus:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300 uppercase"
            autoComplete="off"
            spellCheck="false"
            autoFocus
          />
          
          {error && (
            <p className="text-green-400 text-sm text-center animate-shake">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-white/5 border border-white/20 px-6 py-3 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300"
          >
            SUBMIT
          </button>
        </form>
      )}

      <div className="text-xs opacity-30 text-center animate-fadeIn" style={{ animationDelay: '1.2s' }}>
        <p>You are not asked what doesn't belong.</p>
        <p>You are asked what should not be remembered.</p>
      </div>
    </div>
  );
}