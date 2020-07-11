import React from "react";
import { TouchableOpacity, Text } from "react-native";
import BoxShadow from "../constants/BoxShadow";

interface Option {
  label?: string;
  emoji?: string;
}

interface Props {
  onPress: () => void;
  data: Option;
}

const Options = ({ onPress, data }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#f8f8f8",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        ...BoxShadow,
      }}
    >
      <Text style={{ fontSize: 25 }}>{data.emoji}</Text>
      <Text style={{ fontSize: 10, textTransform: "capitalize" }}>
        {data.label}
      </Text>
    </TouchableOpacity>
  );
};

export default Options;
