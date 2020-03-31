import { Platform } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

export const centerSubtitleStyle = item => ({
  fontSize: 12,
  marginLeft: 8,
  textAlign: "center",
  color: item.strokeColor
});

export default {
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  flatListStyle: {
    marginTop: 12
  },
  cardShadowStyle: {
    ...Platform.select({
      ios: {
        shadowRadius: 3,
        shadowOpacity: 0.4,
        shadowColor: "#757575",
        shadowOffset: {
          width: 3,
          height: 3
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  cardStyle: {
    marginTop: 16,
    width: ScreenWidth,
    alignItems: "center",
    justifyContent: "center",
    gradientColors:"#5fc9f8"
  },
  container: {
    ...Platform.select({
      android: {
        top: 24
      }
    }),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  welcome: {
    margin: 10,
    fontSize: 20,
    textAlign: "center"
  },
  instructions: {
    textAlign: "center",
    color: "#5fc9f8",
    marginBottom: 5
  },
  chartStyle: {
    height: 100,
    width: 100
  },
  chartContentInset: {
    top: 30,
    bottom: 30
  },
  titleStyle:{
    fontSize: 30,
    marginLeft: 8,
    textAlign: "center",
    color: "#5fc9f8"
  },
  titleStyle2:{
    fontSize: 30,
    marginLeft: 8,
    textAlign: "left",
    color: "#5fc9f8"
  }
};
