import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import React from "react";


interface CustomInputProps {
    placeholder:string;
    value:string;
    onChange:(text:string)=>void;
    multiline?: boolean;
    numberOfLines?: number;
    textArea?: boolean;
  
}

const CustomInput:React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChange,
  multiline,
  numberOfLines,
  textArea,
}) => {
  return (
    <TextInput
      style={[
        styles.inputStyle,
        textArea ? { minHeight: 100, textAlignVertical: "top" } : {},
      ]}
      placeholderTextColor={"#000"}
      placeholder={placeholder}
      multiline={multiline}
      value={value}
      onChangeText={onChange}
      numberOfLines={numberOfLines}
      maxLength={500}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputStyle: {
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginHorizontal: 18,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    color:"#000",
    paddingVertical:8
  },
});
