import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

function getCatFact() {
	fetch("https://cat-fact.herokuapp.com/facts")
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
}

function CatFactView() {
	const [catFact, setCatFact] = useState("empty");
	// Set use effect

	useEffect(() => {
		//runs on mount

		const catFact = getCatFact();

		return () => {
			// runs on unmount
		};
	}, []);

	return (
		<View>
			<Text>Not a cat fact</Text>
		</View>
	);
}

export default CatFactView;

const styles = StyleSheet.create({});
