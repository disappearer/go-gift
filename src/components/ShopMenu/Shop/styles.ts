import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  shopRow: {
    flexDirection: 'row',
    paddingVertical: 9.5,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 49,
  },
  shopName: {
    flex: 2.5,
  },
  productStockInfo: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productStockText: {
    color: '#a6a6a6',
    marginLeft: 4,
  },
  price: {
    flex: 2,
    alignItems: 'flex-end',
  },
  openIconWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  openIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 6,
    backgroundColor: '#e0e0e0',
  },
});
