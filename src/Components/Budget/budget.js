import React from "react";
import { View, Text } from "react-native";
import { VictoryPie } from "victory-native";
import { useBudget } from "./../GlobalContext/BudgetContext"; // Import useBudget

const BudgetScreen = () => {
  const { income, expenses } = useBudget(); // Use the context

  // Function to map budget data to pie chart format
  const getCategoryData = () => {
    // Only income and expenses data
    return [
      { x: "Income", y: income },
      { x: "Expenses", y: expenses },
    ];
  };

  return (
    <View>
      <Text>Total Income: ${income.toFixed(2)}</Text>
      <Text>Total Expenses: ${expenses.toFixed(2)}</Text>
      <VictoryPie data={getCategoryData()} />
    </View>
  );
};

export default BudgetScreen;
