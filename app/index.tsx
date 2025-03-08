import {
  Alert,
  FlatList,
  Modal,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import AddButton from "../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import { persistor, RootState } from "@/store/store";
import CustomBtn from "@/components/CustomBtn";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { clearAllTask } from "@/store/taskSlice";
import NoTask from "@/components/NoTask";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const inCompleteTask = useSelector((state: RootState) =>
    state.tasks.tasks.filter((task) => !task.isCompleted)
  );
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const handleClearAll = () => {
    Alert.alert(
      "Clear All Tasks",
      "Are you sure you want to delete all tasks?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            dispatch(clearAllTask());
            persistor.purge();
          },
        },
      ]
    );
  };
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Header title={"Task-Manager"} isBackButton={false} />
          {inCompleteTask.length !== 0 ? (
            <FlatList
              data={inCompleteTask}
              renderItem={({ item }) => <TodoItem item={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          ) : (
            <NoTask />
          )}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginVertical: 10,
            }}
          >
            <CustomBtn title="Clear Task" onPress={handleClearAll} />

            <CustomBtn
              title="Task Completed"
              onPress={() => router.push("/completedTask")}
            />
          </View>
          <AddButton />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
