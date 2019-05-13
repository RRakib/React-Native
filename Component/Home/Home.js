import React, {Component} from "react"
import {Text , StyleSheet} from "react-native"

class Home extends Component{
    constructor(){
        super();
        this.state = {
            blink : false
        }
        setInterval(() => (
            this.setState((prevState) => ({
                blink : !prevState.blink
            }))
        ), 500);
    }

    render(){
        if(!this.state.blink){
            return null
        }
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