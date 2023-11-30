import React, { createContext, useContext, useState } from 'react';

const BudgetContext = createContext();

export const useBudget = () => useContext(BudgetContext);

export const BudgetProvider = ({ children }) => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const addIncome = (amount) => {
    setIncome(income + amount);
  };

  const addExpenses = (amount) => {
    setExpenses(expenses + amount);
  };

  return (
    <BudgetContext.Provider value={{ income, expenses, addIncome, addExpenses }}>
      {children}
    </BudgetContext.Provider>
  );
};
