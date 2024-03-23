import { categoryColors } from './categories';



export const getCategoryColorTheme = (category) => {
    const colorClass = categoryColors[category.toLowerCase().replace(/\s+/g, '-')] || 'gray';
    
    return `bg-${colorClass}-100 text-${colorClass}-800 dark:bg-${colorClass}-900 dark:text-${colorClass}-100`;
};
  