import React from "react";
import {View, Text, Button} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

function HeaderLessScreen({navigation}) {
  return (
    <SafeAreaView>
    <View>
      <Text>헤더가 없지</Text>
      <Button onPress={() => navigation.pop()} title="뒤로가기" />
    </View>
    </SafeAreaView>
  )
}

export default HeaderLessScreen