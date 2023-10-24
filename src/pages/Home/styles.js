import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundImage: 'url("https://eldenring.wiki.fextralife.com/file/Elden-Ring/elden-ring-wiki-guide-walkthrough-background-min.jpg")',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        width: '401px',
        height: '401px',
        marginBottom: '40px'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px',
        
    },
    itemName: {
        fontSize: '20px',
        color: 'Black',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    itemDescription: {
        fontSize: '14px',
        color: 'Black',
        padding: 20,
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: '#282828',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btnTxt: {
        fontSize: '22px',
        color: 'Black'
    },
    LinkBtn: {
        fontSize: '15px',
        color: 'Black',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
        border: '2px solid Black',
        fontWeight: 'bold',
    }
});

export default styles;