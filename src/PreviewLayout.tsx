import { Stack } from 'expo-router';
import React from 'react';

export const unstable_settings = {
    initialRouteName: 'index',
};

export function PreviewLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="[component]" options={{ presentation: 'modal' }} />
        </Stack>
    );
}
