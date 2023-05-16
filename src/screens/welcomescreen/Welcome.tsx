import React, { ReactElement, useEffect, useState } from "react";
import { StatusBar, Text, View, Image } from "react-native";
import SS from 'react-native-splash-screen'
import styles from "./styles";
import Textview from "../../component/Textview";
import Design from "../../style/Design";

function Welcome(props: any) {
    useEffect(() => {
    }, [])

    return (
        <View style={styles.mainContainer}>
            <Textview
                text={"WELCOME SCREEN"}
                font_size={Design.font_15}
                margin_top={10}
            />
           
        </View>
    );
}


export default Welcome;
