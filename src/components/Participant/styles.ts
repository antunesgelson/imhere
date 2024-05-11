import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#1f1e25',
        marginBottom: 10,
    },
    name: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        color: 'white',
    },
    button: {
        width: 56,
        height: 56,
        color: 'white',
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    },

    buttonText: {
        color: 'white',
        fontSize: 24,
    },
})