import React from "react";
import { View, Text } from "react-native";
import BoxShadow from "../constants/BoxShadow";

interface Props {
  label: string;
  isBot?: boolean;
  points: number;
}

const ResultView = ({ label, isBot, points = 0 }: Props) => {
  return (
    <View style={{ alignItems: "center" }}>
      {isBot && (
        <Text style={{ marginVertical: 10, fontWeight: "500", fontSize: 20 }}>
          {points}
        </Text>
      )}
      <View
        style={{
          backgroundColor: "#f8f8f8",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: "center",
          ...BoxShadow,
        }}
      >
        <Text
          style={{
            fontSize: 50,
            transform: [{ rotate: isBot ? "180deg" : "0deg" }],
          }}
        >
          {label}
        </Text>
      </View>
      {!isBot && (
        <Text style={{ marginVertical: 10, fontWeight: "500", fontSize: 20 }}>
          {points}
        </Text>
      )}
    </View>
  );
};

export default ResultView;
