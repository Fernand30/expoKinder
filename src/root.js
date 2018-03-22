import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {addNavigationHelpers, StackNavigator} from 'react-navigation'
import SignUp from './screens/SignUp';
import Verify from './screens/Verify';
import Login from './screens/Login';
import Pay from './screens/Pay';
import Complete from './screens/Complete';
import ReplaceId from './screens/ReplaceId';
import DeleteId from './screens/DeleteId';
import Delivery from './screens/Delivery';
import FinderMap from './screens/FinderMap';
import AddPicture from './screens/AddPicture';
import Details from './screens/Details';
import Save from './screens/Save';
import Michael from './screens/Michael';
import Profile from './screens/Profile';
import SelectList from './screens/SelectList';
import MichaelMissing from './screens/MichaelMissing';
import Reunited from './screens/Reunited';
import NewKinder from './screens/NewKinder';
import Nowristband from './screens/Nowristband';
import Connect from './screens/Connect';

export const KindID = StackNavigator({
  SignUp: { screen: SignUp },
  Verify: { screen: Verify },
  Login: { screen: Login },
  Pay: { screen: Pay },
  Complete: { screen: Complete },
  ReplaceId: { screen: ReplaceId },
  DeleteId: { screen: DeleteId },
  Delivery: { screen: Delivery },
  FinderMap: { screen: FinderMap },
  AddPicture: { screen: AddPicture },
  Details: { screen: Details },
  Save: { screen: Save },
  Michael: { screen: Michael },
  Profile: { screen: Profile },
  SelectList: { screen: SelectList },
  MichaelMissing: { screen: MichaelMissing },
  Reunited: { screen: Reunited },
  NewKinder: { screen: NewKinder },
  Nowristband: { screen: Nowristband },
  Connect: { screen: Connect },
});


export default class AppWithNavigationState extends Component {
	 render() {
      return <KindID />
    }
  }
