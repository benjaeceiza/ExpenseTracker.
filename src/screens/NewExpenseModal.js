import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const NewExpenseModal = () => {
    const [nombre, setNombre] = useState('');
    const [monto, setMonto] = useState(''); 
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState(''); 
    const [error, setError] = useState('');

    const onHandleSave = () => {

        if (!nombre || !monto || !categoria) {
            setError('Por favor, complete todos los campos obligatorios.');
            return;
        }
        setError('');

        alert(`Gasto guardado: ${nombre} - $${monto}`);

        setNombre('');
        setMonto('');
        setCategoria('');
        setDescripcion('');
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Nuevo Gasto</Text>
            </View>

            <View style={styles.card}>

                <TextInput 
                    value={nombre} 
                    onChangeText={setNombre} 
                    style={styles.input} 
                    placeholder='Nombre del gasto *' 
                    placeholderTextColor="#9CA3AF"
                />
                <TextInput 
                    value={monto} 
                    onChangeText={setMonto} 
                    style={styles.input} 
                    placeholder='Monto (ej. 1500) *' 
                    keyboardType="numeric" 
                    placeholderTextColor="#9CA3AF"
                />
                <TextInput 
                    value={categoria} 
                    onChangeText={setCategoria} 
                    style={styles.input} 
                    placeholder='Categoría (ej. Comida) *' 
                    placeholderTextColor="#9CA3AF"
                />
                
                <TextInput 
                    value={descripcion} 
                    onChangeText={setDescripcion} 
                    style={[styles.input, styles.textArea]} 
                    placeholder='Descripción (Opcional)' 
                    placeholderTextColor="#9CA3AF"
                    multiline={true} 
                    numberOfLines={3} 
                />

                <TouchableOpacity style={styles.saveButton} onPress={onHandleSave}>
                    <Text style={styles.saveButtonText}>Guardar Gasto</Text>
                </TouchableOpacity>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>

            <StatusBar style="light" />
        </View>
    );
};

export default NewExpenseModal;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F4F6F8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    headerContainer: {
        marginBottom: 25,
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
        padding: 25,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    input: {
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
        color: '#1F2937',
    },
    textArea: {
        minHeight: 80, 
        textAlignVertical: 'top',
    },
    saveButton: {
        backgroundColor: '#10B981',
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: '#EF4444',
        fontSize: 14,
        marginTop: 12,
        textAlign: 'center',
        fontWeight: '500',
    }
});