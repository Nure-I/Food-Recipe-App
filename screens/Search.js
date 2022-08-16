import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS } from "../constants";

const Search = () => {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ ...FONTS.h2 }}>Search</Text>
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({});
