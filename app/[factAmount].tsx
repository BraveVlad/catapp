import CatFactView from "@/components/CatFactView";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SingleFactScreen() {
	const factAmount = useLocalSearchParams()["factAmount"] as string;

	return (
		<View style={styles.container}>
			<CatFactView factAmount={factAmount} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
