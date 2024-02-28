import react from "react";
import { SafeAreaView, TouchableOpacity, Share, View, Text } from "react-native";
import styles from "./style";

export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + props.resultImc
        })
    }
    return(
        <SafeAreaView style={styles.resultImc}>
            <View style={styles.boxShareButton}>
            {props.resultImc != null ?
                <TouchableOpacity onPress={onShare} style={styles.shareButton}>
                    <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>
                :
                <View/>
            }
            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </SafeAreaView>
    );
}