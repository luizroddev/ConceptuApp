import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Caption, Paragraph, Subheading, Text} from 'react-native-paper';
import {IBeer} from '../../@types/IBeer';

interface BeerDetailsProps {
  route: RouteProp<{BeerDetails: {beer: IBeer}}, 'BeerDetails'>;
}

export const BeerDetails: React.FC<BeerDetailsProps> = ({route}) => {
  const {beer} = route.params;

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{uri: beer.image_url}}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.details}>
        <Text style={{fontWeight: '700'}} variant="headlineLarge">
          {beer.name}
        </Text>
        <Subheading>{beer.tagline}</Subheading>
        <Paragraph style={styles.description}>{beer.description}</Paragraph>
        <Caption>ABV: {beer.abv}</Caption>
        <Caption>IBU: {beer.ibu}</Caption>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    fontFamily: 'Sora',
  },
  details: {
    padding: 16,
  },
  description: {
    marginTop: 8,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    backgroundColor: 'lightgray',
  },
});
