import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

function HomeScreen() {
  // Month Management
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Sample data for Pie Chart & List
  const data = [
    { key: 'Loan', value: 51, color: '#FF0000' },
    { key: 'Groceries', value: 30, color: '#00FF00' },
    { key: 'Entertainment', value: 19, color: '#0000FF' },
  ];

  const incrementMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const decrementMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Month Switcher */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button title="<" onPress={decrementMonth} />
        <Text>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })}, {currentYear}</Text>
        <Button title=">" onPress={incrementMonth} />
      </View>

      {/* Pie Chart */}
      <PieChart
        style={{ height: 200, marginTop: 20 }}
        data={data}
        valueAccessor={({ item }) => item.value}
        padAngle={10}
        outerRadius={'95%'}
      />

      {/* Add Transaction Button */}
      <Button title="ADD TRANSACTION" onPress={() => {}} style={{ marginTop: 20 }} />

      {/* Categories List */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Text>{item.key}</Text>
            <Text>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

export default HomeScreen;
