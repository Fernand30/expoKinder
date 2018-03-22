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
    this.state=({
      select1: true,
      select2: false,
    })
  }
  
  static navigationOptions = {
    header: false,
  };

  goBack(){
    this.props.navigation.goBack()
  }

  check1(){
    this.setState({
      select1:!this.state.select1
    })
  }

  check2(){
    this.setState({
      select2:!this.state.select2
    })
  }

  goDelete(){
    this.props.navigation.navigate('MichaelMissing')
  }

  goReplace(){
    this.props.navigation.navigate('ReplaceId')
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
          <View style={styles.marginSecondView}>
            <Text style={styles.codeText}>Which wristband have you lost?</Text> 
          </View>
          <TouchableOpacity onPress={this.check1.bind(this)} style={styles.listView}>
            {(this.state.select1)?<Text style={styles.selectcodeText}>Michael</Text>:<Text style={styles.codeText}>Michael</Text> }
            {(this.state.select1)?<Image source={Images.check} style={styles.check}/>:null}
          </TouchableOpacity> 
          <TouchableOpacity onPress={this.check2.bind(this)} style={styles.listView}>
            {(this.state.select2)?<Text style={styles.selectcodeText}>Mary</Text>:<Text style={styles.codeText}>Mary</Text> }
            {(this.state.select2)?<Image source={Images.check} style={styles.check}/>:null}
          </TouchableOpacity>   
          <View style={styles.rowView}>
            <TouchableOpacity onPress={this.goDelete.bind(this)} style={styles.shadowButton}>
              <Text style={styles.codeText}>Delete</Text> 
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goReplace.bind(this)} style={styles.shadowButton}>
              <Text style={styles.codeText}>Replace</Text> 
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}
export default Welcome
