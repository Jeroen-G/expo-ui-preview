import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Comps = { [key: string]: () => React.ReactNode }[];

export function PreviewComponentScreen() {
    const { component, i } = useLocalSearchParams<{ component: string; i: string }>();

    function listFiles(): string[] {
        // @ts-ignore
        const files = require.context(
            process.env.EXPO_ROUTER_APP_ROOT + '/..',
            true,
            /\.preview.tsx$/
        );
        return files.keys().map((file: string) => file);
    }

    function compile(fileName: string): React.ReactNode[] {
        // @ts-ignore
        const files = require.context(
            process.env.EXPO_ROUTER_APP_ROOT + '/..',
            true,
            /\.preview.tsx$/
        );
        const components: Comps = files(fileName);
        return Object.keys(components).map(key => {
            // @ts-ignore
            return components[key]();
        });
    }

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
