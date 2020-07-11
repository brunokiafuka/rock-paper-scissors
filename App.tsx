import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import gameRules from "./game";
import Options from "./components/Option";
import ResultView from "./components/ResultView";
import { GameResult } from "./constants/enums";

interface Option {
  label: string;
  emoji: string;
}

const gameOptions: Option[] = [
  { label: "rock", emoji: "✊" },
  { label: "paper", emoji: "✋" },
  { label: "scissor", emoji: "✌️" },
];

export default function App() {
  const [gameResult, setGameResult] = React.useState<string>(
    "game not started"
  );
  const [deviceSelection, setDeviceSelection] = React.useState<Option>(
    gameOptions[0]
  );
  const [userSelection, setUserSelection] = React.useState<Option>(
    gameOptions[1]
  );

  const [userPoints, setUserPoints] = React.useState<number>(0);
  const [devicePoints, setDevicePoints] = React.useState<number>(0);

  const shuffle = (): Option => {
    const idx = Math.floor(Math.random() * 3) + 0;
    return gameOptions[idx];
  };

  const setPoints = (result: string) => {
    if (GameResult.UserWin === result) {
      setUserPoints((prev) => prev + 1);
      return;
    }

    if (GameResult.DeviceWin === result) {
      setDevicePoints((prev) => prev + 1);
      return;
    }
  };

  const handleUserOption = (userOption: number) => {
    const deviceOpt: Option = shuffle();
    setDeviceSelection(deviceOpt);
    setUserSelection(gameOptions[userOption]);

    const gameResult = gameRules(
      gameOptions[userOption].label,
      deviceOpt.label
    );

    setGameResult(gameResult);
    setPoints(gameResult);
  };

  const handleResetGame = () => {
    setUserPoints(0);
    setDevicePoints(0);
    setGameResult("game not started");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ alignItems: "flex-end", padding: 20 }}>
        <TouchableOpacity onPress={handleResetGame}>
          <Text style={{ fontWeight: "bold" }}>Reset Game</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gameView}>
        <ResultView points={devicePoints} isBot label={deviceSelection.emoji} />
        <View>
          <Text
            style={{
              textTransform: "capitalize",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >{`${gameResult}`}</Text>
        </View>
        <ResultView points={userPoints} label={userSelection.emoji} />
      </View>

      <View style={styles.gameOptionsContainer}>
        {gameOptions.map((i, idx: number) => (
          <Options
            data={i}
            key={i.label}
            onPress={() => handleUserOption(idx)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  gameOptionsContainer: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  gameView: {
    marginVertical: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
});
