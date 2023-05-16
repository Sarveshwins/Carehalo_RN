import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import Design from "../../style/Design";

export interface Style {
  mainContainer: ViewStyle;
  logo:ImageStyle
  
}

export default StyleSheet.create<Style>({
  mainContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:Design.white
  },
  logo:
  {
    height:200,
    width:200,
    resizeMode:'contain',
  }
  
});
