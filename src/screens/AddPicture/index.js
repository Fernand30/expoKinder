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

  goLogin(navigate){
    
  }

  goBack(){
    this.props.navigation.goBack()
  }

  goNext(){
    this.props.navigation.navigate('Details')
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
          <View style={styles.marginFirstView}>
            <Text style={styles.codeText}>Please fill in your contact information</Text> 
          </View>
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>Full name</Text> 
          </View>
          <View style={styles.inputView}>
            <TextInput underlineColorAndroid='transparent' placeholder='John Smith' style={styles.textInput} />  
          </View>
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>TIF. with country code</Text> 
          </View>
          <View style={styles.inputView}>
            <TextInput underlineColorAndroid='transparent' placeholder='(+47) 000 00 000' keyboardType='phone-pad' style={styles.textInput} />  
          </View>
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>Child&rsquo;s name</Text> 
          </View>
          <View style={styles.inputView}>
            <TextInput underlineColorAndroid='transparent' placeholder='Michael Smith' style={styles.textInput} />  
          </View>
          <View style={styles.remainView}>
            <TouchableOpacity onPress={this.goNext.bind(this)} style={styles.shadowButton}>
              <Text style={styles.nextText}>Next</Text> 
            </TouchableOpacity>  
          </View>
      </View>
    )
  }
}
export default Welcome
