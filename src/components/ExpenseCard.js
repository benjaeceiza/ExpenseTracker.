import { StyleSheet, Text, View } from 'react-native';

const ExpenseCard = ({ expense }) => {
    return (
        <View style={styles.expenseItem}>
            <View style={styles.expenseHeaderRow}>
                <Text style={styles.expenseName}>{expense.nombre}</Text>
                <Text style={styles.expenseAmount}>${expense.monto}</Text>
            </View>
            
            <Text style={styles.expenseCategory}>{expense.categoria}</Text>
            <Text style={styles.expenseDescription}>{expense.descripcion}</Text>
        </View>
    );
};

export default ExpenseCard;

const styles = StyleSheet.create({
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