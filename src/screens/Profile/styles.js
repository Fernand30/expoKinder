import {StyleSheet} from 'react-native'

const React = require("react-native");
const { Dimensions, Platform } = React;
import {Colors, Metrics, Images, Constants} from "../../themes"
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  statusBar:{
    height: 20
  },
  headerView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: Constants.Marin8,
    height: Constants.Marin20,
    borderWidth: 1,
    borderColor: '#d4d4d4'
  },
  arrow_back:{
    width: Constants.Marin4,
    height:Constants.Marin6,
  },
  kmark:{
    width: Constants.Marin8,
    height:Constants.Marin10,
  },
  notMatchView:{
    height: Constants.Marin14,
    backgroundColor: '#ef6e71',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop: Constants.Marin4
  },
  commonTextInput:{
    width: Constants.width*2/3,
    height:Constants.width*2/15,
    borderRadius: Constants.width*2/30,
    backgroundColor: 'white',
    textAlign:'center',
    justifyContent:'center',
    fontSize:Constants.Font25,
    paddingHorizontal: Constants.Marin6,
    
  },
  sideView:{
    flex: 1,
    alignItems: 'center'
  },
  shadowView:{
    marginTop: Constants.Marin6,
    marginHorizontal:Constants.Marin6,
    alignItems:'center',
    justifyContent:'center',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: '#f5f5f5',
    shadowOpacity: 1,
    paddingVertical: Constants.Marin4,
    backgroundColor:'white',
    elevation: 2,
  },
  commonText:{
    fontSize: Constants.Font25,
    textAlign: 'center',
    
    color: 'white',
    backgroundColor:'transparent'
  },
  marginView1:{
    marginTop: Constants.Marin16
  },
  marginView2:{
    marginTop: Constants.Marin10
  },
  marginView3:{
    marginTop: Constants.Marin6
  },
  marginView4:{
    marginTop: Constants.Marin4
  },
  marginView5:{
    marginTop: Constants.Marin2
  },
  bottomView: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'flex-end',
    paddingBottom: Constants.Marin6
  },
  textInput:{
    width:Constants.width*2/3,
    height: Constants.Marin14,
    fontSize: Constants.Font30,
    
    textAlign: 'center',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowColor: '#f7f7f7',
    shadowOpacity: 1
  },
  nextButton:{
    width: Constants.width/3,
    height: Constants.width/8,
    borderRadius: Constants.width/16,
    borderWidth: 1,
    borderColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: Constants.Marin6
  },
  rowTextView:{
    flexDirection:'row',
  },
  smallText:{
    fontSize: Constants.Font16,
    textAlign: 'center',
    
    color: 'white',
    backgroundColor:'transparent'
  },
  underlineSmallText:{
    fontSize: Constants.Font16,
    textAlign: 'center',
    
    color: 'white',
    textDecorationLine: 'underline',
    backgroundColor:'transparent'
  },
  alignItemCenter:{
    alignItems: 'center',
  },
  circleView:{
    marginVertical: Constants.Marin6,
    width: Constants.Marin12,
    height: Constants.Marin12,
    borderRadius: Constants.Marin6,
    backgroundColor:'#e76065',
    justifyContent:'center',
    alignItems:'center'
  },
  plusText:{
    color: 'white',
    fontSize: Constants.Font30,
    marginBottom:Constants.Marin1,
    backgroundColor:'transparent'
  },
  loginText:{
    fontSize: Constants.Font25,
    textAlign:'center',
    marginTop: Constants.Marin16
  },
  codeText:{
    fontSize: Constants.Font20,
    
    textAlign:'center',
  },
  adminiText:{
    marginTop: Constants.Marin1,
    fontSize: Constants.Font18,
    
    textAlign:'center',
  },
  johnText:{
    marginTop: Constants.Marin3,
    fontSize: Constants.Font25,
    textAlign:'center',
  },
  numberText:{
    fontSize: Constants.Font25,
    
    textAlign:'center',
  },
  nextText:{
    fontSize: Constants.Font25,
    
    textAlign:'center',
  },
  marginFirstView:{
    marginTop: Constants.Marin5,
    alignItems:'center'
  },
  marginSecondView:{
    marginTop: Constants.Marin5,
    alignItems:'center'
  },
  inputView:{
    marginTop: Constants.Marin1,
    justifyContent:'center',
    alignItems:'center',
  },
  remainView:{
    alignItems:'center',
    paddingBottom: Constants.Marin6
  },
  shadowButton:{
    width:Constants.Marin30,
    height:Constants.Marin15,
    borderRadius:Constants.Marin7,
    alignItems:'center',
    justifyContent:'center',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: '#f5f5f5',
    shadowOpacity: 1,
    backgroundColor:'white',
    elevation: 2,
  },
})
