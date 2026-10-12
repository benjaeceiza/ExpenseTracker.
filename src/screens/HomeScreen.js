import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            {/* Contenedor del Título Principal */}
            <View style={styles.headerContainer}>
                <Text style={styles.title}>ExpenseTracker</Text>
            </View>

            {/* Tarjeta con el contenido de bienvenida */}
            <View style={styles.card}>
                <Text style={styles.subtitle}>¡Bienvenido a ExpenseTracker!</Text>
                <Text style={styles.description}>
                    ExpenseTracker es una aplicación diseñada para ayudarte a registrar, 
                    gestionar y controlar tus gastos diarios de una manera rápida y sencilla.
                </Text>
            </View>

            <StatusBar style="light" />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F4F6F8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    headerContainer: {
        marginBottom: 40, 
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#10B981', 
        letterSpacing: 0.5,
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        paddingVertical: 35,
        paddingHorizontal: 25,
        borderRadius: 20, 
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    subtitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#1F2937', 
        marginBottom: 15,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#4B5563', 
        textAlign: 'center',
        lineHeight: 24, 
    },
});