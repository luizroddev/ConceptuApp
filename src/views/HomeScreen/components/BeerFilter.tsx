import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

interface Props {
  onFilterChange: (filter: string) => void;
  filter: string;
}

const BeerFilter: React.FC<Props> = ({onFilterChange, filter}) => {
  const handleFilterChange = (value: string) => {
    onFilterChange(value);
  };

  return (
    <View style={styles.container}>
      <RadioButton.Group onValueChange={handleFilterChange} value={filter}>
        <RadioButton.Item label="All" value="" />
        <RadioButton.Item label="Alcohol free" value="abv_lt=0.5" />
        <RadioButton.Item label="Low alcohol" value="abv_lt=3" />
        <RadioButton.Item label="Classic range" value="abv_gt=4.5&abv_lt=7.6" />
        <RadioButton.Item label="Strong" value="abv_gt=7.5" />
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

export default BeerFilter;
