import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar} from "react-native"
import { Images } from "../../themes"
import styles from './styles'
import Button from 'react-native-button';
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


class Welcome extends Component {
  constructor(props){
    super(props)
  }
  
  static navigationOptions = {
    header: false,
  };

  goLogin(navigate){
    this.props.navigation.goBack();
  }

  goBack(){
    this.props.navigation.goBack()
  }

  goNext(){
    this.props.navigation.navigate('ReplaceId')
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <View style = {styles.container}>
      <MyStatusBar backgroundColor="white"  barStyle="dark-content"/>
          <View style={styles.headerView}>
              <View style={{flex:1}}> 
              </View>
              <View style={{flex:1,alignItems:'center'}}>
              <Image source={Images.kmark} style={styles.kmark}/>
              </View>
              <View style={{flex:1}}/>
          </View>
          <View style={styles.mainView}>
            <View style={styles.eachView}>
                <View style={styles.circleView}>
                    <Image source={Images.check} style={styles.check}/>
                </View>
                <Text style={styles.smallText}>Payment complete</Text> 
            </View>
            <View style={styles.eachView}>
              <TouchableOpacity style={styles.button} onPress={() => this.goNext()}>
                <Text style={styles.nextText}>Next</Text> 
              </TouchableOpacity>
            </View>
          </View>
      </View>
    )
  }
}
export default Welcome
