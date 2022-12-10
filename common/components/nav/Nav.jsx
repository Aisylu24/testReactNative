import React from 'react';
import {List} from '../../../features/list/List';
import {Photo} from '../../../features/photo/Photo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Nav = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name={'List'}
                    component={List}
                    options={{
                        headerTitle: 'Welcome',
                    }}
                />
                <Stack.Screen
                    name={'Photo'}
                    component={Photo}
                    options={{headerTitle: 'Back',}}

                />
            </Stack.Navigator>
    );
};

