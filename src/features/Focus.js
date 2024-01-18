import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput} from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';

export const Focus = ({addFocusSubject}) => {
  const [input, setInput] = useState('');
  console.log(input);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setInput}
          label="What would you like to focus on?" />
          <View style={styles.button}>
            <RoundedButton  title="+" size={50} onPress={() => addFocusSubject(input)}/>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
