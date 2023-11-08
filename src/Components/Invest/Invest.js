import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./style";
const InvestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mutual Fund</Text>
      <Text style={styles.text}>
        A mutual fund is a company that pools money from many investors and
        invests the money in securities such as stocks, bonds, and short-term
        debt.
      </Text>
      <Text style={styles.title}>Share Market</Text>
      <Text style={styles.text}>
        The share market is a platform where buyers and sellers come together to
        trade on publicly listed shares during specific hours of the day.
      </Text>
      <Text style={styles.title}>Real Estate</Text>
      <Text style={styles.text}>
        One advantage of real estate investing is that it can provide
        diversification in an investment portfolio. Real estate investments
        often have a low correlation with other asset classes such as stocks and
        bonds, meaning that they can help spread risk and potentially reduce
        volatility.
      </Text>
      
    </View>
  );
};
export default InvestScreen;

