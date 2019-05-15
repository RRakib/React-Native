import React , {Component} from "react"
import {Alert, TextInput, StyleSheet, View, Text , TouchableHighlight, ScrollView} from "react-native"


const styles = StyleSheet.create({
    size : {
        width: 412,
        fontSize: 25,
        paddingLeft: 15,
        marginBottom: 10,
        borderLeftWidth: 4,
        borderColor: "steelblue",
    },
    show : {
        width: 412,
        height: 50,
        marginTop:5,
        marginBottom:5,
        borderRadius: 5,
        paddingLeft: 10,
        borderLeftWidth: 6,
        alignItems:'center',
        flexDirection: 'row',
        borderColor: "steelblue",
        backgroundColor: "lightgreen",
    },
    text : {
        fontSize: 25,
        color: "#fff",
    },
    button : {
        width: 410,
        height: 50,
        borderRadius: 5,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "steelblue",
    }
})


// Class Based Component
class TextInputC extends Component{
    constructor(){
        super();
        this.state = {
            firstName : "",
            lastName : "",
            output : [],
        }
    }

    // Input Filed Handler
    handleChange = (name , value) => {
        this.setState({
            [name] : value,
        })
    }

    // Submit Button Handler
    handlePress = () => {
        const fullName = this.state.firstName + " " + this.state.lastName
        this.state.firstName && this.state.lastName &&
        this.setState({
            output : [...this.state.output , fullName],
            lastName : "",       
            firstName : ""
        })
        this.state.firstName && this.state.lastName && Alert.alert("FirstName: " + this.state.firstName + "\n" + "LastName: " + this.state.lastName)
    }


    // Rendering Component
    render(){
        const output = this.state.output.map(item => {
            return(
                <View style={styles.show}>
                    <Text style={styles.text} style={{color: "#333", fontSize : 25}}>
                        {item}
                    </Text>
                </View>
            )
        })

        // Returning The DOM
        return(
            <ScrollView>
                <View>
                    <TextInput
                        style={styles.size}
                        value={this.state.firstName}
                        placeholder="Enter your first name"
                        onChangeText={(value) => this.handleChange("firstName" , value)}
                    />
                    <TextInput
                        style={styles.size}
                        value={this.state.lastName}
                        placeholder="Enter your last name"
                        onChangeText={(value) => this.handleChange("lastName" , value)}
                    />
                    <TouchableHighlight
                        style={styles.button}
                        underlayColor = "#508dbf"
                        onPress={this.handlePress}
                    >
                        <Text style={styles.text}>Submit</Text>
                    </TouchableHighlight>  
                    
                    {/* // Display Output */}
                    {output}

                </View>
            </ScrollView>
        )
    }
}

export default TextInputC