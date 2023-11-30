import React, { useState } from "react";
import { Text, View, ScrollView, TextInput, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useBudget } from "./../GlobalContext/BudgetContext";
import styles from "./style";

const DashboardScreen = () => {
  // const [income, setIncome] = useState(0);
  // const [expenses, setExpenses] = useState(0);
  const [tempIncome, setTempIncome] = useState('');
  const [tempExpenses, setTempExpenses] = useState('');
  const navigation = useNavigation(); 
  const { income, expenses, addIncome, addExpenses } = useBudget();

  const savings = income - expenses;

  const handleAddIncome = (text) => {
    if (/^\d*\.?\d*$/.test(text)) { 
      setTempIncome(text);
    }
  };

  const onAddIncomePress = () => {
    const updatedIncome = parseFloat(tempIncome);
    if (!isNaN(updatedIncome)) {
      // setIncome(income + updatedIncome);
      addIncome(updatedIncome);
    }
    setTempIncome(''); 
  };

  const handleAddExpenses = (text) => {
    if (/^\d*\.?\d*$/.test(text)) { 
      setTempExpenses(text);
    }
  };

  const onAddExpensesPress = () => {
    const updatedExpenses = parseFloat(tempExpenses);
    if (!isNaN(updatedExpenses)) {
      // setExpenses(expenses + updatedExpenses);
      addExpenses(updatedExpenses); 
    }
    setTempExpenses(''); 
  };

  const navigateToBudget = () => {
    // navigation.navigate('Budget', { income, expenses });
    navigation.navigate('Budget');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Income</Text>
        <TextInput
          style={styles.input}
          value={tempIncome}
          onChangeText={handleAddIncome}
          placeholder="Add income"
          keyboardType="numeric"
        />
        <Button title="Add" onPress={onAddIncomePress} />
        <Text style={styles.amount}>${income.toFixed(2)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Expenses</Text>
        <TextInput
          style={styles.input}
          value={tempExpenses}
          onChangeText={handleAddExpenses}
          placeholder="Add expenses"
          keyboardType="numeric"
        />
        <Button title="Add" onPress={onAddExpensesPress} />
        <Text style={styles.amount}>-${expenses.toFixed(2)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Savings</Text>
        <Text style={styles.amount}>${savings.toFixed(2)}</Text>
      </View>

      <Button title="Save to Budget" onPress={navigateToBudget} />

    </ScrollView>
  );
};

export default DashboardScreen;
