import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BaseLayout } from '@src/components';
import { Text } from '../../../blueprints/Text/Text';
import { useAppContext } from '@src/context';
import { Button } from '../../../blueprints/Button/Button';
import { scaleHeight, scaleWidth, scaledSize } from '@src/utils';
import TextInputFieldWithLabel from '@src/components/TextInputFieldWithLabel';
import { adduseInfoStyles } from './AddUserInformation.style';
import { AppHeader } from '@src/components/Header/AppHeader';

const useAddUserInformation = ({route}:any) => {
    const {roll}=route.params;
    const { color, navigation } = useAppContext();
    const style = adduseInfoStyles(color)
    const [isActive, setIsActive] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');

    const handleFormSubmit = () => {
        console.log('Form submitted:', { firstName, lastName, email, country });
        navigation.navigate("ACCEPT_DECLINE_TERM_COND",{roll:roll})
        if (roll=="Buyers") {
            let buyerBody={
                firstName:firstName, 
                lastName:lastName, 
                email:email, 
                country:country
            }

        } else {
            let sellerBody={
                firstName:firstName, 
                lastName:lastName, 
                email:email, 
                country:country
            }
        }
    };
   

    return (
        <BaseLayout style={style.main}>
            <AppHeader title={roll=="Buyers"?"Buyer":"Seller"} />
            <View style={{ marginHorizontal: scaleWidth(8) }}>
                <TextInputFieldWithLabel style={{ marginVertical: scaleHeight(10) }}
                    label={'First Name'} placeholder={'firstname'}
                    onTextChange={(value: any) => {
                            setFirstName(value)
                    }} />
                <TextInputFieldWithLabel style={{ marginVertical: scaleHeight(10) }}
                    label={'Last Name'} placeholder={'lastname'}
                    onTextChange={(value: any) => {
                        setLastName(value)
                    }} />
                <TextInputFieldWithLabel style={{ marginVertical: scaleHeight(10) }}
                    label={'Email'} placeholder={'Email'}
                    onTextChange={(value: any) => {
                        setEmail(value)
                    }} />
                
                <TextInputFieldWithLabel style={{ marginVertical: scaleHeight(10) }}
                    label={'Country'} placeholder={'Country'}
                    onTextChange={(value: any) => {
                        setCountry(value)
                    }} />
            </View>
            <View style={{alignItems:'center',marginTop:scaleHeight(50)}}>
                <Button title={"Submit"} onPress={handleFormSubmit} titleStyle={{color:'white'}}
                    buttonContainerStyle={[style.buttonContainerStyle,
                        {backgroundColor:color.backgroundColor}]}
                />
            </View>
        </BaseLayout>
    )
}
export default React.memo(useAddUserInformation);

