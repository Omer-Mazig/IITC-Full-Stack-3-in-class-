import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
type CategoryContextType = {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
};

// Create the context with default values
const CategoryContext = createContext<CategoryContextType>({
  selectedCategory: null,
  setSelectedCategory: () => {},
});

// Custom hook to use the category context
export const useCategory = () => useContext(CategoryContext);

// Provider component
type CategoryProviderProps = {
  children: ReactNode;
};

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const value = {
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
