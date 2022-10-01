
import React, {Component} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Platform, 
    StatusBar,
    TextInput,
    Button,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { EyeOff, CheckCircle } from "react-native-feather";
import { faUser, faLock} from '@fortawesome/free-solid-svg-icons';


const LoginScreen = () => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })
    
    //TODO: proper user name format verification
    const textInputChange = (val: string) => {
    
        if (val.length !== 0) {
            setData({
                ... data,
                email: val,
                check_textInputChange: true 
            })
        }
        else {
            setData({
                ... data,
                email: val,
                check_textInputChange: false 
            })
        }
    }

    //TODO: add password onChange to state variables
    //TODO: add toggle to hide password characters

    return (
        <>
        <StatusBar backgroundColor="#9c38d1" barStyle="light-content"/>
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>
                    
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action} >
                    <FontAwesomeIcon 
                        icon={faUser}
                        color="grey"
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Email'
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />

                    {data.check_textInputChange ? 
                    <Animatable.View
                    animation="bounceIn">
                        
                        <CheckCircle 
                            stroke={"#9c38d1"}
                            height={20}
                            width={20}
                        />
                    </Animatable.View>
                    : null }
                </View>

                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action} >
                    <FontAwesomeIcon 
                        icon={faLock}
                        color="grey"
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={true}
                    />
                    <EyeOff 
                    stroke={"grey"}
                    height={20}
                    width={20}
                    
                    />
                </View>

                <View style={styles.button}>
                    <LinearGradient 
                        colors={['#A549D5', '#A447D4']}
                        style={styles.signIn}
                    >
                    
                        <Text style={[styles.textSign, 
                            {color: "#fff"}]}>Sign In</Text>
                    </LinearGradient>

                    <TouchableOpacity
                        style={[styles.signIn, {
                            borderColor: '#9C38D1',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, 
                            {color: "#9C38D1"}]}
                        >Create Account</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
        </>
    )
}

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9c38d1',
        

    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }

})