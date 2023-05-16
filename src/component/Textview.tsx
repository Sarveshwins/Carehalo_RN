import React from "react";
import {Text} from "react-native";

function Textview(props: any) 
{
    return (
        <Text style={{
            fontSize:props.font_size,
            color:props.color,
            marginTop:props.margin_top,
            marginBottom:props.margin_bottom,
            marginLeft:props.margin_left,
            marginRight:props.margin_right,
            marginHorizontal:props.margin_horizontal,
            marginVertical:props.margin_vertical,
            textDecorationLine:props.underline,
        }}>{props.text}</Text>
    );
}

export default Textview;
