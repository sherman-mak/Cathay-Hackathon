import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
<<<<<<< HEAD
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try itttttttttttt</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
      <Button
        title="Generate chatbot button"
        onPress={() => {

          var myHeaders = new Headers();
          myHeaders.append("Cookie", "_abck=C994F9C6A4A744FCB095F435E2C6F17C~-1~YAAQOQ5M2w5x17ySAQAAa4DcAQzy0UzqxTMbJfrTjefVQWb4Yj5xAi5beZBVZfyKiEW1boyJOURTpuhKAovLQSxSINlhDQODhLs8x89CMr6Vw74lRcYEIdCSdnqkaDu8xGoeBh/A2lr1iwgGICY/ttPEBOl+KG7V2stzaRLN3JI1zB8s3V5r5cLuZnBM6Fi7dh2A+/8GFTp0BsehvkmKyA+F6LybQ0e1UYbveAG6EztokQCSAXQv/XMiFk/FEYGDBeNPAdDyF/tdx1irUx8a5OhggxIIuFy17M0unpzOEwbLHJGHxxasqYOVAobMSuiGhF/jD7RtL+IKxZHZMS3l3YwbqR2aYCvTsbdV6F/OyeChbOwLDTy1zOKTywDdFMCVpqxNgsS8lBXKgB3zBD3BRZttbC1loRR3zALRfCLVCgom~-1~-1~-1; 8bac6ca36dd7fb6e1a5df804509d965c=0c86393222528be065d396c1cb85b093; 91d1e5aa2d49f01a98ca619ad658207a=c710d1890bccd9887bff2a4cfbfed571");
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            "contents": [
              {
                "role": "user",
                "parts": [
                  {
                    "text": "Where is Hong Kong?"
                  }
                ]
              }
            ]
          });

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

          fetch("https://developers.cathaypacific.com/hackathon-apigw/hackathon-middleware/v1/vertex-ai/google-gemini", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }}
      />
=======
       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      // headerImage={
      //   <Image
      //     source={require('@/assets/images/partial-react-logo.png')}
      //     style={styles.reactLogo}
      //   />
      // }
      >
       <Image source={require('@/assets/appImages/HomePage.png')} style={{width:'100vw', position:'static' }} />
       <div style={{height:'350px'}}></div>
>>>>>>> 56b4a10bce16f52d4e4652eb17f233649fe13248
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 0,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
