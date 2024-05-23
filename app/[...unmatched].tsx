import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const NotFoundPage = () => {
	return (
		<View style={styles.notFoundScreen}>
			<Text style={styles.notFoundMessage}>Oopsie doopsie.</Text>
			<Pressable
				onPress={() => {
					router.replace("/");
				}}
			>
				<Text style={styles.notFoundReturn}>Return</Text>
			</Pressable>
		</View>
	);
};

export default NotFoundPage;

const styles = StyleSheet.create({
	notFoundScreen: {
		height: "100%",
		backgroundColor: "black",
		color: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	notFoundMessage: {
		color: "white",
		fontSize: 32,
	},
	notFoundReturn: {
		color: "white",
	},
});
