import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  productInfo: {
    flex: 1,
    width: '100%',
    paddingTop: 30,
  },
  productNameRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  inStock: { color: '#3cca2f', marginLeft: 40 },
  productPriceRow: {
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  from: {
    marginRight: 4,
  },
  productDescription: {
    paddingHorizontal: 16,
  },
  buttonWrapper: {
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  buttonWrapperAbsolute: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    zIndex: 5,
    backgroundColor: '#fff',
  },
});
