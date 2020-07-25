import * as React from 'react';
import { StyleSheet } from 'react-native';
import  {FAB}  from 'react-native-paper';

const CustomFAB = ({icon, onPressFab}) => (
  <FAB
    style={{backgroundColor:"white"}}
    medium
    icon={icon}
    color="black"
    onPress={() => onPressFab()}
    
  />
)


export {CustomFAB}