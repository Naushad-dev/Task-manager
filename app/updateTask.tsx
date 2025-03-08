import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import CustomInput from "../components/CustomInput";
import CustomBtn from "../components/CustomBtn";
import { useDispatch } from "react-redux";
import { updateTask } from "@/store/taskSlice";
import { useLocalSearchParams, useRouter } from "expo-router";

import DatePicker from "@/components/DatePicker";
const UpdateTask = ({ item }) => {
  const { id, title, description, date } = useLocalSearchParams();
  console.log("local params", date);

  const [updatetitle, setUpdatedTitle] = useState(title || "");
  const [updatedDescription, setUpdatedDescription] = useState(
    description || ""
  );

  const [selectedDate, setselectedDate] = useState(
    date ? new Date(Array.isArray(date) ? date[0] : date) : new Date()
  );

  const dispatch = useDispatch();
  const router = useRouter();
  const handleUpdateTask = () => {
    try {
      if (
        updatetitle.toString().trim() === "" ||
        updatedDescription.toString().trim() === ""
      ) {
        return Alert.alert("Empty TODO is not ALLOWED");
      }
      const updatedTask = {
        id: id,
        title: updatetitle,
        description: updatedDescription,
        date: selectedDate,
      };
      dispatch(updateTask(updatedTask as any));

      router.push("/" as any);
    } catch (error) {
      console.log("Error while adding task", error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header title={"Update Task"} isBackButton={true} />
      <CustomInput
        placeholder={"Enter Todo Title"}
        value={updatetitle as any}
        onChange={setUpdatedTitle}
      />
      <CustomInput
        placeholder={"Enter Todo Enter Description"}
        value={updatedDescription as any}
        onChange={setUpdatedDescription}
        multiline
        textArea={true}
      />
      <DatePicker
        currentDate={selectedDate}
        onDateChange={(newDate) => setselectedDate(newDate)}
      />

      <CustomBtn title={"Update"} onPress={handleUpdateTask} />
    </View>
  );
};

export default UpdateTask;

const styles = StyleSheet.create({});
