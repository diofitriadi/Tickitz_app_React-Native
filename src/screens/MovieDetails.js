import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import {View, Text, ScrollView, SafeAreaView, Image} from 'react-native'
import { commonStyle } from '../../helper/commonStyle'


const MovieDetails = ({route}) => {
  const { 
    cover,
    title,
    categories,
    release_date,
    director,
    duration,
    casts,
    synopsis, 
  } = route.params;
  return (
    <>
    <SafeAreaView>
      <Navbar/>
      <ScrollView>
        <View style={{padding: 35}}>
          <View style={[commonStyle.flexCenter,{borderWidth: .2, marginHorizontal: 60, borderRadius: 5}]}>
            <Image source={{uri: `http://192.168.1.3:3000/uploads/${cover}`}} 
              style={{
                margin: 20, 
                width: '80%', 
                height: 200,
                resizeMode: 'cover'
              }}/>
          </View>
          <View style={[commonStyle.flexCenter, commonStyle.flexBetween,{marginTop: 30}]}>
            <Text style={[commonStyle.textBlack,{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}]}>{title}</Text>
            <Text style={{marginTop: 10}}>{categories}</Text>
          </View>
          <View style={[commonStyle.flexRow, commonStyle.flexBetween, {marginTop: 30}]}>
            <View>
              <Text>Release Date :</Text>
              <Text>{release_date}</Text>
            </View>
            <View>
              <Text>Directed By</Text>
              <Text>{director}</Text>
            </View>
          </View>
          <View style={[commonStyle.flexRow, commonStyle.flexBetween, {marginTop: 15}]}>
            <View>
              <Text>Duration</Text>
              <Text>{duration}</Text>
            </View>
            <View>
              <Text style={{alignItems: 'flex-end'}}>Casts</Text>
              <Text>{casts.split(",").join("\n")}</Text>
            </View>
          </View>
          <View style={[commonStyle.flexCenter, commonStyle.flexBetween, { marginTop: 5}]}>
            <Text style={{}}>Synopsis : </Text>
          <Text style={{textAlign: 'left', marginTop: 20}}>
            {synopsis} 
          </Text>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
      

    </>
  )
}

export default MovieDetails;