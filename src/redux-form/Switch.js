import React from 'react';
import { FormLabel } from 'react-native-elements';
import { View, Switch, StyleSheet } from 'react-native';

export default ({
  input: { value, checked, onChange },
  label,
  meta: { touched, error, warning }
}) => {
  return (
    <View style={styles.container}>
      <Switch value={value? true: false} onValueChange={() => onChange(value? false: true)}/>
      <FormLabel labelStyle={styles.label}>{error ? `${label} *` : label}</FormLabel>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: 13,
    marginBottom: 15,
    alignSelf: 'center',
    fontWeight: 'normal'
  }
})
