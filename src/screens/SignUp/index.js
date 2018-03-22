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

  nextPage(navigate){
    navigate('Verify')
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <ImageBackground source={Images.background} style = {styles.container}>   
          <Image source={Images.mark} style={styles.markImage}/>
          <View style={styles.marginView1}>
            <Text style={styles.commonText}>E-mail address</Text> 
          </View>
          <View style={styles.marginView5}>
            <TextInput underlineColorAndroid='transparent' style={styles.commonTextInput} /> 
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity onPress={this.nextPage.bind(this,navigate)} style={styles.nextButton}>
              <Text style={styles.commonText}>Next</Text>
            </TouchableOpacity>
            <View style={styles.rowTextView}>
              <Text style={styles.smallText}>By pressing next you accept our</Text>
              <Text style={styles.underlineSmallText}>Terms and conditions</Text>
            </View>
          </View>
      </ImageBackground>
    )
  }
}
export default Welcome
