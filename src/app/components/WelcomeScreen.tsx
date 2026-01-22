import { useState } from 'react';

interface WelcomeScreenProps {
  onSubmit: (username: string) => void;
}

export function WelcomeScreen({ onSubmit }: WelcomeScreenProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) {
      setError('Input required.');
      setAttempts(attempts + 1);
      return;
    }

    // The trick: the input field is labeled "USERNAME" but you shouldn't type "USERNAME"
    // Most will fail by typing their actual username
    // The meta-trick: any input that shows understanding of the paradox works
    if (input.toUpperCase() === 'USERNAME') {
      setError('Do not comply with labels.');
      setAttempts(attempts + 1);
      return;
    }

    // Accept the input after showing resistance
    if (attempts >= 2) {
      onSubmit(input);
    } else {
      setError('Unauthorized entry detected.');
      setAttempts(attempts + 1);
    }
  };

  return (
    <div className="max-w-2xl w-full space-y-8 animate-fadeIn">
      <div className="text-center space-y-4">
        <div className="text-sm opacity-40 tracking-widest animate-pulse">🕳️ TOUR ARCADE PRESENTS</div>
        <h1 className="text-5xl font-bold tracking-tight animate-glow">THE NULL PROTOCOL</h1>
        <div className="space-y-2 text-sm opacity-60">
          <p className="animate-slideIn" style={{ animationDelay: '0.2s' }}>Estimated pass rate: ~10%</p>
          <p className="animate-slideIn" style={{ animationDelay: '0.4s' }}>Difficulty: Extreme</p>
          <p className="animate-slideIn" style={{ animationDelay: '0.6s' }}>Style: Silent, logical, meta-cognitive</p>
        </div>
      </div>

      <div className="border border-red-900 bg-red-950/20 p-8 space-y-6 animate-borderPulse">
        <p className="text-center italic text-lg animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          "The system does not reward intelligence.<br />
          It rewards restraint."
        </p>
        
        <div className="space-y-4">
          <p className="text-sm opacity-70 text-center animate-fadeIn" style={{ animationDelay: '1s' }}>
            There are 6 rooms. Each room gives you information<br />
            you are not meant to fully use.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 animate-slideUp" style={{ animationDelay: '1.2s' }}>
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm opacity-60">
            USERNAME
          </label>
          <input
            id="username"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white/40 focus:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
            autoComplete="off"
            spellCheck="false"
          />
          {error && (
            <p className="text-red-500 text-sm animate-shake">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-white/5 border border-white/20 px-6 py-3 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
        >
          PROCEED
        </button>

        {attempts > 0 && (
          <p className="text-xs opacity-40 text-center animate-pulse">
            Attempts: {attempts}
          </p>
        )}
      </form>

      <div className="text-xs opacity-30 text-center space-y-1 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
        <p>Do you proceed as instructed?</p>
        <p>Or do you question the instruction itself?</p>
      </div>
    </div>
  );
}