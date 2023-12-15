import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './style';

const InvestScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
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

        <Text style={styles.title}>Cryptocurrencies</Text>
        <Text style={styles.text}>
          Cryptocurrencies are digital or virtual currencies that use cryptography for security. 
          They are typically decentralized and based on blockchain technology. Investing in 
          cryptocurrencies can offer high returns but also comes with high risk due to market volatility.
        </Text>

        <Text style={styles.title}>Commodities</Text>
        <Text style={styles.text}>
          Commodities include physical resources like gold, oil, and agricultural products.
          Investing in commodities can be a way to hedge against inflation and economic downturns, as
          their prices often move inversely to stocks.
        </Text>

        <Text style={styles.title}>Exchange-Traded Funds (ETFs)</Text>
        <Text style={styles.text}>
          ETFs are a type of investment fund traded on stock exchanges, much like stocks. 
          They hold assets such as stocks, commodities, or bonds and generally operate with 
          an arbitrage mechanism to keep their trading close to net asset value.
        </Text>

        <Text style={styles.title}>Art and Collectibles</Text>
        <Text style={styles.text}>
          Investing in art and collectibles like paintings, sculptures, vintage cars, or rare coins 
          can be a way to diversify investment portfolios. While potentially lucrative, it requires 
          expertise and understanding of the market.
        </Text>
      </View>
    </ScrollView>
  );
};

export default InvestScreen;
