import React, { useState } from 'react';
import { Landing } from './pages/Landing';
import { GoalSelect } from './pages/GoalSelect';
import { Results } from './pages/Results';

export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleStart = () => {
    setCurrentView('goals');
  };

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
    setCurrentView('results');
  };

  const handleBackToGoals = () => {
    setSelectedGoal(null);
    setCurrentView('goals');
  };

  const handleHome = () => {
    setSelectedGoal(null);
    setCurrentView('landing');
  };

  if (currentView === 'landing') {
    return <Landing onStart={handleStart} onHome={handleHome} />;
  }

  if (currentView === 'goals') {
    return <GoalSelect onSelectGoal={handleSelectGoal} onHome={handleHome} />;
  }

  if (currentView === 'results') {
    return <Results goal={selectedGoal} onBack={handleBackToGoals} onHome={handleHome} />;
  }

  return null;
}
