import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BeerList} from './components/BeerList';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BeerList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    fontFamily: 'Sora-ExtraBold',
  },
});
