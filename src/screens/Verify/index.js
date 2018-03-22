import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground} from "react-native"
import { Images } from "../../themes"
import styles from './styles'

class Welcome extends Component {
  constructor(props){
    super(props)
  }
  
  static navigationOptions = {
    header: false,
  };

  goLogin(navigate){
    navigate('Login')
  }
  render(){
    const { navigate } = this.props.navigation;
  	return(
      <ImageBackground source={Images.background} style = {styles.container}>   
          <Image source={Images.mark} style={styles.markImage}/>
          <View style={styles.marginView1}>
            <Text style={styles.commonText}>Verification code</Text> 
          </View>
          <View style={styles.marginView5}>
            <TextInput underlineColorAndroid='transparent' secureTextEntry={true} style={styles.commonTextInput} /> 
          </View>
          <View style={styles.marginView4}>
            <TouchableOpacity>
              <Text style={styles.smallText}>lkke mmotatt koden?</Text> 
            </TouchableOpacity>  
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity onPress={this.goLogin.bind(this,navigate)} style={styles.nextButton}>
              <Text style={styles.commonText}>Next</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    )
  }
}
export default Welcome
