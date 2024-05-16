import classNames from 'classnames';
import { categoryColors } from './categories';

export const getCategoryColorTheme = (category) => {
  const colorClass = categoryColors[category.toLowerCase().replace(/\s+/g, '-')] || 'blue';
  const styles = {
    light: {
      backgroundColor: `bg-${colorClass}-100`,
      textColor: `text-${colorClass}-800`,
    },
    dark: {
      backgroundColor: `bg-${colorClass}-900`,
      textColor: `text-${colorClass}-100`,
    },
  };


  return classNames(
    styles.light.backgroundColor,
    styles.light.textColor,
  );
};
