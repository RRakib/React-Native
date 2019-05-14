import React , {Component} from "react"
import {TextInput, StyleSheet, View, Text} from "react-native"


const styles = StyleSheet.create({
    size : {
        width: 350,
        fontSize: 25,
    },
    show : {
        padding:5,
        width: 350,
        fontSize: 25,
        color: "#fff",
        backgroundColor: "#555",
    }
})



class TextInputC extends Component{
    constructor(){
        super();
        this.state = {
            text : "",
            bol : false
        }
    }
    handleChange = (value) => {
        if(value === ""){
            this.setState({
                bol : false
            })
        }
        this.setState({
            text : value,
            bol : true
        })
    }
    render(){
        return(
            <View>
                <TextInput
                    style={styles.size}
                    placeholder="Insert Some Text"
                    onChangeText={(value) => this.handleChange(value)}
                />

                {this.state.bol?  <Text style={styles.show}>{this.state.text}</Text> : null}
            </View>
        )
    }
}

export default TextInputC