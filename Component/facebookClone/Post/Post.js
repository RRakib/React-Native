import Me from "../../../Image/me.png"
import Me1 from "../../../Image/1.jpg"
import React, {Component} from "react"
import Like from "../../../Image/like.png"
import Love from "../../../Image/love.jpg"
import Laugh from "../../../Image/laugh.png"
import LIcon from "../../../Image/lIcon.png"
import Share from "../../../Image/share.png"
import Comment from "../../../Image/comment.png"
import {View, StyleSheet, Image, Text, Dimensions} from "react-native"


const styles = StyleSheet.create({
    image : {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    profile: {
        marginBottom: 10,
        paddingHorizontal: 10,
        flexDirection : "row",
    },
    name : {
        color: "#333",
        fontWeight: "bold",
    },
    postImage : {
        alignSelf: 'stretch',
        width : Dimensions.get("window").width,
        height: Dimensions.get("window").width
    },
    postContainer : {
        borderTopWidth: 1,
        paddingTop: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderTopColor: "#eee",
    },
    emojis : {
        width: 20,
        height: 20,
    },
    bottom : {
        paddingVertical: 9,
        alignItems: "center",
        flexDirection : "row",
        paddingHorizontal: 10,
        justifyContent: "space-between",
    },
    bottom2 : {
        paddingVertical: 9,
        alignItems: "center",
        flexDirection : "row",
        marginHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#eee",
        justifyContent: "space-around",
    },
    bottomText : {
        color: "#444",
        fontSize: 13,
    },
    emojiContainer : {
        flexDirection : "row",
        alignItems: "center",
        justifyContent: "center",
    },
    reactIcon1 : {
        width: 22,
        height: 22,
        marginRight: 5,
    },
    reactIcon2 : {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    reactIcon3 : {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    reactText : {
        fontWeight : "bold"
    }
})


class Post extends Component{
    render(){
        return(
                // {/* Post Container */}
                <View style={styles.postContainer}>
                    <View style={styles.profile}>
                        <Image style={styles.image} source={Me}/>
                        <View>
                            <Text style={styles.name}>Rakib Uddin</Text>
                            <Text>Yesterday at 9:56 pm</Text>
                        </View>
                    </View>
                    <Text 
                        style={{marginBottom : 5 ,color: "#333", fontWeight: "bold", paddingHorizontal: 10}}>
                        #Nothing
                    </Text>
                    <Image style={styles.postImage} source={Me1}/>
                    <View style={styles.bottom}> 
                        <View style={styles.emojiContainer}>
                            <Image style={styles.emojis} source={Like}/>
                            <Image style={styles.emojis} source={Laugh}/>
                            <Image style={styles.emojis} source={Love}/>
                            <Text style={styles.bottomText}>Aulad Hossen and 20 others</Text>
                        </View>
                        <Text style={styles.bottomText}>2 comments</Text>
                    </View>
                    <View style={styles.bottom2}>
                        <View style={styles.emojiContainer}>
                            <Image style={styles.reactIcon1} source={LIcon}/>
                            <Text style={styles.reactText}>Like</Text>
                        </View>
                        <View style={styles.emojiContainer}>
                            <Image style={styles.reactIcon2} source={Comment}/>
                            <Text style={styles.reactText}>Comment</Text>
                        </View>
                        <View style={styles.emojiContainer}>
                            <Image style={styles.reactIcon3} source={Share}/>
                            <Text style={styles.reactText}>Share</Text>
                        </View>
                    </View>
                </View>
        )
    }
}

export default Post