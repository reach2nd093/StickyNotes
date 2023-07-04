import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import CustomButton from "./components/CustomButton";

import HomeScreen from './screens/HomeScreen';
import AllNotesScreen from "./screens/AllNotesScreen";
import AddNote from "./screens/AddNote";

import { ScreenTypes } from './constants/constants';

export default function App() {
  const {HOME, ADD_NOTE, ALL_NOTES} = ScreenTypes;
  const [screen, setScreen] = useState(HOME);
  const [allNotes, setAllNotes] = useState([]);

  const handleAddNote = (data) => {
    setAllNotes(() => [...allNotes, {...data}]);
    setScreen(ALL_NOTES);
  }

  // screen rendering based on screen state
  let content;
  if(screen === ALL_NOTES) {
    content = <AllNotesScreen notes={allNotes} onExit={(data) => setScreen(data) }/>
  }
  else if (screen === ADD_NOTE) {
    content = <AddNote onSave={(data) => handleAddNote(data)}/>
  } else if (screen === HOME) {
    content = <HomeScreen onExit={(data) => setScreen(data)}/>
  }

  return (
    <View style={styles.container}>
      <Header />
      {content}
      {screen !== HOME && (
        <CustomButton 
          onButtonClick={(data) => setScreen(data)}
          color="#17487A"
          text="BACK"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23D5EA',
  },
});
