import { Button, Alert } from "react-native";
const Auth = async (credentials) => {
  const failAlert = (message) =>
    Alert.alert("erreur", message, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  const successAlert = (message) =>
    Alert.alert("connected", message, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  };
  const response = await fetch(
    "https://thenestapi.azurewebsites.net/api/logIn",
    requestOptions
  );
  const jsonData = await response.json();
  if (jsonData.code != 200) {
    failAlert(jsonData.message);
  } else if ((jsonData.code = 200)) {
    successAlert(jsonData.data);
    //setUsersData(jsonData.data);
  }
};

export default { Auth };
