import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { compile } from './lib/compile';
import { listFiles } from './lib/listFiles';

export function PreviewComponentScreen() {
    const { component, i } = useLocalSearchParams<{ component: string; i: string }>();

    const file = listFiles()[Number(i)];
    const elements = compile(file);

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: component }} />
            {elements.map((element, index) => (
                <View key={index}>{element}</View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
