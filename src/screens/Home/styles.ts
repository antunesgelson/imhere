import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        padding: 20,
    },
    eventName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    eventDate: {
        fontSize: 16,
        color: 'gray'
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#333',
        padding: 10,
        color: 'white',
        borderRadius: 5,
        marginRight: 10,
    },

    button: {
        width: 56,
        height: 56,
        color: 'white',
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    },

    buttonText: {
        color: 'white',
        fontSize: 24,
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 36,
    },

    listEmptyText: {
        color: 'white',
        textAlign: 'center'
    }
})