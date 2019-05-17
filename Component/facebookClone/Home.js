import React, {Component} from "react"
import Messenger from "../../Image/messenger.png"
import Search from "../../Image/search.png"
import Camera from "../../Image/camera.png"
import i1 from "../../Image/TopICon/1.png"
import i2 from "../../Image/TopICon/2.png"
import i3 from "../../Image/TopICon/3.png"
import i4 from "../../Image/TopICon/4.png"
import i5 from "../../Image/TopICon/5.png"
import i6 from "../../Image/TopICon/6.png"
import Post from "./Post/Post"
import {View, StyleSheet, Image, TextInput, StatusBar} from "react-native"


const styles = StyleSheet.create({
    search : {
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: "center",
        flexDirection : "row",
        backgroundColor : "#4267b2",
        justifyContent: "space-between",
    },
    searchBar : {
        flexDirection : "row",
        alignItems: "center",
        justifyContent : "center",
    },
    searchIcon : {
        width: 27,
        height: 27,
    },
    topIcon : {
        width: 25,
        height: 25,
    },
    topContainer : {
        padding: 10,
        width: "100%",
        borderColor: "#ddd",
        flexDirection: "row",
        borderBottomWidth: 1,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
    },
    mainComponent : {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor : "#ccc"
    },

})


class Home extends Component{
    render(){
        return(
           <View style={styles.mainComponent}>
                <StatusBar backgroundColor = "#4267b2" />
                {/* Search */}
                <View style={styles.search}>
                    <Image style={styles.searchIcon} source={Camera}/>
                    <View style={styles.searchBar}>
                        <View style={{height: 40, paddingTop: 12, borderBottomWidth: .5, borderColor: "#aaa"}}>
                            <Image source={Search} style={{width: 17, height: 17, marginRight: 5}}/>
                        </View>
                        <TextInput 
                            placeholder="Search"
                            placeholderTextColor= "#bbb"
                            style={{
                                height : 40, 
                                width : 260,  
                                borderColor: "#aaa",
                                borderBottomWidth : .5, 
                                }}>
                        </TextInput>
                    </View>
                    <Image style={styles.searchIcon} source={Messenger}/>

                </View>

                {/* Top Doc */}
                <View style={styles.topContainer}>
                    <Image style={styles.topIcon} source={i1}/>
                    <Image style={styles.topIcon} source={i2}/>
                    <Image style={styles.topIcon} source={i3}/>
                    <Image style={styles.topIcon} source={i4}/>
                    <Image style={styles.topIcon} source={i5}/>
                    <Image style={styles.topIcon} source={i6}/>
                </View>
                    <Post />
                    <Post />
           </View> 
        )
    }
}

export default Home