import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop:30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        marginHorizontal: 12,
        paddingLeft: 10,
    },
    formButton: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#cb416b",
        paddingVertical: 14,
        marginLeft: 12,
        marginTop: 10,
    },
    formTextButton: {
        fontSize: 20,
        color: "#ffffff",
    },
    errorMessage: {
        fontSize: 10,
        color: "#f00",
        fontWeight: "bold",
        paddingLeft: 20,
        marginBottom: 20
    }
});

export default styles