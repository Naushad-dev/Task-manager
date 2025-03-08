import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

const _layout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="addTask" />
          <Stack.Screen name="updateTask" />
          <Stack.Screen name="completedTask" />
          <Stack.Screen
            name="taskDetail"
            options={{ title: "Task Details" }}
          />
        </Stack>
      </PersistGate>
    </Provider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
