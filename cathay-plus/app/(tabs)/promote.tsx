import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform ,Animated} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
    const [isGifVisible, setIsGifVisible] = useState(false);

  const handleImageClick = () => {
    setIsGifVisible(!isGifVisible);
  };
  return (
    <ParallaxScrollView
       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    //   headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
      >
      <div onClick={handleImageClick}>
      <Image
        source={isGifVisible ? require('@/assets/appImages/redpocketAnimation.gif') : require('@/assets/appImages/redpocket.jpg')}
        style={{ width: '100vw', height:800, margin: -30}}
        //onPress={handleImageClick}
      />
      </div>
      <div style={{marginTop:'30px'}}>
      <Image source={require('@/assets/appImages/missions.png')} style={{width:'100vw',height:900, marginLeft:-30 }} />
      </div>
    

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
