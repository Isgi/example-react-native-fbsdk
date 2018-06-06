import React, { Component } from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { Field, reduxForm } from 'redux-form';
import Validator from 'validatorjs';
import lang from 'validatorjs/src/lang';
import en from 'validatorjs/src/lang/en';
lang._set('en', en);

import Input from '../../redux-form/Input';

const validate = values => {
  const rules = {
    username: 'required',
    password: 'required'
  };

  const validator = new Validator(values, rules);
  if(validator.fails()){
    return validator.errors.all();
  }
}

class LoginForm extends Component{

  constructor(){
    super();
  }

  render(){
    const { handleSubmit, users } = this.props;
    return (
      <View>
        <View>
          <Field name="username" component={Input} label="Email" keyboardType="email-address"
            light
            autoCapitalize='none'
            onSubmit={() => {
              this.refPassword.focus()
            }}
          />
          <Field name="password" component={Input} label="Password" secureTextEntry={true}
            light
            getRef={(ref) => this.refPassword = ref}
            onSubmit={() => {
              Keyboard.dismiss();
            }}
          />
        </View>
        <View style={styles.containerButton}>
          <Button
            color='#ffffff'
            title="Forgot Password?"
            titleStyle={{ fontWeight: "700"}}
            buttonStyle={styles.buttonForgot}
          />
          <Button
            title="Login"
            loading={users.isSaving}
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={styles.button}
            onPress={ handleSubmit }
          />
          <Button
            color='#ffffff'
            title="Don't have account? Register here."
            titleStyle={{ fontWeight: "700"}}
            buttonStyle={styles.buttonBorder}
          />
        </View>
      </View>
    )
  }
}

const ReduxForm = reduxForm({
  form: 'login',
  validate,
  initialValues: {
    username: 'isgi12018202@webmail.uad.ac.id',
    password: '2wsx1qaz'
  }
})(LoginForm)

export default ReduxForm;

const styles = StyleSheet.create({
  containerButton: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: '#45be88',
    marginBottom: 20,
  },
  buttonBorder: {
    borderColor: '#45be88',
    borderWidth: 0,
    marginBottom: 20,
    backgroundColor: 'transparent'
  },
  buttonForgot: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    marginTop: -30,
    marginBottom: 15
  }
})
