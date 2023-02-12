import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post_Big_Card from '../Cards/Post_Big_Card'

const FollowersRandomPost = () => {

    let data = [{
        id:1,
        username:'user1_123',
        image:"https://pixlr.com/images/index/remove-bg.webp",
        profilepic:"https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
        likes:[
            "harshal_123",
            "viraj_123"
        ],
        comments:[
            {
                id:1,
                username:'harshal_123',
                comment:'nice post'
            },
            {
                id:2,
                username:'viraj_123',
                comment:'nice post'
            }
        ]
    },
       { 
        id:2,
        username:'user2_123',
        image:"https://pixlr.com/images/index/remove-bg.webp",
        profilepic:"https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
        likes:[
            "harshal_123",
            "viraj_123"
        ],
        comments:[
            {
                id:1,
                username:'harshal_123',
                comment:'nice post'
            },
            {
                id:2,
                username:'viraj_123',
                comment:'nice post'
            }
        ]
    },
       { 
        id:3,
        username:'user3_123',
        image:"https://pixlr.com/images/index/remove-bg.webp",
        profilepic:"https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
        likes:[
            "harshal_123",
            "viraj_123"
        ],
        comments:[
            {
                id:1,
                username:'harshal_123',
                comment:'nice post'
            },
            {
                id:2,
                username:'viraj_123',
                comment:'nice post'
            }
        ]
    }
]

  return (
   <ScrollView style={styles.container}>
    {
        data.map((item)=>{

            return (

            <Post_Big_Card
            key={item.id}
            username={item.username}
            profilepic={item.profilepic}
            postpic={item.image}
            likes={item.likes}
            comments={item.comments}
            />

            )
        })
    }
   </ScrollView>
  )
}

export default FollowersRandomPost

const styles = StyleSheet.create({
    container:{
        width:'100%'
    }
})