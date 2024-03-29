import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
    const navigation = useNavigation();
  
    const RoomInformation = () => {
      navigation.navigate('RoomInformation');
    };
  
    const EmergencyInformation = () => {
      navigation.navigate('EmergencyInformation');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
  
        {/* Option 1: Room Information */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Room Information</Text>
          <Image
            source={require('./assets/camera2.png')}
            style={styles.image}
          />
          <Button title="View Room Information" onPress={RoomInformation} />
        </View>
  
        {/* Option 2: Emergency Information */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Emergency Information</Text>
          <Image
            source={require('./assets/usernameicon.png')}
            style={styles.image}
          />
          <Button
            title="View Emergency Information"
            onPress={EmergencyInformation}
          />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFA500', // orange background color
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#fff', // White text color
      marginBottom: 20,
    },
    optionContainer: {
      marginTop: 20,
      alignItems: 'center',
      backgroundColor: '#800080', // purple background color
      padding: 20,
      borderRadius: 10,
    },
    optionText: {
      fontSize: 18,
      marginBottom: 10,
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 10,
    },
  });
  
  export default Dashboard;