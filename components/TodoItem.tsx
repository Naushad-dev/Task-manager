import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "@/store/taskSlice";
import { useRouter } from "expo-router";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const deleteHandler = () => {
    dispatch(deleteTask(item.id));
  };
  const updateHandler = () => {
    router.push({
      pathname: "/updateTask",
      params: item,
    });
  };

  const handleComplete = () => {
    console.log("Pressed the check")
    // dispatch(toggleTaskCompletion(item.id));
    
  };
  console.log("items", item);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Format: "07/03/2025"
  };
  const handleDetails = () => {
    router.push({
      pathname: "/taskDetail",
      params: { id: item.id },
    } as any);
  };
  const RightAction = () => {
    return (
      <View style={styles.rightActionContainer}>
        <Pressable onPress={updateHandler} style={styles.actionButton}>
          <Feather name="edit" size={24} color="#0090B0" />
        </Pressable>
        <Pressable onPress={deleteHandler} style={styles.actionButton}>
          <Feather name="trash" size={24} color="red" />
        </Pressable>
      </View>
    );
  };

  // const LeftAction = () => {
  //   return (
  //     <View >
  //       <TouchableOpacity onPress={handleComplete}  >
  //         <Feather name="check" size={24} color={"green"} />
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  const LeftAction = () => {
    console.log("LeftAction rendered"); // Check Android logs
    return (
      <View style={styles.leftActionContainer}>
        <TouchableOpacity onPress={handleComplete} style={styles.actionButton}>
          <Feather name="check" size={24} color="green" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Swipeable
      renderRightActions={RightAction}
      friction={2}
      rightThreshold={40}
      renderLeftActions={LeftAction}
      leftThreshold={40}
      
    >
      <Pressable style={styles.itemContainer} onPress={handleDetails}>
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <View>
              <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Swipeable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#f0f0f0",
    margin: 10,
    padding: 5,
    borderRadius: 8,

    elevation: 6,
    boxShadow: "3 5 1 0.5  #0090B0",
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 800,
    fontFamily: "SpaceMono",
  },
  itemDescription: {
    fontSize: 14,
    color: "#ccc",
  },
  controllContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
  },
  date: {
    fontSize: 12,
    color: "red",
    marginRight: 20,
  },
  rightActionContainer: {
    flexDirection: "row",
    height: "100%",
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButton: {
    width: 70,
    height: 70,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 5,
  },
  
  leftActionContainer: {
    flexDirection: "row",
    height: "100%",
    marginVertical: 10,
    marginLeft: 10,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});
