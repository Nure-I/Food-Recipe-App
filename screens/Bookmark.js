import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS } from "../constants";

const Bookmark = () => {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ ...FONTS.h2 }}>Bookmark</Text>
		</View>
	);
};

export default Bookmark;

const styles = StyleSheet.create({});
