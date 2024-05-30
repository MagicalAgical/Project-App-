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

  export default class FirstInningScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          score:0,
          wickets:0,
          currentScore:0,
          
        };
    }

    


    render() {
        return (
          <View style={styles.background}>
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.displayTextTitle}>
                    <Text>First Inning Screen</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.backButton} onPress={() =>
                        this.props.navigation.navigate("Home")
                    }>
                        <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                </View>

                
                <View style={styles.runView}>
                <TouchableOpacity onPress={() => this.setState({ currentScore: this.state.currentScore = 1, score:this.state.score+1 })}>
                

                <Text style={{margin:2, padding:5}}>1 </Text>

                
                </TouchableOpacity>

                

                <TouchableOpacity style={styles.wicketButton} onPress={() => this.setState({ wickets: this.state.wickets + 1 })}>

                <Text>Run Out</Text>
                
                </TouchableOpacity>


                

                </View>

                <View style={styles.runView}>
                <TouchableOpacity onPress={() => this.setState({ score: this.state.score + 2, currentScore: this.state.currentScore = 2 })}>
                

                <Text style={{margin:2, padding:5}}>2 </Text>
                
                
                </TouchableOpacity >

                <TouchableOpacity style={styles.wicketButton} onPress={() => this.setState({ wickets: this.state.wickets + 1 })}>

                <Text>Catch</Text>
                
                </TouchableOpacity>


                </View>
                <View style={styles.runView}>

                <TouchableOpacity onPress={() => this.setState({ score: this.state.score + 3, currentScore:this.state.currentScore = 3 })}>
                

                <Text style={{margin:2, padding:5}}>3 </Text>
                
                
                </TouchableOpacity>

                <TouchableOpacity style={styles.wicketButton} onPress={() => this.setState({ wickets: this.state.wickets + 1,  })}>

                <Text>Stumped</Text>
                
                </TouchableOpacity>

                </View>
                <View style={styles.runView}>
                <TouchableOpacity onPress={() => this.setState({ score: this.state.score + 4 , currentScore:this.state.currentScore = 4})}>
                

                <Text style={{margin:2, padding:5}}>4 </Text>
                
                
                </TouchableOpacity>

                <TouchableOpacity style={styles.wicketButton} onPress={() => this.setState({ wickets: this.state.wickets + 1 })}>

                <Text>Bowled</Text>
                
                </TouchableOpacity>

                </View>
                <View style={styles.runView}>
                <TouchableOpacity onPress={() => this.setState({ score: this.state.score + 5 , currentScore:this.state.currentScore = 5})}>
                

                <Text style={{margin:2, padding:5}}>5 </Text>
                
                
                </TouchableOpacity>

                <TouchableOpacity style={styles.wicketButton} onPress={() => this.setState({ wickets: this.state.wickets + 1 })}>

                <Text>Hit Wicket</Text>
                
                </TouchableOpacity>

                </View>
                <View style={styles.runView}>
                <TouchableOpacity onPress={() => this.setState({ score: this.state.score + 6 , currentScore:this.state.currentScore = 6})}>
                

                <Text style={{margin:2, padding:5}}>6 </Text>
                
                
                </TouchableOpacity>

                <TouchableOpacity style={styles.wicketButton} onPress={() => this.setState({ wickets: this.state.wickets + 1 })}>

                <Text>Other Wicket</Text>
                
                </TouchableOpacity>

                </View>

                <View>

                <Text style={styles.scoreText}> Score:{this.state.score}</Text>
                <Text style={styles.wicketText}>Wickets:{this.state.wickets}</Text>
                
                </View>
                <View style={styles.resetScore}>
                <TouchableOpacity style={styles.resetButton} onPress={() => this.setState({ score: 0, wickets:0, currentScore:0 })}>

                <Text>Reset</Text>

              
                </TouchableOpacity>
                </View>

                

                <View style={styles.currentScore}>
                <Text> CurrentScore:{this.state.currentScore} </Text>
                </View>



                <View>

                </View>

                


                
                
                    
            </View>
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    displayTextTitle: {
      flex: 0.15,
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      fontSize:60,
      marginTop:30,
      fontSize:30,
      fontFamily:"Apple Chancery, cursive",
      color:"red"
    },
    textTitle:{
      fontFamily:"Apple Chancery, cursive",
      color:"red"
    },
    routeText: {
        fontSize:15,
        marginRight:250,
        marginBottom:150,
        width:40,
        borderRadius:10,
        backgroundColor:"white"
    },
    runView:{
      flexDirection:'row',
      borderRadius:10,
      width:40,
      backgroundColor:"#2AEB1D",
      justifyContent:"center",
      marginBottom:5,
      alignItems:"center",
      marginTop:0,
      marginRight:5,
      marginLeft:10,
      justifyContent:"space-between",
      alignItems:"center"
      
    
    },
    scoreText:{
      color:"#2AEB1D",
      fontFamily:"Courier, monospace",
      fontWeight:"900",
      fontSize:20,
    },
    resetButton:{
      borderRadius:100,
      width:100,
      height:30,
      marginTop:10,
      backgroundColor:"red",
      alignItems:"center",
      justifyContent:"center",
      marginLeft:210

    },
    resetScore:{
      width:100,
      height:40,
      borderRadius:20,
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"Georgia, serif"

    },
    backButton:{
      width:50,
      height:20,
      alignItems:"center",
      borderRadius:5,
      backgroundColor:"#38ACDF",
      marginBottom:80
    },
    wicketButton:{
      marginLeft:200,
      marginTop:-2,
      borderRadius:10,
      width:90,
      height:40,
      backgroundColor:"red",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",


    },
    wicketText:{
      justifyContent:"space-between",
      marginLeft:220,
      marginBottom:0,
      color:"red",
      fontFamily:"Courier, monospace",
      fontWeight:'900',
      fontSize:20,
    },
    background:{
      backgroundColor:"#3B38DF"
    },
    currentScore:{ 
      width:100,
      height:45,
      backgroundColor:"#6B9DD9",
      borderRadius:15

    },
    removeRuns1:{
      marginBottom:10,
      marginTop:-30,
      width:30,
    height:30,
    borderRadius:10,
    backgroundColor:"red",
    justifyContent:"center"
    },

    removeRuns2:{
    marginBottom:20,
    marginLeft:40,
    marginTop:-38,
    width:30,
    height:30,
    borderRadius:10,
    backgroundColor:"red",
    justifyContent:"center"

    },
    removeRuns3:{
    marginBottom:100,
    marginTop:-50,
    marginLeft:80,
    width:30,
    height:30,
    borderRadius:10,
    backgroundColor:"red",
    justifyContent:"center"

    },
    removeRuns4:{
    marginBottom:100,
    marginTop:-128,
    marginLeft:120,
    width:30,
    height:30,
    borderRadius:10,
    backgroundColor:"red",
    justifyContent:"center"

    },
    removeRuns5:{
    marginBottom:100,
    marginTop:-130,
    marginLeft:160,
    width:30,
    height:30,
    borderRadius:10,
    backgroundColor:"red",
    justifyContent:"center"

    },
    removeRuns6:{
    marginBottom:100,
    marginTop:-132,
    marginLeft:205,
    width:30,
    height:30,
    borderRadius:10,
    backgroundColor:"red",
    justifyContent:"center"

    }

    });


