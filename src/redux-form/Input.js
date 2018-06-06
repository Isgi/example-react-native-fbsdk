import React from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

export default ({
  input,
  label,
  light,
  secureTextEntry,
  keyboardType,
  onSubmit,
  onChange,
  getRef,
  disabled,
  autoFocus,
  returnKeyType,
  autoCapitalize,
  meta: { touched, error, warning }
}) => {
  return (
    <View style={styles.container}>
      <FormLabel labelStyle={[styles.label, light ? styles.labelLight : null]}>{error ? `${label} *` : label}</FormLabel>
      <FormInput {...input}
        placeholder={label}
        placeholderTextColor='#bebebe'
        value={input.value.toString()}
        disabled={disabled ? disabled : false}
        textInputRef={(c) => typeof(getRef) == 'function' ? getRef(c) : null}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmit}
        onChangeText={onChange}
        autoFocus={autoFocus}
        returnKeyType={returnKeyType}
        autoCapitalize={autoCapitalize}
        inputStyle={light ? styles.inputLight : null}/>
      <FormValidationMessage>{touched && error ? error : ''}</FormValidationMessage>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginLeft: 20,
    // marginRight: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: 'normal'
  },
  labelLight: {
    color: '#ffffff'
  },
  inputLight: {
    color: '#ffffff',
    borderColor: '#ffffff'
  }
})
