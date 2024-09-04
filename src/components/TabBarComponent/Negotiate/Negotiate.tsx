import React, { useState } from 'react';
import { BaseLayout } from '@src/components';
import { Text } from '../../../../blueprints/Text/Text';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Images } from '@src/assets';
import useNagotiate from './useNagotiate';
import { scaleHeight, scaleWidth } from '@src/utils';
import { Button } from '../../../../blueprints/Button/Button';
import useStore from '@src/store/useStore';

export type MessageData = {
  id: string;
  text: string;
  sender: string;
};

const Negotiate = ({ setIsSucess, isSuccess, getValue, status }: any) => {
  const { isAggreed, setAgreeToggle }: any = useStore();

  const { styles } = useNagotiate();
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<MessageData[]>([
    { id: '1', text: '$200,000', sender: 'user' },
    { id: '2', text: '$140,000', sender: 'other' },
    { id: '3', text: '$180,000', sender: 'user' },
    { id: '4', text: '$150,000', sender: 'other' },
    { id: '5', text: '$170,000', sender: 'user' },
    { id: '6', text: '$150,000', sender: 'other' },
    { id: '7', text: '$160,000', sender: 'user' },
    { id: '8', text: '$160,000', sender: 'other' },
    { id: '9', text: '$160,000', sender: 'user' },
    { id: '10', text: 'Agreed', sender: 'other' },
  ]);

  const renderMessage = ({ item }: any) => (
    <View style={styles.messageContainer}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          setIsSucess(true);
        }}
        style={[
          item.sender === 'user'
            ? styles.recieverMessage2
            : styles.senderMessage2,
        ]}>
        {item.sender === 'user' && (
          <Image
            source={Images.SELLER_GIRL}
            style={styles.profileImg}
            resizeMode="contain"
          />
        )}
        <TouchableOpacity
          onPress={() => {
            getValue('Agreed');
            setAgreeToggle(true);
            // setIsSucess(true)
          }}
          disabled={item.text == 'Agreed' ? false : true}
          style={[
            item.sender === 'user'
              ? styles.recieverMessage
              : styles.senderMessage,
            { backgroundColor: item.text == 'Agreed' ? '#1e94d4' : '#ebf6fa' },
          ]}>
          <Text
            preset="h3"
            style={[
              styles.messageText,
              { color: item.text == 'Agreed' ? 'white' : 'blue' },
            ]}>
            {item.text}
          </Text>
        </TouchableOpacity>
        {item.sender === 'other' && (
          <Image
            source={Images.BUYER_BOY}
            style={[styles.profileImg, { marginLeft: 10 }]}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    </View>
  );
  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([
        ...messages,
        { id: String(messages.length + 1), text: newMessage, sender: 'other' },
      ]);
      setNewMessage('');
    }
  };
  return (
    <BaseLayout style={styles.main}>
      {/* {isSuccess ?
     <View>
      <Text preset='h1' style={styles.title}>{'Success'}</Text>
      <Image source={Images.SUCCESS} style={styles.img} resizeMode='contain'/>
    </View>
   : */}
      <View>
        <Text preset="h2" style={styles.header}>
          Company Accounts
        </Text>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          <FlatList
            data={messages}
            keyExtractor={item => item.id}
            renderItem={renderMessage}
          />
        </ScrollView>
      </View>
      {/* } */}
      {!isSuccess && (
        <View
          style={{ flexDirection: 'row', paddingHorizontal: scaleWidth(10) }}>
          <View style={{ height: scaleHeight(50) }}>
            <TextInput
              style={styles.newInput}
              placeholder="Type a message"
              value={newMessage}
              onChangeText={text => setNewMessage(text)}
              multiline={true}
            />
          </View>
          <View style={{ height: scaleHeight(50) }}>
            <Button
              title={'send'}
              containerStyle={styles.buttonContainerStyle}
              onPress={() => handleSend()}
            />
          </View>
        </View>
      )}
    </BaseLayout>
  );
};

export default React.memo(Negotiate);
