import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';



export default function Home(){
    return(
        <View style={styles.container}>
            <Image 
                source={require('../../../assets/RanniDarkMoon.png')} 
                style={styles.logo}
            />

            <Text style={styles.itemName}>
                Home 
            </Text>
            <Text style={styles.itemDescription}> TEMPLATE FOR LAZY PEOPLE (por algum motivo nao abre a tela login se nao for em outra guia)</Text> 
            <View style={styles.viewLinks}>
                
                <Link to={{screen: 'Login'}}>
                    <Text style={styles.LinkBtn}>Sair</Text>
                    </Link>
            </View>
        </View>
    )
}