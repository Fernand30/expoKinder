import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar} from "react-native"
import { Images } from "../../themes"
import styles from './styles'

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

  goBack(){
    this.props.navigation.goBack()
  }

  goConnect(){
    this.props.navigation.navigate('Connect')
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <View style = {styles.container}>
      <MyStatusBar backgroundColor="white"/>
          <View style={styles.headerView}>
              <View style={{flex:1}}>
                <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.arrow_back}>
                  <Image source={Images.arrow_back} style={styles.arrow_back}/>
                </TouchableOpacity>  
              </View>
              <View style={{flex:1,alignItems:'center'}}>
              <Image source={Images.kmark} style={styles.kmark}/>
              </View>
              <View style={{flex:1}}/>
          </View>
          <View style={styles.shadowView}>
            <Text style={styles.boldText}>Michael Smith</Text> 
            <Text style={styles.codeText}>No wristband connected</Text> 
          </View>
          
          <View style={styles.marginSecondView}>
            <TouchableOpacity style={styles.circleView}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.remainView}>
            <TouchableOpacity onPress={this.goConnect.bind(this)}  style={styles.shadowButton}>
              <Text style={styles.nextText}>Next</Text> 
            </TouchableOpacity>  
          </View>
      </View>
    )
  }
}
export default Welcome
