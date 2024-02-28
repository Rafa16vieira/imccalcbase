import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 10,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    numberImc: {
        fontSize: 48,
        color: "#cb416b",
        fontWeight: "bold",
    },
    information: {
        fontSize: 18,
        color: "#cb416b",
        fontWeight: "bold",
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    shareButton: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingVertical: 5,
    },
    shareText: {
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    }
});

export default styles