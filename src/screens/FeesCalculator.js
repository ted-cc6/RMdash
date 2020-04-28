import React, { Component } from "react";
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, DeckSwiper,Card,CardItem,Thumbnail,Title,Col} from 'native-base';
import {
  View,
  Platform,
  FlatList,
  StatusBar,
  UIManager,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from "react-native";
import styles, { centerSubtitleStyle } from "./assets/styles";



export default class FeesCalculator extends Component {




render() {
  const state = this.state;
  
  return (      
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={{height:300}}>
         <Card>
            <CardItem header bordered>
              <Text style={{fontSize: 16, color: "#00affc"}}>Portfolio ID：102966-1</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Fee Code: A2
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Description: 0.2 % per monthly portfolio value 
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                2019-10
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Porfolio:37331620.675
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Monthly Transaction:37934.675
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Execution-only portfolio(EVE)
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{fontSize: 16, color: "#fc0000"}}>GBP</Text>
            </CardItem>
          </Card>
      </View>
      <View style={{height:100}}>
      <Card>
            <CardItem header bordered>
              <Text style={{fontSize: 16, color: "#00affc"}}>Portfolio ID：102966-2</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Fee Code: B1
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Description: 5% per transaction 
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                2019-10
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Porfolio:58932086.468
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Monthly Transaction:21158.468
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Execution-only portfolio(EVE)
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{fontSize: 16, color: "#fc0000"}}>GBP</Text>
            </CardItem>
          </Card>
      </View>

    </SafeAreaView>
  );
}
}






