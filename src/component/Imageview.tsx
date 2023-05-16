import React from "react";
import { View, Image } from "react-native";
import FastImage from 'react-native-fast-image'

function Imageview(props: any) {
    return (
        <View>
            {
                props.type=="server"
                ?
                <FastImage
                style={{
                    width: props.width,
                    height: props.height
                }}
                source={{
                    uri: props.url,
                }}
                resizeMode={
                    props.resize == "contain" ? FastImage.resizeMode.contain
                        : props.resize == "cover" ? FastImage.resizeMode.cover
                            : props.resize == "stretch" ? FastImage.resizeMode.stretch
                                : FastImage.resizeMode.contain
                }
            />
            :
            
            <Image style={{
                width:props.width,
                height:props.height,
                resizeMode:props.resize
            }}
            source={props.url}
            >

            </Image>
            }
           
        </View>

    );
}

export default Imageview;
