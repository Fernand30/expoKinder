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

  goOrder(){
    
  }

  render(){
    const { navigate } = this.props.navigation;
  	return(
      <View style = {styles.container}>
      <MyStatusBar backgroundColor="white"/>
          <View style={styles.headerView}>
              <View style={{flex:1}}>
               
              </View>
              <View style={{flex:1,alignItems:'center'}}>
              <Image source={Images.kmark} style={styles.kmark}/>
              </View>
              <View style={{flex:1}}/>
          </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>Choose Colour</Text> 
            </View>
            <View style={styles.colorView}>
              <View style={styles.circleView1}>
              </View>
              <View>
                <View style={styles.circleView2}/>
                <View style={styles.absoluteCircle}>
                  <Text style={styles.smallText}>2</Text>
                </View>
              </View>
              <View style={styles.circleView3}>
              </View>
              <View style={styles.circleView4}>
              </View>
            </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.clickText}>Click on the number to add or remove units</Text> 
            </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>Contact information</Text> 
            </View>
            <View style={styles.shadowView}>
             <Text style={styles.miniText}>Telephone number (with country code)</Text> 
             <Text style={styles.smallText}>(+47) 000 00 000</Text> 
            </View>
            <View style={styles.shadowView}>
             <Text style={styles.miniText}>Email address</Text> 
             <Text style={styles.smallText}>michael.smith@mail.com</Text> 
            </View>
            <View style={styles.marginSecondView}>
              <Text style={styles.codeText}>Postal information</Text> 
            </View>
            <View style={styles.shadowView}>
             <Text style={styles.miniText}>Select country</Text> 
             <View style={styles.countrySelect}>
                <View style={{width:30}}/>
                <View style={{width:150,alignItems:'center'}}>
                  <Text style={styles.smallText}>Norway</Text> 
                </View>
                <View style={{width:30}}>
                  <TouchableOpacity>
                    <Image source={Images.countryCheck} style={styles.countryCheck}/>
                  </TouchableOpacity>
                </View>
             </View>   
            </View>
            <View style={styles.shadowView}>
             <Text style={styles.miniText}>Name</Text> 
             <Text style={styles.smallText}>Michael Smith</Text> 
            </View>
            <View style={styles.shadowView}>
             <Text style={styles.miniText}>Address</Text> 
             <Text style={styles.smallText}>Filipstad brygge 1</Text> 
            </View>
            <View style={styles.shadowView}>
             <Text style={styles.miniText}>Postal code</Text> 
             <Text style={styles.smallText}>0220</Text> 
            </View>
            <View style={styles.remainView}>
              <TouchableOpacity onPress={this.goOrder.bind(this)} style={styles.shadowButton}>
                <Text style={styles.nextText}>Order</Text> 
              </TouchableOpacity>  
            </View>
      </View>
    )
  }
}
export default Welcome
