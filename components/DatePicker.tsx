import { useState } from "react";
import { View, Text, Platform, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Feather from "@expo/vector-icons/Feather";

interface DatePickerProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

const DatePicker = ({ currentDate, onDateChange }: DatePickerProps) => {
  const [date, setDate] = useState(currentDate);
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios"); // Keep picker open on iOS
    setDate(currentDate);
    onDateChange(currentDate);
  };

  return (
    <View>
      <Pressable
        onPress={() => setShowPicker(true)}
        style={{
          marginVertical: 10,
          borderColor: "#ccc",
          borderWidth: 1,
          marginHorizontal: 18,
          borderRadius: 10,
          paddingHorizontal: 15,
          paddingVertical: 10,
          flexDirection:"row", justifyContent:"space-between"
        }}
      >
        <Text style={{ fontSize: 16 }}>{date.toLocaleDateString()}</Text>
        <Feather name="calendar" size={24} color="#ccc" />

      </Pressable>

      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
          minimumDate={new Date()}
          themeVariant="light"
          style={Platform.OS === "ios" ? { height: 200 } : {}}
        />
      )}
    </View>
  );
};

export default DatePicker;
