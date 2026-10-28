import React from 'react';
import { View, Text } from 'react-native';

function Welcome({ code, name }) {
    return (
        <Text>Welcome to {code} - {name}</Text>
    );
}

class ModuleInfo extends React.Component {
    render() {
        return (
            <View>
                <Text></Text>
                <Text>These are my modules this semester:</Text>
                <Welcome code="C346" name="Mobile App Development" />
                <Welcome code="C304" name="Cloud Application Development" />
                <Welcome code="C339" name="Software Development" />
            </View>
        );
    }
}

export default ModuleInfo;