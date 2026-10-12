import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import ExpenseCard from '../components/ExpenseCard';

const expenses = [
    { id: 1, nombre: 'Supermercado', monto: 25000, categoria: 'Compras', descripcion: 'Compra mensual de alimentos' },
    { id: 2, nombre: 'Combustible', monto: 18000, categoria: 'Transporte', descripcion: 'Carga de tanque lleno' },
    { id: 3, nombre: 'Internet', monto: 32000, categoria: 'Servicios', descripcion: 'Abono mensual de fibra óptica' },
];

const ExpensesScreen = () => {
    const navigation = useNavigation(); 

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Gastos Recientes</Text>
                <Pressable style={styles.addButton} onPress={() => navigation.navigate('NewExpense')}>
                    <Text style={styles.addButtonText}>+</Text>
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={styles.listContainer}>
                {expenses.map((expense) => (
                    <ExpenseCard key={expense.id} expense={expense} />
                ))}
            </ScrollView>
            
            <StatusBar style="light" translucent={true} backgroundColor="transparent" />
        </View>
    );
};

export default ExpensesScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F4F6F8',
    },
    headerContainer: {
        backgroundColor: '#10B981',
        paddingTop: 20, 
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    addButton: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#10B981',
        marginTop: -3, 
    },
    listContainer: {
        padding: 20,
        paddingBottom: 40, 
    }
});