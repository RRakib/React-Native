import React, {Component} from "react"
import {Text , StyleSheet} from "react-native"

class Home extends Component{
    constructor(){
        super();
        this.state = {
            blink : false
        }
    }

    render(){
        return(
                <Text style={styles.welcome}>{this.props.msg}</Text>
        )
    }
}

    const styles = StyleSheet.create({
        welcome: {
            fontSize: 35,
            color: "#333",
            textAlign: 'center',
            margin: 10,
          }
    })

export default Home