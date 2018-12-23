import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SearchBar } from "antd-mobile-rn";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        value: ""
    };

    onChange = tmp => {
        this.setState({ value: tmp });
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}
                >
                    <View style={styles.welcomeContainer}>
                        <SearchBar
                            placeholder="Pathologie"
                            cancelText="OK"
                            maxLength={30}
                            onChange={this.onChange}
                            // onFocus={() => } Afficher liste des pathologies pour sélection
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    contentContainer: {
        paddingTop: 30
    },
    welcomeContainer: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20
    }
});
