import React from 'react';
import { View } from 'react-native';

import { Button, Text, TextInput } from '@app/blueprints';
import { Formik } from 'formik';

import { BaseLayout } from '@src/components';

import useLogin from './useLogin';

const LoginScreen = () => {
  const {
    disabled,
    fieldValidation,
    handleButtonSubmit,
    initialValues,
    passwordRef,
    styles,
  } = useLogin();

  return (
    <BaseLayout>
      <View style={styles.header} />
      <View style={styles.content}>
        <Text preset="h1">Log-in</Text>
        <Formik
          validationSchema={fieldValidation}
          initialValues={initialValues}
          onSubmit={handleButtonSubmit}>
          {({ resetForm, submitForm }) => (
            <View style={styles.fieldContainer}>
              <TextInput
                label={'Email'}
                variant="filled"
                name={'email'}
                placeholder={'Your Email ID'}
                style={styles.input}
                onSubmitEditing={() => {
                  passwordRef.current?.focus();
                }}
              />
              <TextInput
                label={'Password'}
                variant="filled"
                name={'password'}
                ref={passwordRef}
                placeholder={'Password'}
                style={styles.input}
                onSubmitEditing={submitForm}
              />
              <Button
                title={'Login'}
                buttonContainerStyle={styles.loginBtn}
                onPress={submitForm}
                disabled={disabled}
              />
              <Button
                title={'reset'}
                buttonContainerStyle={styles.loginBtn}
                onPress={() => {
                  resetForm();
                }}
              />
            </View>
          )}
        </Formik>
      </View>
    </BaseLayout>
  );
};

export default React.memo(LoginScreen);
