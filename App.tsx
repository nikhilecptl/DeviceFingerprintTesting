import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-react-native';

export default function App() {
  const {isLoading, error, data, getData} = useVisitorData();

  useEffect(() => {
    getFingerprintData();
  }, []);

  const getFingerprintData = () => {
    getData();
    if (isLoading) {
      return <Text>Loading...</Text>;
    }
    if (error) {
      return <Text>An error occured: {error.message}</Text>;
    }
    if (data) {
      console.log('Fetched fingerprint data successfully');
      console.log('Fingerprint data:');
      console.log('\n',JSON.stringify(data, null, 2));

    } else {
      console.log('Error in getting data');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Button
        title="Press me"
        onPress={() => {
          console.log('First Button Pressed!');
        }}
      /> */}
      <Button
        title="Reload data"
        onPress={() => {
          console.log('Button Pressed!');
          getData();
        }}
      />
      {isLoading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <>
          <Text style={styles.subText}>VisitorId:</Text>
          <Text style={styles.mainText}>{data?.visitorId}</Text>
          <Text style={styles.subText}>Full visitor data:</Text>
          <Text style={styles.subText}>
            {error ? error.message : JSON.stringify(data, null, 2)}
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white'

  },
  loadingText: {
    fontSize: 30,
    color: 'orange',
    textAlign: 'center',
  },
  mainText: {
    fontSize: 30,
    color: 'green',
    marginBottom: 14,
  },
  subText: {
    fontSize: 20,
    color: 'black',
  },
});
