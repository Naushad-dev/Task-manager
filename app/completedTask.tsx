import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";
import { RootState } from "@/store/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CompletedTasks = () => {
  const completedTasks = useSelector((state: RootState) =>
    state.tasks.tasks.filter((task) => task.isCompleted)
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Header title={"Completed Tasks"} isBackButton={true} />
          <FlatList
            data={completedTasks}
            renderItem={({ item }) => <TodoItem item={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default CompletedTasks;

const styles = StyleSheet.create({});
