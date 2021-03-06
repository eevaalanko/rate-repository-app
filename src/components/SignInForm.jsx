import React from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import { Formik } from "formik";
import Text from "./Text";
import { useSignIn } from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup.string().required("User name is required"),
  password: yup.string().required("Password is required"),
});

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

    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});

const initialValues = {
  username: "",
  password: "",
};

export const SignInFormContainer = ({
  initialValues,
  onSubmit,
  validationSchema,
}) => {
  return (
    <View style={theme.topContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View>
              <FormikTextInput
                style={styles.input}
                name="username"
                placeholder="Username"
                testID="username"
              />
            </View>
            <View>
              <FormikTextInput
                style={styles.input}
                name="password"
                placeholder="Password"
                secureTextEntry={true}
                testID="password"
              />
            </View>
            <View style={styles.button}>
              <TouchableWithoutFeedback onPress={handleSubmit} testID="submitButton">
                <Text style={styles.buttonText}>Sign in</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export const SignInForm = () => {
  const [signIn] = useSignIn();
  let history = useHistory();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const data = await signIn({ username, password });
      history.push("/");
      console.log("auth data ", data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SignInFormContainer
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  );
};
