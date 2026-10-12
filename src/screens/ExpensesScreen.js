import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const expenses = [
    { id: 1, nombre: 'Supermercado', monto: 25000, categoria: 'Compras', descripcion: 'Compra mensual de alimentos' },
    { id: 2, nombre: 'Combustible', monto: 18000, categoria: 'Transporte', descripcion: 'Carga de tanque lleno' },
    { id: 3, nombre: 'Internet', monto: 32000, categoria: 'Servicios', descripcion: 'Abono mensual de fibra óptica' },
];

const ExpensesScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Gastos Recientes</Text>
                <Pressable style={styles.addButton} onPress={() => alert('Agregar nuevo gasto')}>
                    <Text style={styles.addButtonText}>+</Text>
                </Pressable>
            </View>

         
            <ScrollView contentContainerStyle={styles.listContainer}>
                {expenses.map((expense) => (
                    <View key={expense.id} style={styles.expenseItem}>
              
                        <View style={styles.expenseHeaderRow}>
                            <Text style={styles.expenseName}>{expense.nombre}</Text>
                            <Text style={styles.expenseAmount}>${expense.monto}</Text>
                        </View>
                        
                        <Text style={styles.expenseCategory}>{expense.categoria}</Text>
                        
                 
                        <Text style={styles.expenseDescription}>{expense.descripcion}</Text>
                    </View>
                ))}
            </ScrollView>
            
            <StatusBar style="light"/>
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
    },
    expenseItem: {
        backgroundColor: '#fff',
        padding: 18,
        marginBottom: 15,
        borderRadius: 12, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    expenseHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 6,
    },
    expenseName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    expenseAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EF4444', 
    },
    expenseCategory: {
        fontSize: 14,
        color: '#10B981',
        fontWeight: '600',
        marginBottom: 4,
    },
    expenseDescription: {
        fontSize: 14,
        color: '#6B7280',
    }
});