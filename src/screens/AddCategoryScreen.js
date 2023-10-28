import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

function AddCategoryScreen() {
  const initialCategories = ['Loan', 'Transport', 'Food', 'Education', 'Household', 'Health', 'Gift', 'Workout'];
  const [categories, setCategories] = useState(initialCategories);

  const handleEdit = (category) => {
    const newCategory = prompt(`Edit category "${category}"`, category);
    if (newCategory) {
      const index = categories.indexOf(category);
      if (index !== -1) {
        let updatedCategories = [...categories];
        updatedCategories[index] = newCategory;
        setCategories(updatedCategories);
      }
    }
  };

  const handleDelete = (category) => {
    Alert.alert(
      "Delete Category",
      `Are you sure you want to delete "${category}"?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            const updatedCategories = categories.filter(c => c !== category);
            setCategories(updatedCategories);
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {categories.map(category => (
        <View key={category} style={styles.categoryRow}>
          <Text style={styles.categoryText}>{category}</Text>
          <TouchableOpacity onPress={() => handleEdit(category)} style={styles.editButton}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(category)} style={styles.deleteButton}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  categoryText: {
    flex: 2,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#f44336',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  }
});

export default AddCategoryScreen;
