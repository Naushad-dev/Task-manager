// app/screens/task-details.tsx
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import CustomBtn from '@/components/CustomBtn';
import { deleteTask, toggleTaskCompletion } from '@/store/taskSlice';

const TaskDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find(task => task.id === id)
  );
  const dispatch= useDispatch()
  const router= useRouter()
 const deleteHandler = () => {
    dispatch(deleteTask(id as any) );
   router.push("/")
  };
  const updateHandler = () => {
    router.push({
      pathname: "/updateTask",
      params: task as any,
    });
  };
  const handleCompleted=()=>{
    console.log("Task Completed");
    
    dispatch(toggleTaskCompletion(task.id));
    router.push("/")
  }


  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Task not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        <Header title='Detail' isBackButton />

    <View style={styles.detailContainer}>

      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.date}>
        Due Date: {new Date(task.date).toLocaleDateString()}
      </Text>
      <Text style={styles.status}>
        Status: {task.isCompleted ? 'Completed' : 'Pending'}
      </Text>
    </View>
    <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:20}}>

        <CustomBtn title='Edit' onPress={updateHandler}/>
        <CustomBtn title='Delete' onPress={deleteHandler}/>
        <CustomBtn title='Mark ✅' onPress={handleCompleted}/> 

    </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    color: '#666',
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4CAF50',
  },
  detailContainer:{
    marginHorizontal:20
  }
});

export default TaskDetailsScreen;