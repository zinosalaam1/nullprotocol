import { useState } from 'react';
// import finalImage from 'figma:asset/1a49cb3baae4cf3b9f10e30de216fe42491b7ff7.png';

interface Room6Props {
  answers: string[];
  username: string;
  onRestart: () => void;
}

export function Room6({ answers, username, onRestart }: Room6Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [showHint3, setShowHint3] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [solved, setSolved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const answer = input.trim();

    if (answer === '5') {
      setSolved(true);
      return;
    }

    setAttempts(attempts + 1);

    // Progressive hints based on attempts
    if (attempts === 0) {
      setError('Incorrect. Analyze the pattern.');
      setTimeout(() => setShowHint1(true), 1000);
    } else if (attempts === 1) {
      setError('Look at which answers did NOT solve their rooms.');
      setTimeout(() => setShowHint2(true), 1000);
    } else if (attempts === 2) {
      setError('Reduce the non-solutions to their failures.');
      setTimeout(() => setShowHint3(true), 1000);
    } else {
      setError('Count the letters that remain.');
    }
  };

  if (solved) {
    return (
      <div className="max-w-3xl w-full space-y-8 animate-glitchIn">
        <div className="text-center space-y-2">
          <div className="text-sm opacity-40 animate-pulse">PROTOCOL COMPLETE</div>
          <h2 className="text-3xl font-bold text-red-500 animate-glow">🟥 ESCAPE ACHIEVED</h2>
        </div>

        <div className="border border-red-500 bg-red-950/30 p-12 space-y-8 animate-borderPulse">
          <div className="text-center space-y-6">
            <img 
              src={finalImage} 
              alt="Final Answer" 
              className="w-full max-w-2xl mx-auto animate-fadeIn"
            />
          </div>
        </div>

        <div className="border border-white/20 p-8 text-center space-y-6 animate-slideUp">
          <p className="text-2xl animate-typewriter">Protocol complete, {username}.</p>
          <div className="space-y-3 text-sm opacity-80">
            <p className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              "Most players fail because they:
            </p>
            <p className="animate-fadeIn" style={{ animationDelay: '1s' }}>
              Try to be precise. Try to be clever. Try to be consistent."
            </p>
            <p className="mt-4 italic text-lg animate-fadeIn" style={{ animationDelay: '1.5s' }}>
              "This room requires controlled uncertainty."
            </p>
          </div>

          <div className="pt-6 space-y-3 text-xs opacity-60 border-t border-white/10 animate-fadeIn" style={{ animationDelay: '2s' }}>
            <p>🧠 WHY ONLY ~10% ESCAPE</p>
            <p>This protocol punishes compliance, rewards ambiguity,</p>
            <p>requires rejecting binary logic, and separates meaning from function.</p>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-white/5 border border-white/20 px-6 py-3 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300 animate-fadeIn"
          style={{ animationDelay: '2.5s' }}
        >
          RESTART PROTOCOL
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl w-full space-y-8 animate-glitchIn">
      <div className="text-center space-y-2">
        <div className="text-sm opacity-40 animate-pulse">ROOM 6 OF 6</div>
        <h2 className="text-3xl font-bold text-red-500 animate-glow">🟥 THE FINAL FILTER</h2>
        <p className="text-sm opacity-60">Theme: Elimination by misuse</p>
      </div>

      <div className="border border-red-900 bg-red-950/20 p-8 md:p-12 space-y-8 animate-borderPulse">
        <div className="space-y-6">
          <p className="text-xl text-center animate-fadeIn">Your answers:</p>
          
          <div className="flex flex-col items-center gap-3 font-mono text-2xl md:text-3xl">
            {answers.map((answer, index) => (
              <div 
                key={index} 
                className="opacity-80 animate-slideIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {answer}
              </div>
            ))}
          </div>

          <p className="text-center text-sm opacity-60 mt-8 animate-pulse" style={{ animationDelay: '1.5s' }}>
            "Only answers that did NOT solve their room may pass."
          </p>

          {showHint1 && (
            <div className="space-y-3 border-t border-red-800/50 pt-6 mt-6 animate-glitchIn">
              <p className="text-sm opacity-80 text-center">↓ Analysis ↓</p>
              <div className="space-y-2 text-xs md:text-sm opacity-60 font-mono">
                <div className="animate-slideIn" style={{ animationDelay: '0.1s' }}>• Room 1 → OK solved consent paradox ✔️</div>
                <div className="animate-slideIn" style={{ animationDelay: '0.2s' }}>• Room 2 → 0 breaks completeness ✔️</div>
                <div className="animate-slideIn text-red-400" style={{ animationDelay: '0.3s' }}>• Room 3 → RAIN is debatable ❌</div>
                <div className="animate-slideIn" style={{ animationDelay: '0.4s' }}>• Room 4 → NULL avoids paradox ✔️</div>
                <div className="animate-slideIn text-red-400" style={{ animationDelay: '0.5s' }}>• Room 5 → AFTS is mechanically correct but meaningless ❌</div>
              </div>
            </div>
          )}

          {showHint2 && (
            <div className="space-y-3 border-t border-red-800/50 pt-6 mt-6 animate-glitchIn">
              <p className="text-sm opacity-80 text-center">↓ Non-solutions identified ↓</p>
              <div className="text-center space-y-2">
                <div className="text-xl font-mono text-red-400 animate-pulse">RAIN, AFTS</div>
              </div>
            </div>
          )}

          {showHint3 && (
            <div className="space-y-4 border-t border-red-800/50 pt-6 mt-6 animate-glitchIn">
              <p className="text-sm opacity-80 text-center italic">"Reduce them to their failures."</p>
              <div className="space-y-2 text-xs md:text-sm opacity-70 font-mono">
                <div className="animate-slideIn" style={{ animationDelay: '0.2s' }}>
                  RAIN → removes substance → <span className="text-blue-400">DRY</span>
                </div>
                <div className="animate-slideIn" style={{ animationDelay: '0.4s' }}>
                  AFTS → reverse direction → STFA → remove order → <span className="text-orange-400">SF</span>
                </div>
              </div>
              <p className="text-sm opacity-80 text-center mt-4 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                "Count what remains."
              </p>
              <div className="text-center text-sm opacity-60 font-mono animate-fadeIn" style={{ animationDelay: '1s' }}>
                Letters: D R Y S F → ?
              </div>
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 animate-slideUp">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter final answer..."
          className="w-full bg-black border border-white/20 px-4 py-3 text-white text-center focus:outline-none focus:border-red-500/60 focus:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300 text-2xl font-mono"
          autoComplete="off"
          spellCheck="false"
          autoFocus
        />
        
        {error && (
          <p className="text-red-400 text-sm text-center animate-shake">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-white/5 border border-white/20 px-6 py-3 hover:bg-red-950/30 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
        >
          SUBMIT FINAL ANSWER
        </button>

        {attempts > 0 && (
          <p className="text-xs opacity-40 text-center animate-pulse">
            Attempts: {attempts}/∞
          </p>
        )}
      </form>

      <div className="text-xs opacity-30 text-center animate-fadeIn" style={{ animationDelay: '2s' }}>
        <p>The system shows your answers.</p>
        <p>But which answers actually solved their rooms?</p>
      </div>
    </div>
  );
}
