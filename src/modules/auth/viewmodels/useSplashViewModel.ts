import { useCallback } from 'react';

export const useSplashViewModel = (onAnimationComplete: () => void) => {
  const handleAnimationComplete = useCallback(() => {
    onAnimationComplete();
  }, [onAnimationComplete]);

  return {
    handleAnimationComplete,
  };
};