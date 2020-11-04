import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import { Formik, Form } from "formik";
import Text from "./Text";

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "grey",
  },
  button: {
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,

  backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,

  },
  buttonText: {
    color: 'white'
  }
});

const initialValues = {
  username: "",
  password: "",
};

export const SignInForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View style={theme.topContainer}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
        <View style={styles.input}>
          <FormikTextInput name="username" placeholder="Username" />
        </View>
        <View style={styles.input}>
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
          <View style={styles.button}>
            <TouchableWithoutFeedback onPress={onSubmit} >
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableWithoutFeedback>
          </View>
        </Form>
      </Formik>
    </View>
  );
};
