import React from "react";
import * as Yup from "yup";
import { Form } from "@/components/form";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function SignInScreen() {
  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("User Name Required"),
    email: Yup.string().email("Invalid email").required("Email Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password Required"),
  });

  const formFields = [
    {
      name: "username",
      label: "Username",
      placeholder: "Username",
      keyboardType: "default" as const,
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Email",
      keyboardType: "email-address" as const,
      maxLength: 50,
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Password",
      keyboardType: "default" as const,
      secureTextEntry: true,
    },
  ];

  const initialValues = {
    username: "",
    password: "",
    email: "",
  };

  const handleNavigation = () => {
    console.log("Navigate to Sign in");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Form
        formFields={formFields}
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        headerText="Sign up"
        descriptionText="Create an account to get started"
        buttonText="Sign up"
      />

      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text style={styles.instruction}>
          Already have an account?{" "}
          <Text style={styles.signInText}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
  instruction: {
    fontSize: 14,
    fontFamily: "GilroySemibold",
    textAlign: "center",
    color: "#030303",
  },
  signInText: {
    color: "#53B175",
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
