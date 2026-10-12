import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import NewExpenseModal from '../screens/NewExpenseModal';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen 
        name="NewExpense" 
        component={NewExpenseModal} 
        options={{ 
          presentation: 'transparentModal', 
          animation: 'fade',   
          contentStyle: { backgroundColor: 'transparent' } 
        }} 
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;