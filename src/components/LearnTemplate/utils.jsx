import { categoryColors } from './categories';

export const getCategoryColorTheme = (category) => {
  const colorClass = categoryColors[category.toLowerCase().replace(/\s+/g, '-')] || 'gray';
  
  const styles = {
    light: {
      backgroundColor: `${colorClass}-100`,
      textColor: `${colorClass}-800`,
    },
    dark: {
      backgroundColor: `${colorClass}-900`,
      textColor: `${colorClass}-100`,
    },
  };

  console.log(`bg-${styles.light.backgroundColor}`, 'some colorrrrr');

  return `bg-${styles.light.backgroundColor} text-${styles.light.textColor} dark:bg-${styles.dark.backgroundColor} dark:text-${styles.dark.textColor}`;
};