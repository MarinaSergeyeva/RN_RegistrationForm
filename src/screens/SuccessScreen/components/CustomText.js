import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const CustomText = props => {
  const { text, label } = props;
  const { colors } = useTheme();

  return (
    <View style={{ borderBottomColor: colors.placeholder, ...styles.textContainer }}>
      <Text style={styles.label}>{label}: </Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
  },
  text: { fontSize: 16 },
});

export default CustomText;
