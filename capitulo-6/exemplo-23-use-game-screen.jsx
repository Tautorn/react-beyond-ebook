import { useState, useEffect } from 'react';

// Hook personalizado para gerenciar o estado da tela do jogo
const useGameScreen = (initialScreen, onChange) => {
  const [screen, setScreen] = useState(initialScreen);

  useEffect(() => {
    if (onChange) {
      onChange(screen);
    }
  }, [screen, onChange]);

  const changeScreen = (newScreen) => {
    setScreen(newScreen);
  };

  return {
    screen,
    changeScreen,
  };
};

export default useGameScreen;