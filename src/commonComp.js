import React, { useCallback } from "react";
import { Alert, Image, Linking, TouchableHighlight } from "react-native";

const OpenURLBanner = ({ url }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableHighlight
      onPress={() => handlePress()}
      style={{
        width: "100%", 
        height: 50,
        alignItems: 'center',
        position: "absolute",
        bottom: 0,
        backgroundColor: "black",
      }}
    >
      <Image source={require("../assets/banner.png")} />
    </TouchableHighlight>
  );
};

export default OpenURLBanner;
