import React, {Component} from "react"
import {Text , View, StyleSheet} from "react-native"

class Home extends Component{
    render(){
        return(
                <View style={styles.container}>
                    <View style={styles.subContainer1}>
                        <Text style={styles.text}>BOX 1</Text>
                    </View>
                    <View style={styles.subContainer2}>
                        <Text style={styles.text}>BOX 2</Text>
                    </View>
                    <View style={styles.subContainer3}>
                        <Text style={styles.text}>BOX 3</Text>
                    </View>
                </View>
        )
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            display: "flex",
            flexDirection: 'row',
            backgroundColor: "powderblue"
        },
        subContainer1: {
            flex: 1,
            height: 100,
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#cff2f7"
        },
        subContainer2: {
            flex: 1,
            height: 100,
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "skyblue"
        },
        subContainer3: {
            flex: 1,
            height: 100,
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "steelblue"
        },
        text : {
            color: "#444",
            fontSize: 18,
        }
    })

export default Home