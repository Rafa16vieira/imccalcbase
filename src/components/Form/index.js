import react, { useState } from "react";
import { TextInput, View, Text, Vibration, TouchableOpacity, Keyboard, Pressable } from "react-native";
import ResultImc from "./ResultIMC/";
import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)



    function imcCalculator(){
        return setImc(
            (
              (weight.replace(",", ".") * 1) /
              (height.replace(",", ".") * 1 * (height.replace(",", ".") * 1))
            ).toFixed(2)
          )
        }

    function verificationImc(){
        if (imc == null){
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*")
            
        }
    }

    function validationImc(){
        if(weight != null && height != null){
            Keyboard.dismiss()
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual a: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
            return
        }
        Keyboard.dismiss()
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e a altura")
    }


    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.formInput} onChangeText={(newHeight) => setHeight(newHeight)} value={height} placeholder="Ex. 1.75" keyboardType="numeric"/>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.formInput} onChangeText={(newWeight) => setWeight(newWeight)} value={weight} placeholder="Ex. 80.125" keyboardType="numeric"/>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TouchableOpacity style={styles.formButton} onPress={validationImc}>
                    <Text style={styles.formTextButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </Pressable>
    );
}