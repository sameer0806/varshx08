
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-pink-200 dark:border-pink-700 hover:bg-pink-50 dark:hover:bg-pink-900/20"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 text-pink-600 dark:text-pink-400" />
      ) : (
        <Sun className="h-4 w-4 text-pink-600 dark:text-pink-400" />
      )}
    </Button>
  );
};
