import React, {useState,useEffect} from 'react';
import {SafeAreaView,Text,AsyncStorage,Image,StyleSheet,ScrollView} from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(()=>{
        AsyncStorage.getItem('techs').then(storadeTechs => {
            const techsArray = storadeTechs.split(',')
                .map(tech => tech.trim());
            setTechs(techsArray);
        })
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={techs}/>)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 35
    },
});