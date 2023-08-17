import {
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Task from './component/Task';

const App = () => {
  const [task, setTask] = useState('');
  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task.trim() !== '') {
      setTaskItem([...taskItem, task]);
      setTask('');
    }
  };

  const removeBtn = index => {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.todotext}>My Todo</Text>
      <View>
        {taskItem.map((item, index) => {
          return (
            <TouchableOpacity key={index}>
              <Task text={item} Delete={() => removeBtn(index)} />
            </TouchableOpacity>
          );
        })}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={styles.taskWrapp}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapp}>
            <Text style={styles.plusbtn}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'lightblue',
  },
  todotext: {
    fontSize: 25,
    fontWeight: '600',
    fontStyle: 'italic',
    color: 'black',

    marginTop: 40,
  },

  taskWrapp: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    // backgroundColor:'red'
  },
  input: {
    backgroundColor: '#fff',
    width: 250,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  addWrapp: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  plusbtn: {
    textAlign: 'center',
  },
});
