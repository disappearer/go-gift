import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  shopMenuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 7,
    backgroundColor: '#000',
  },
  shopMenuWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#fff',
    paddingTop: 14,
    paddingHorizontal: 16,
    paddingBottom: 19.5,
  },
  shopMenuTitleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 9.5,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
});
