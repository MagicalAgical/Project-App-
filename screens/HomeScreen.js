import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />


                
                
                
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Cricket Scoring App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("FirstInningScreen")
                    }>
                        <Text style={styles.routeText}>First Inning</Text>
                        
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SecondInningScreen")
                    }>
                        <Text style={styles.routeText}>Second Inning</Text>
                       
                        
                    </TouchableOpacity>
                    

                  

                
                
                    
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#a396d6"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        width:270,
        borderRadius: 32,
        backgroundColor: 'white',
        marginLeft:30,
        marginRight:10,
        backgroundColor:"#c8c1e3",
    
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
        color: "black"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        fontFamily:"cursive",
        
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 60,
        paddingLeft: 30,
        fontFamily:"cursive",
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center"
    },
    cricketImage:{
      width:300,
      marginTop:160
    }
});