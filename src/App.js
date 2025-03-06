import React, { useState } from 'react';
import './App.css';

const LearningApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [coins, setCoins] = useState(150);
  const [xp, setXp] = useState(45);
  const [streakDays, setStreakDays] = useState(3);
  
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <header className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Brain Boost Academy</h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full">
              <span className="text-yellow-500">⭐</span>
              <span className="font-medium">{coins}</span>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                <span className="text-purple-500">⚡</span>
                <span className="font-medium">Level {level}</span>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-purple-600 h-1.5 rounded-full" 
                  style={{ width: `${xp}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center gap-1 bg-red-100 px-3 py-1 rounded-full">
              <span className="text-red-500">🔥</span>
              <span className="font-medium">{streakDays} days</span>
            </div>
          </div>
        </div>
      </header>
      
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-3 mb-4 bg-white rounded-lg shadow-sm">
          <button 
            className={`flex items-center justify-center gap-2 py-3 px-4 ${activeTab === 'home' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveTab('home')}
          >
            <span>📚</span>
            <span>Home</span>
          </button>
          <button 
            className={`flex items-center justify-center gap-2 py-3 px-4 ${activeTab === 'mathquest' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveTab('mathquest')}
          >
            <span>🏆</span>
            <span>MathQuest</span>
          </button>
          <button 
            className={`flex items-center justify-center gap-2 py-3 px-4 ${activeTab === 'arcade' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}
            onClick={() => setActiveTab('arcade')}
          >
            <span>🎮</span>
            <span>Arcade</span>
          </button>
        </div>
        
        {activeTab === 'home' && <HomePage setActiveTab={setActiveTab} />}
        {activeTab === 'mathquest' && <MathQuestPage setScore={setScore} setLevel={setLevel} setCoins={setCoins} setXp={setXp} />}
        {activeTab === 'arcade' && <ArcadePage setCoins={setCoins} setXp={setXp} />}
      </div>
    </div>
  );
};

const HomePage = ({ setActiveTab }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Daily Quests</h2>
          <p className="text-gray-600">Complete quests to earn XP and coins!</p>
        </div>
        <div className="p-4 space-y-4">
          <div className="border rounded-lg p-4 bg-blue-50 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <span className="text-blue-600">🏆</span>
              </div>
              <div>
                <h3 className="font-semibold">Complete 3 math challenges</h3>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <div className="w-24 bg-gray-200 rounded-full h-1.5 mt-1">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '66%' }}></div>
                  </div>
                  <span>2/3</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-xs bg-purple-100 px-2 py-1 rounded-full">
                <span className="text-purple-600">⚡</span>
                <span>+15 XP</span>
              </div>
              <div className="flex items-center gap-1 text-xs bg-yellow-100 px-2 py-1 rounded-full">
                <span className="text-yellow-500">⭐</span>
                <span>+25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b bg-blue-50">
            <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
              <span>🏆</span>
              <span>MathQuest</span>
            </h2>
          </div>
          <div className="p-4 space-y-4">
            <p className="text-gray-700">
              Challenge yourself with math problems and earn rewards!
            </p>
            <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
              <div>
                <p className="font-medium">Current Level: 1</p>
                <p className="text-sm text-gray-600">Difficulty: Beginner</p>
              </div>
              <button 
                onClick={() => setActiveTab('mathquest')}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Play
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b bg-purple-50">
            <h2 className="text-xl font-semibold text-purple-700 flex items-center gap-2">
              <span>🎮</span>
              <span>Arcade</span>
            </h2>
          </div>
          <div className="p-4 space-y-4">
            <p className="text-gray-700">
              Play fun educational games while mastering concepts!
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="border rounded p-2 text-center cursor-pointer hover:bg-purple-50">
                <div className="text-xl mb-1">🧮</div>
                <p className="text-sm font-medium">Number Block</p>
              </div>
              <div className="border rounded p-2 text-center cursor-pointer hover:bg-purple-50">
                <div className="text-xl mb-1">🧠</div>
                <p className="text-sm font-medium">Memory Match</p>
              </div>
              <div className="border rounded p-2 text-center cursor-pointer hover:bg-purple-50">
                <div className="text-xl mb-1">🏃</div>
                <p className="text-sm font-medium">Math Dash</p>
              </div>
            </div>
            <button 
              onClick={() => setActiveTab('arcade')}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Go to Arcade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MathQuestPage = ({ setScore, setLevel, setCoins, setXp }) => {
  const [questLevel, setQuestLevel] = useState(1);
  const [progress, setProgress] = useState(30);
  const [gameMode, setGameMode] = useState("quest");
  const [levelCategory, setLevelCategory] = useState("beginner");
  const [currentProblem, setCurrentProblem] = useState({
    question: "Solve for x: 2x + 5 = 15",
    options: ["x = 5", "x = 10", "x = 15", "x = 7.5"],
    correctAnswer: "x = 5"
  });
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  
  const handleAnswer = (option) => {
    setUserAnswer(option);
    setAnswered(true);
    
    if (option === currentProblem.correctAnswer) {
      // Update game stats
      setProgress(prev => Math.min(prev + 20, 100));
      setScore(prev => prev + 10);
      setCoins(prev => prev + 5);
      setXp(prev => (prev + 15) % 100);
      
      if (progress + 20 >= 100) {
        setQuestLevel(prev => prev + 1);
        setProgress(0);
        setLevel(prev => prev + 1);
      }
    }
  };
  
  const nextProblem = () => {
    setAnswered(false);
    setUserAnswer("");
    setShowSolution(false);
    
    // Simulate getting a new problem (in a real app, you'd have more problems)
    const problems = [
      {
        question: "Solve for x: 2x + 5 = 15",
        options: ["x = 5", "x = 10", "x = 15", "x = 7.5"],
        correctAnswer: "x = 5"
      },
      {
        question: "Solve for x: 4x - 3 = 9",
        options: ["x = 3", "x = 6", "x = 2", "x = 3.5"],
        correctAnswer: "x = 3"
      },
      {
        question: "If x + 2 = 7, what is the value of x?",
        options: ["x = 5", "x = 9", "x = 3", "x = 4"],
        correctAnswer: "x = 5"
      }
    ];
    
    const newProblem = problems[Math.floor(Math.random() * problems.length)];
    setCurrentProblem(newProblem);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b bg-blue-50">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-blue-700">MathQuest</h2>
          
          <div className="flex gap-2">
            <div className="border rounded px-2 py-1 bg-white">
              <select 
                className="outline-none text-sm"
                value={gameMode}
                onChange={(e) => setGameMode(e.target.value)}
              >
                <option value="quest">Quest Mode</option>
                <option value="practice">Practice Mode</option>
              </select>
            </div>
            
            {gameMode === "practice" && (
              <div className="border rounded px-2 py-1 bg-white">
                <select 
                  className="outline-none text-sm"
                  value={levelCategory}
                  onChange={(e) => setLevelCategory(e.target.value)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-sm text-gray-600">Level: {questLevel}</p>
            <p className="text-xs text-gray-500">Difficulty: {levelCategory}</p>
          </div>
          
          {gameMode === "quest" && (
            <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-lg">{currentProblem.question}</h3>
            
            <div className="mt-4 space-y-3">
              {currentProblem.options.map(option => (
                <button
                  key={option}
                  className={`w-full text-left p-3 rounded-md border transition-colors
                    ${!answered ? 'hover:bg-blue-50' : ''}
                    ${answered && option === currentProblem.correctAnswer ? 'bg-green-100 border-green-500' : ''}
                    ${answered && option === userAnswer && option !== currentProblem.correctAnswer ? 'bg-red-100 border-red-500' : ''}
                    ${!answered ? 'bg-white' : option !== userAnswer && option !== currentProblem.correctAnswer ? 'bg-gray-50 text-gray-500' : ''}
                  `}
                  onClick={() => !answered && handleAnswer(option)}
                  disabled={answered}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          {answered && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-lg">
                {userAnswer === currentProblem.correctAnswer ? 
                  "✅ Correct! Great job!" : 
                  "❌ Not quite right. Try again!"}
              </h3>
              
              {showSolution && (
                <div className="mt-4">
                  <h4 className="font-medium">Solution:</h4>
                  <ol className="mt-2 space-y-2 list-decimal list-inside">
                    <li className="text-gray-700">Start with the equation: 2x + 5 = 15</li>
                    <li className="text-gray-700">Subtract 5 from both sides: 2x = 10</li>
                    <li className="text-gray-700">Divide both sides by 2: x = 5</li>
                  </ol>
                </div>
              )}
            </div>
          )}
          
          {answered && !showSolution && (
            <div className="flex justify-center">
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setShowSolution(true)}
              >
                View Solution
              </button>
            </div>
          )}
          
          {answered && (
            <div className="flex justify-center">
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={nextProblem}
              >
                Next Problem
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ArcadePage = ({ setCoins, setXp }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b bg-purple-50">
          <h2 className="text-xl font-semibold text-purple-700">Learning Arcade</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-5xl">🧮</div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Number Blocks</h3>
                <p className="text-sm text-gray-600 mt-1">Stack blocks with matching numbers and solve equations to clear rows!</p>
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐⭐⭐☆☆</span>
                  </div>
                  <button 
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                    onClick={() => {
                      setCoins(prev => prev + 10);
                      setXp(prev => (prev + 15) % 100);
                      alert("Number Blocks game would launch here!");
                    }}
                  >
                    Play
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-5xl">🎮</div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Equation Runner</h3>
                <p className="text-sm text-gray-600 mt-1">Solve math problems to make your character jump and avoid obstacles!</p>
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐⭐☆☆☆</span>
                  </div>
                  <button 
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                    onClick={() => {
                      setCoins(prev => prev + 10);
                      setXp(prev => (prev + 15) % 100);
                      alert("Equation Runner game would launch here!");
                    }}
                  >
                    Play
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <div className="text-5xl">🧠</div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Memory Match</h3>
                <p className="text-sm text-gray-600 mt-1">Match equivalent expressions and build your memory skills!</p>
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
                  </div>
                  <button 
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                    onClick={() => {
                      setCoins(prev => prev + 10);
                      setXp(prev => (prev + 15) % 100);
                      alert("Memory Match game would launch here!");
                    }}
                  >
                    Play
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Number Blocks Game Preview</h2>
            <div className="border-2 border-dashed border-purple-300 rounded-lg p-4 bg-purple-50 text-center py-12">
              <div className="text-6xl mb-4">🧮</div>
              <h3 className="text-xl font-bold">Ready to Play?</h3>
              <p className="text-gray-600 mt-2 mb-4">Stack blocks and solve math problems to earn points!</p>
              <button 
                className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700"
                onClick={() => {
                  setCoins(prev => prev + 20);
                  setXp(prev => (prev + 25) % 100);
                  alert("Full Number Blocks game would launch here! In the complete version, you'd stack falling number blocks like Tetris, and need to solve math problems to earn power-ups or clear rows.");
                }}
              >
                Start Game
              </button>
              <p className="mt-4 text-purple-600 text-sm">
                Stack blocks with matching numbers to clear them!<br/>
                Answer math questions correctly to earn bonus points!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
