import { Formik } from "formik";
import { Input } from "../Input";
import Button from "../Button";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, View, Image, Text } from "react-native";
import { styles } from "./styles";

interface FormProps {
  formFields: {
    name: string;
    label: string;
    placeholder: string;
    keyboardType?: "default" | "email-address" | "numeric";
    maxLength?: number;
    secureTextEntry?: boolean;
  }[];
  initialValues: Record<string, string>;
  validationSchema: any;
  onSubmit: (values: Record<string, string>) => void;
  headerText: string;
  descriptionText: string;
  buttonText: string;
}

export const Form: React.FC<FormProps> = ({
  formFields,
  initialValues,
  validationSchema,
  onSubmit,
  headerText,
  descriptionText,
  buttonText,
}) => {
  return (
    <View style={styles.wrapperContainer}>
      <Image
        source={require("@/assets/images/red-carrot.png")}
        style={styles.image}
      />
      <Text style={styles.header}>{headerText}</Text>
      <Text style={styles.text}>{descriptionText}</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            {formFields.map((field) => (
              <Input
                key={field.name}
                label={field.label}
                onChangeText={handleChange(field.name)}
                onBlur={handleBlur(field.name)}
                value={values[field.name]}
                error={
                  errors[field.name] && touched[field.name]
                    ? (errors[field.name] as string | null)
                    : null
                }
                placeholder={field.placeholder}
                keyboardType={field.keyboardType}
                maxLength={field.maxLength}
                secureTextEntry={field.secureTextEntry}
              />
            ))}
            <Button
              onPress={handleSubmit}
              title={buttonText}
              backgroundColor="#53B175"
              justify="center"
              marginTop={20}
              color="#fff"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
