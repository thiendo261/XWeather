/**
 * @format
 */

import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 5,
    marginTop: StatusBar.currentHeight || 0,
    zIndex: 1000,
  },
  wrapper: {
    padding: 10,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default styles;
