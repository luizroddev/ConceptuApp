import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  ActivityIndicator,
  Avatar,
  Badge,
  Button,
  Dialog,
  Divider,
  List,
  MD2Colors,
  Portal,
  Text,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import BeerFilter from './BeerFilter';
import BeerSort from './BeerSort';
import useBeers from '../../../hooks/useBeers';
import {IBeer} from '../../../@types/IBeer';
import SearchBar from '../../../components/SearchBar';
import {useSort} from '../../../hooks/useSort';
import {RootStackParamList} from '../../../@types/RootStackParamList';

export const BeerList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);

  const [sortBy, setSortBy] = useState('');
  const [filter, setFilter] = useState('');

  const {beers, loading, error, searchBeers, searchFilter, loadMoreBeers} =
    useBeers();

  const sortedBeers = useSort(beers.data, sortBy);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleBeerPress = (beer: IBeer) => {
    navigation.navigate('BeerDetails', {beer});
  };

  const handleSearch = useCallback((query: React.SetStateAction<string>) => {
    setSearchQuery(query);
    if (query.length <= 0) {
      handleSearchQuery();
    }
  }, []);

  const handleFilterPress = () => {
    setFilterVisible(true);
  };

  const handleFilterClose = () => {
    setFilterVisible(false);
  };

  const handleSortPress = () => {
    setSortVisible(true);
  };

  const handleSortClose = () => {
    setSortVisible(false);
  };

  const handleLoadMore = () => {
    loadMoreBeers();
  };

  const handleSearchQuery = () => {
    searchBeers(searchQuery);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        handleSearch={handleSearchQuery}
        searchQuery={searchQuery}
        setSearchQuery={handleSearch}
      />
      <View style={styles.buttonsContainer}>
        <Button
          mode="outlined"
          onPress={handleFilterPress}
          style={styles.button}>
          Filter
        </Button>
        <Button mode="outlined" onPress={handleSortPress} style={styles.button}>
          Sort
        </Button>
      </View>
      <View style={styles.results}>
        <Text variant="titleMedium">Results total </Text>
        <Badge style={{backgroundColor: MD2Colors.blue600}}>
          {beers.data.length}
        </Badge>
      </View>

      <Portal>
        <Dialog visible={filterVisible} onDismiss={handleFilterClose}>
          <Dialog.Title>Filter Options</Dialog.Title>
          <BeerFilter
            onFilterChange={value => {
              setFilter(value);
              searchFilter(value);
            }}
            filter={filter}
          />
          <Dialog.Actions>
            <Button onPress={handleFilterClose}>Close</Button>
          </Dialog.Actions>
        </Dialog>
        <Dialog visible={sortVisible} onDismiss={handleSortClose}>
          <Dialog.Title>Sort Options</Dialog.Title>
          <BeerSort onSortChange={setSortBy} sortBy={sortBy} />
          <Dialog.Actions>
            <Button onPress={handleSortClose}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      {error && (
        <Text variant="bodyLarge" style={{color: MD2Colors.red600}}>
          Não foi possível carregar os dados{'\n'}Erro: {error.message}
        </Text>
      )}
      {!error && (
        <FlatList
          data={sortBy ? sortedBeers : beers.data}
          keyExtractor={(item, index) => `${item.id.toString()} - ${index}`}
          renderItem={({item}) => (
            <List.Item
              title={item.name}
              description={item.tagline}
              onPress={() => handleBeerPress(item)}
              left={() => (
                <Avatar.Image size={48} source={{uri: item.image_url}} />
              )}
            />
          )}
          ItemSeparatorComponent={() => <Divider />}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.01}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
          }
          windowSize={5}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Sora-ExtraBold',
  },
  results: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 16,
  },
  searchbar: {
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    width: '45%',
  },
});
