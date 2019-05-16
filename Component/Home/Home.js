import Me from "../../Image/me.png"
import Me1 from "../../Image/1.jpg"
import Me2 from "../../Image/2.jpg"
import Me3 from "../../Image/3.jpg"
import Me4 from "../../Image/4.png"
import Me5 from "../../Image/5.jpg"
import React, {Component} from "react"
import {TouchableHighlight , View, StyleSheet, Image, Text} from "react-native"

class Home extends Component{
    constructor(){
        super()
        this.state = {
            touched : false,
            image : ""
        }
    }

    handlePress = (value) => {
        this.setState((pS) => ({
            touched : !pS.touched,
            image : value
        }))
    }

    render(){
        return(
            <React.Fragment>
                <View style={styles.container}>
                    <View style={styles.subContainer1}>
                        <TouchableHighlight onPress={() => this.handlePress(Me)}>
                            <Image style={styles.imageD} source={Me}/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.subContainer2}>
                        <TouchableHighlight onPress={() => this.handlePress(Me1)}>
                            <Image style={styles.imageD} source={Me1}/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.subContainer3}>
                        <TouchableHighlight onPress={() => this.handlePress(Me2)}>
                            <Image style={styles.imageD} source={Me2}/>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.subContainer3}>
                        <TouchableHighlight onPress={() => this.handlePress(Me3)}>
                            <Image style={styles.imageD} source={Me3}/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.subContainer2}>
                        <TouchableHighlight onPress={() => this.handlePress(Me4)}>
                            <Image style={styles.imageD} source={Me4}/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.subContainer1}>
                        <TouchableHighlight onPress={() => this.handlePress(Me5)}>
                            <Image style={styles.imageD} source={Me5}/>
                        </TouchableHighlight>
                    </View>

                    <View>
                        {this.state.touched? 
                        <View>
                            <TouchableHighlight onPress={this.handlePress}>
                                <Image style={styles.imageW} source={this.state.image}/>
                            </TouchableHighlight>
                        </View> : null}
                    </View>
                </View>
                
                </React.Fragment>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            marginBottom: 5,
            flexWrap: 'wrap',
            flexDirection: 'row',
            backgroundColor: "blue"
        },
        subContainer1: {
            flex: 1,
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#cff2f7"
        },
        subContainer2: {
            flex: 1,
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "skyblue"
        },
        subContainer3: {
            flex: 1,
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "steelblue"
        },
        imageD: {
            width: 100,
            height: 100,
        },
        imageW: {
            width: 395,
            height: 400,
        
        },
        text : {
            color: "#444",
            fontSize: 18,
        },
        close : {
            fontSize: 18,
            color: "#eee",
            display: "flex",
            textAlign: "center",
            padding: 10,
            marginBottom: 5,
            backgroundColor: "#333",
        }
    })

export default Home