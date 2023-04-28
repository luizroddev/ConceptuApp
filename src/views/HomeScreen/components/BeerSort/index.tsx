import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

interface Props {
  onSortChange: (sortBy: string) => void;
  sortBy: string;
}

const BeerSort: React.FC<Props> = ({onSortChange, sortBy}) => {
  const handleSortChange = (value: string) => {
    onSortChange(value);
  };

  return (
    <View style={styles.container}>
      <RadioButton.Group onValueChange={handleSortChange} value={sortBy}>
        <RadioButton.Item label="None" value="" />
        <RadioButton.Item label="Name (A-Z)" value="name" />
        <RadioButton.Item label="ABV (Low to High)" value="abvLow" />
        <RadioButton.Item label="ABV (High to Low)" value="abvHigh" />
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    marginVertical: 8,
  },
});

export default BeerSort;
