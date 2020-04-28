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




export default class PorfolioMaster extends Component {




render() {
  const state = this.state;
  
  return (      
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={{height:300}}>
         <Card>
            <CardItem header bordered>
              <Text style={{fontSize: 16, color: "#00affc"}}>103539-1</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Status: Open
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Fee Code: A1
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Initial Value: 70,949,445
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
              <Text style={{fontSize: 16, color: "#00affc"}}>103539-2</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Status: Open
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Fee Code: B2
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Initial Value: 69,283,113
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                Avisory portfolio(ADV)
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






