import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailScreen from "./screens/DetailScreen";
import HomeScreen from "./screens/HomeScreen";
import {TouchableOpacity, Text, View} from "react-native";
import HeaderLessScreen from "./screens/HeaderLessScreen";

const Stack = createNativeStackNavigator();

function App () {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						//타이틀 문구
						title: '홈',
						// Header 블록 스타일
						headerStyle: {
							backgroundColor: '#29b6f6'
						},
						// Header 텍스트, 버튼색상
						headerTintColor: '#fff',
						// 타이틀 텍스트 스타일
						headerTitleStyle: {
							fontWeight: 'bold',
							fontSize: 20
						}
					}}/>
				<Stack.Screen
					name="Detail"
					component={DetailScreen}
					options={{
						headerBackVisible: false,
						headerLeft: () => (<TouchableOpacity><Text>Left</Text></TouchableOpacity>),
						headerTitle: ({children}) => (<View><Text>{children}</Text></View>),
						headerRight: () => (<View><Text>Right</Text></View>),
					}}/>
				<Stack.Screen name="HeaderLess" component={HeaderLessScreen} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
