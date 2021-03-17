import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  productInfo: {
    flex: 1,
    width: '100%',
    paddingTop: 30,
    // paddingBottom: 70,
    paddingHorizontal: 16,
  },
  productNameRow: {
    flexDirection: 'row',
  },
  inStock: { color: '#3cca2f', marginLeft: 40 },
  productPriceRow: {
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  from: {
    marginRight: 4,
    // textAlignVertical: 'bottom',
  },
  buttonWrapper: {
    paddingTop: 30,
    paddingBottom: 40,
  },
  buttonWrapperAbsolute: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    zIndex: 5,
    backgroundColor: '#fff',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    paddingTop: 13,
    paddingHorizontal: 75,
    paddingVertical: 12,
    backgroundColor: '#1a405d',
  },
});
