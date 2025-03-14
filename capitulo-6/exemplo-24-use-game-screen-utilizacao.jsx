import React from 'react';
import useGameScreen from './useGameScreen';

const GameContainer = () => {
  const handleScreenChange = (newScreen) => {
    console.log('Screen changed to:', newScreen);
  };

  const initialScreen = 'Home';
  const { screen, changeScreen } = useGameScreen(initialScreen, handleScreenChange);

  return (
    <div>
      <h2>Current Screen: {screen}</h2>
      <button onClick={() => changeScreen('Home')}>Go to Home</button>
      <button onClick={() => changeScreen('Play')}>Go to Play</button>
      <button onClick={() => changeScreen('Settings')}>Go to Settings</button>
    </div>
  );
};

export default GameContainer;