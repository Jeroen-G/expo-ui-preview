import { Link } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { listFiles } from './lib/listFiles';

export function PreviewOverviewScreen() {
    const groupedFiles = new Map<string, { path: string; parent: string; name: string }[]>();

    listFiles().forEach(file => {
        const groups = file.split('/').slice(0, -1).slice(1);

        const c = {
            path: file,
            parent: groups[0],
            name: file.split('/').slice(-1)[0].replace('.preview.tsx', ''),
        };

        if (!groupedFiles.has(c.parent)) {
            groupedFiles.set(c.parent, []);
        }

        groupedFiles.get(c.parent)?.push(c);
    });

    return (
        <View style={styles.container}>
            {Array.from(groupedFiles.keys()).map((groupKey, index) => {
                return (
                    <View key={index}>
                        <Text style={styles.group}>{groupKey}</Text>
                        {groupedFiles.get(groupKey)?.map((c, index) => {
                            return (
                                <Link
                                    href={`/preview/button?i=${index}`}
                                    key={index}
                                    style={[styles.listItem]}>
                                    {c.name}
                                </Link>
                            );
                        })}
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    group: {
        padding: 10,
        fontWeight: 'bold',
    },
    listItem: {
        paddingLeft: 20,
    },
});
