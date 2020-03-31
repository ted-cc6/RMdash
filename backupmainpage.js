import React, { Component } from "react";
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, DeckSwiper,Card,CardItem,Thumbnail} from 'native-base';
import {
  View,
  Platform,
  FlatList,
  StatusBar,
  UIManager,
  SafeAreaView,
  Text,
  Image
} from "react-native";
import { LineChart, Grid, YAxis } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop} from "react-native-svg";
import GradientCard from "react-native-gradient-card-view";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
// Static Data
import staticData from "./src/data/staticData";
import styles, { centerSubtitleStyle } from "./styles";


const cards = [
  {
    text: '5 Day',
    name: 'Relationship Manager: Dr. Georgie Powell',
    image: require("./assets/billgates.jpg"),
  },
  {
    text: '3 Month',
    name: 'Relationship Manager: Dr. Georgie Powell',
    image: require("./assets/billgates.jpg"),
  },
  {
    text: '1 Year',
    name: 'Relationship Manager: Dr. Georgie Powell',
    image: require("./assets/billgates.jpg"),
  },
];


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      seed: 1,
      query: "",
      isLoading: true,
      refreshing: false,
      dataBackup: staticData,
      dataSource: staticData
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }


  renderRightComponent = item => (
    <View>
      <LineChart
        data={item.data}
        style={styles.chartStyle}
        contentInset={styles.chartContentInset}
        svg={{
          strokeWidth: 1.5,
          fill: item.fillColor,
          stroke: item.strokeColor
        }}
      />
    </View>
  );

  renderItem(item) {
    return (
      <GradientCard
        key={item.name}
        title={item.name}
        style={styles.cardStyle}
        imageSource={item.image}
        centerTitle={item.value}
        subtitle={item.shortName}
        width={ScreenWidth * 0.9}
        centerSubtitle={item.change}
        shadowStyle={styles.cardShadowStyle}
        centerSubtitleStyle={centerSubtitleStyle(item)}
        rightComponent={this.renderRightComponent(item)}
      />
    );
  }

  state = {
    activePage:1,
}

selectComponent = (activePage) => () => this.setState({activePage})

_renderComponent = () => {
  if(this.state.activePage === 1)
    return <Executive/>
  else 
    return <Advisory/> 
}


  render() {
    const contentInset = { top: 20, bottom: 17 }
    const date = [ 10, 15, 16, 43, 52, 48, 75, 72, 86, 82, 63, 76, 88, 92, 103]
    const Gradient = () => (
      <Defs key={'gradient'}>
          <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
              <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
              <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
          </LinearGradient>
      </Defs>
  )    
    return (      
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <StatusBar barStyle={"light-content"} />
        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Segment>
           <Button active={this.state.activePage === 1}
              onPress={this.selectComponent(1)}><Text>Executive</Text></Button>
           <Button  active={this.state.activePage === 2}
              onPress= {this.selectComponent(2)}><Text>Advisory</Text></Button>
         </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Text style={styles.titleStyle}>Portfolio</Text>
        <View style={{height:350}} >
          <DeckSwiper
           dataSource={cards}
           renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>Mr. Peters Stuart </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <YAxis 
                  data={ date }
                  contentInset={ contentInset }
                  svg={{
                        fill: 'grey',
                        fontSize: 10,
                  }}
                  numberOfTicks={ 10 }
                  formatLabel={ value => `£${value}M` }             
                />
                <LineChart
                    style={ { height: 200, width:400, left:20 } }
                    data={ date }
                    contentInset={ { top: 20, bottom: 17 } }
                    svg={{
                        strokeWidth: 2,
                        stroke: 'url(#gradient)',
                    }}
                  >
                    <Grid/>
                    <Gradient/>
                </LineChart>
              </CardItem>
              <CardItem>
                  <Icon name="person" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
            </Card>
          }
          />
        </View>        
        <View style={styles.container}>
          <Text style={styles.titleStyle2}>Investment</Text>
          <View style={styles.flatListStyle}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) => this.renderItem(item)}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
