import { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addFocusSubject={setCurrentSubject}/>
      ) : (
        <Timer focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  }
});
