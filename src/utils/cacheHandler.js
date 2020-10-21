import AsyncStorage from '@react-native-community/async-storage';

export const cashUser = (token) => {
    AsyncStorage.setItem(
        'user',
        JSON.stringify({
          token: token,
        })
      );  
}

export const getCashUser = async () => {
    try {
        return await AsyncStorage.getItem('user')
    } catch (error) {
        return console.log(error)
    }
};

export const uncacheUser = async () => {
    return  await AsyncStorage.removeItem('user');

}