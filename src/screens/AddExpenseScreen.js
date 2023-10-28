import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Modal, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function AddExpenseScreen() {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [category, setCategory] = useState('Loan'); // Default
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const categories = ['Loan', 'Groceries', 'Entertainment', 'Transport'];

  const handleSave = () => {
    if (!amount || !category) {
      Alert.alert('Error', 'Please ensure amount and category are selected.');
      return;
    }

    console.log({
      amount,
      note,
      date: selectedDate,
      category
    });

    Alert.alert('Success', 'Expense saved!');

    setAmount('');
    setNote('');
    setSelectedDate(new Date());
    setCategory('Loan');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Amount Input */}
      <TextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Amount"
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />

      {/* Categories - Modal */}
      <TouchableOpacity onPress={() => setShowCategoryModal(true)}>
        <Text style={{ borderBottomWidth: 1, marginBottom: 20, paddingVertical: 10 }}>{category}</Text>
      </TouchableOpacity>

      <Modal
        visible={showCategoryModal}
        transparent={true}
        animationType="slide"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '80%', backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            {categories.map(cat => (
              <Button 
                key={cat}
                title={cat}
                onPress={() => {
                  setCategory(cat);
                  setShowCategoryModal(false);
                }}
              />
            ))}
          </View>
        </View>
      </Modal>

      {/* Date Picker */}
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={{ borderBottomWidth: 1, marginBottom: 20, paddingVertical: 10 }}>{selectedDate.toDateString()}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode='date'
          display='default'
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setSelectedDate(selectedDate);
          }}
        />
      )}

      {/* Note Input */}
      <TextInput
        value={note}
        onChangeText={setNote}
        placeholder="Note"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />

      <Button title="SAVE" onPress={handleSave} />
    </View>
  );
}

export default AddExpenseScreen;
