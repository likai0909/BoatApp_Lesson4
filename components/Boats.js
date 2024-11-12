import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6"



const Boats = ({icon_name, name, description, picture}) => {
    return (
        <View style={ {backgroundColor: 'lightblue'}}>
            <View  style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={icon_name} size={60} color="#B23B23"  style={{ marginTop: 40, margin: 20 }} />
                <Text style={{fontSize : 22, fontWeight: 'bold', fontStyle: 'italic', marginTop:40, marginLeft:10, backgroundColor:'black',
                    color: 'white', borderWidth: 20, textAlign: 'center', textAlignVertical: 'center', borderRadius: 15}}>
                    {name}
                </Text>
            </View>
            <Text style={{ color: 'black', fontSize: 18, fontStyle: 'italic', marginBottom: 30, marginTop: 30, textAlign: 'center', textAlignVertical: 'center' }}>
                {description}
            </Text>
            <View style={{justifyContent:'center', alignItems: 'center'}}>
                <Image source={picture} style={{width: 300, height: 300, borderRadius: 20}}/>
            </View>

        </View>
    );
};

const AllBoats = ()=> {
    return(
        <ScrollView>
            <Text style={{fontSize:40, fontWeight:'bold', marginTop:50, fontStyle: 'italic',textAlign:'center',  backgroundColor:'black', color: 'white'}}>
                GetABoat - For Sale !
            </Text>
            <Boats icon_name = "sailboat"
                   name = "Sea Ray 500 Sundancer"
                   description = "Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away"
                   picture = {require('../img/sea_ray.jpg')} />
            <Boats icon_name = "sailboat"
                   name = "Four WInns Horizon 180"
                   description = "A sporty look and refined details truly set the Horizon 180 above all others"
                   picture = {require('../img/four_winns.jpg')} />
            <Boats icon_name = "sailboat"
                   name = "Flipper 640 ST"
                   description = "A modern take on the classic, traditional hardtop and perfect for a family picnic"
                   picture = {require('../img/flipper.jpg')} />
            <Boats icon_name = "sailboat"
                   name = "Princess V48"
                   description = "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior"
                   picture = {require('../img/princess.jpg')} />
            <Boats icon_name = "sailboat"
                   name = "Bayliner 175 Bowrider"
                   description = "Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance"
                   picture = {require('../img/bayliner.jpg')} />
            <Boats icon_name = "sailboat"
                   name = "Fairline Targa 47"
                   description = "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit"
                   picture = {require('../img/fairline.jpg')} />
        </ScrollView>
    )
}

export default AllBoats;
