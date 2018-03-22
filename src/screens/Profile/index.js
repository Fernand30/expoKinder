import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar,ScrollView} from "react-native"
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

  goSave(){
    this.props.navigation.navigate('SelectList')
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
          <ScrollView>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>Full name</Text> 
            </View>
            <View style={styles.inputView}>
              <TextInput underlineColorAndroid='transparent' placeholder='John Smith' style={styles.textInput} />  
            </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>TIF.number with country code</Text> 
            </View>
            <View style={styles.inputView}>
              <TextInput underlineColorAndroid='transparent' placeholder='(+47) 000 00 000' keyboardType='phone-pad' style={styles.textInput} />  
            </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>E-mail address</Text> 
            </View>
            <View style={styles.inputView}>
              <TextInput underlineColorAndroid='transparent' placeholder='john@smith.com' style={styles.textInput} />  
            </View>
            <View style={styles.shadowView}>
              <Text style={styles.codeText}>Guardians</Text> 
              <Text style={styles.adminiText}>Administrator (you)</Text> 
              <Text style={styles.johnText}>John Smith</Text> 
              <Text style={styles.numberText}>+47 00000000{'\n'}1234</Text> 
            </View>

            <View style={styles.marginSecondView}>
              <TouchableOpacity style={styles.circleView}>
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.remainView}>
              <TouchableOpacity onPress={this.goSave.bind(this)}   style={styles.shadowButton}>
                <Text style={styles.nextText}>Save</Text> 
              </TouchableOpacity>  
            </View>
        </ScrollView >
      </View>
    )
  }
}
export default Welcome
