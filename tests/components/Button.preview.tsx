import React from 'react';
import { Button, View } from 'react-native';

export const Default = () => {
    return <Button title="Default" onPress={() => alert('default click')} />;
};

export const Yellow = () => {
    return <Button title="Primary button" color="#F2A900" onPress={() => alert('up we go')} />;
};

export const CallToAtion = () => {
    return (
        <View style={{ backgroundColor: 'lightblue', padding: 10 }}>
            <Button title="call to action" onPress={() => alert('cta')} />
        </View>
    );
};
