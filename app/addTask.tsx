import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import CustomInput from "../components/CustomInput";
import CustomBtn from "../components/CustomBtn";
import { useDispatch } from "react-redux";
import { addTask } from "@/store/taskSlice";
import { useRouter } from "expo-router";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "@/components/DatePicker";
import { SafeAreaView } from "react-native-safe-area-context";
const AddTask = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [selectedDate, setselectedDate] = useState(new Date());

  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddTask = () => {
    try {
      if (title.trim() === "" || description.trim() === "") {
        return Alert.alert("Empty TODO is not ALLOWED");
      }
      console.log("date is", selectedDate);
      const randomid = (title.length + 1).toString();
      console.log("random id ", randomid);
      // console.log("random id from libaray",uuidv4())
      const newTask = {
        id: randomid,
        title: title,
        description: description,
        date: selectedDate.toISOString(),
        isCompleted: false,
      };

      dispatch(addTask(newTask));
      router.push("/" as any);
    } catch (error) {
      console.log("Error while adding task", error);
    }
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView   style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>


      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Header title={"Add New Task"} isBackButton={true} />
        <CustomInput
          placeholder={"Enter Task Title"}
          value={title}
          onChange={settitle}
        />
        <CustomInput
          placeholder={"Enter Task Enter Description"}
          value={description}
          onChange={setdescription}
          multiline
          textArea={true}
        />
        <DatePicker
          currentDate={selectedDate}
          onDateChange={(newDate) => setselectedDate(newDate)}
        />

        <CustomBtn title={"ADD TODO"} onPress={handleAddTask} />
      </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
