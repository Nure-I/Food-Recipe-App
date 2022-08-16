import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS } from "../constants";

const Settings = () => {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ ...FONTS.h2 }}>Settings</Text>
		</View>
	);
};

export default Settings;

const styles = StyleSheet.create({});
