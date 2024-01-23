import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { usePageContext } from '../../PageProvider';
const GenderSelection = ({ selectedGender, onGenderChange }) => {
   // State to store selected gender
  const {darkMood}=usePageContext();
return (
    <View style={styles.container}>
        <Picker
        selectedValue={selectedGender}
        onValueChange={(itemValue) => onGenderChange(itemValue)}
        style={styles.picker}
        >
            <Picker.Item label="Gender" value={1} style={styles.label} />
            <Picker.Item label="Male" value={1} style={styles.label} />
            <Picker.Item label="Female" value={2} style={styles.label} />
        
        </Picker>

    </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    left:10,
    top:5
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    color:'#4cb5f9',
  },

  picker: {
    width: 150,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    
  },
  selectedGender: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default GenderSelection;
