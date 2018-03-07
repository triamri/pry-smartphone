import { AsyncStorage } from "react-native";

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('user')
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};