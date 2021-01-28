// Formik x React Native example
import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import * as yup from "yup";

const reviewSchema = yup.object({
  name: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-rating-1-5", "Rating must be 1 - 5", (value) => {
      return parseInt(value) < 6 && parseInt(value) > 0;
    }),
});

const ReviewForm = (props) => (
  <Formik
    initialValues={{ name: "", body: "", rating: "" }}
    validationSchema={reviewSchema}
    onSubmit={(values, actions) => {
      actions.resetForm();
      props.addFigure(values);
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View>
        <TextInput
          style={globalStyles.input}
          onChangeText={handleChange("name")}
          placeholder="Figure name"
          onBlur={handleBlur("name")}
          value={values.name}
        />
        <Text style={globalStyles.errorText}>
          {touched.name && errors.name}
        </Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={handleChange("body")}
          placeholder="Figure Description"
          onBlur={handleBlur("body")}
          value={values.body}
        />
        <Text style={globalStyles.errorText}>
          {touched.body && errors.body}
        </Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={handleChange("rating")}
          placeholder="Figure Rating(1-5)"
          onBlur={handleBlur("rating")}
          keyboardType="numeric"
          value={values.rating}
        />
        <Text style={globalStyles.errorText}>
          {touched.rating && errors.rating}
        </Text>
        <Button onPress={handleSubmit} color="maroon" title="Submit" />
      </View>
    )}
  </Formik>
);

export default ReviewForm;
