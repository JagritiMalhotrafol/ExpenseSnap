import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { VictoryPie } from "victory-native";
import { useRoute } from '@react-navigation/native';

const BudgetScreen = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    // Load saved budgets from storage
    const savedBudgets = [
      { category: "Food", budget: 300, spent: 200 },
      { category: "Rent", budget: 1000, spent: 900 },
      { category: "Utilities", budget: 200, spent: 150 },
    ];
    setBudgets(savedBudgets);
  }, []);

  const route = useRoute(); 
  const { income, expenses } = route.params || { income: 0, expenses: 0 };

  const addBudget = (category, budget) => {
   
    const newBudget = { category, budget, spent: 0 };
    setBudgets([...budgets, newBudget]);
  };

  const deleteBudget = (index) => {
    
    const newBudgets = [...budgets];
    newBudgets.splice(index, 1);
    setBudgets(newBudgets);
  };

  const updateBudget = (index, budget) => {
    
    const newBudgets = [...budgets];
    newBudgets[index] = { ...newBudgets[index], ...budget };
    setBudgets(newBudgets);
  };

  const getTotalBudget = () => {
    
    return budgets.reduce((total, budget) => total + budget.budget, 0);
  };

  const getTotalSpent = () => {
    
    return budgets.reduce((total, budget) => total + budget.spent, 0);
  };

  const getCategoryData = () => {
    
    return budgets.map((budget) => ({
      x: budget.category,
      y: budget.spent,
      label: `$${budget.spent} / $${budget.budget}`,
    }));
  };

  return (
    <View>
      <Text>Total budget: ${getTotalBudget()}</Text>
      <Text>Total spent: ${getTotalSpent()}</Text>
      <VictoryPie data={getCategoryData()} />
    </View>
  );
};

export default BudgetScreen;
