import React, { ReactElement, useEffect, useState } from "react";
import { StatusBar, Text, View, Image } from "react-native";
import SS from 'react-native-splash-screen'
import styles from "./styles";
import Imageview from "../../component/Imageview";
import images from "../../style/images";
function Splash(props: any) {
    useEffect(() => {
        SS.hide()
        setTimeout(() => {
            props.navigation.navigate("Welcome")
        }, 2500)
    }, [])
    return (
        <View style={styles.mainContainer}>
            <Imageview
                width={200}
                height={200}
                url={images.splash_logo}
                resize={"contain"}
            />
        </View>
    );
}

export default Splash;
