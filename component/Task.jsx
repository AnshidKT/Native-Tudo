import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={props.Delete}>
        <Image
          style={styles.dltIcon}
          source={require('../imgs/delete-icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    width: 300,
    height: 60,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 15,
    height: 15,
    backgroundColor: 'red',
    opacity: 0.5,
    borderRadius: 3,
    marginRight: 10,
  },
  itemText: {
    maxWidth: '80%',
    color: 'black',
  },
  dltIcon: {
    width: 30,
    height: 30,
    // opacity:0.4
  },
});
