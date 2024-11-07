import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      // headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
      >
      <textarea style={{width: "50vw"}}>
        請問需要預訂當地體驗嗎？
      </textarea>
      <textarea style={{width: "50vw", marginRight: "0", marginLeft: "auto"}}>
        需要
      </textarea>
      <button style={{width: "20vw", marginLeft: "10"}} onClick={() => {

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "_abck=C994F9C6A4A744FCB095F435E2C6F17C~-1~YAAQOQ5M2w5x17ySAQAAa4DcAQzy0UzqxTMbJfrTjefVQWb4Yj5xAi5beZBVZfyKiEW1boyJOURTpuhKAovLQSxSINlhDQODhLs8x89CMr6Vw74lRcYEIdCSdnqkaDu8xGoeBh/A2lr1iwgGICY/ttPEBOl+KG7V2stzaRLN3JI1zB8s3V5r5cLuZnBM6Fi7dh2A+/8GFTp0BsehvkmKyA+F6LybQ0e1UYbveAG6EztokQCSAXQv/XMiFk/FEYGDBeNPAdDyF/tdx1irUx8a5OhggxIIuFy17M0unpzOEwbLHJGHxxasqYOVAobMSuiGhF/jD7RtL+IKxZHZMS3l3YwbqR2aYCvTsbdV6F/OyeChbOwLDTy1zOKTywDdFMCVpqxNgsS8lBXKgB3zBD3BRZttbC1loRR3zALRfCLVCgom~-1~-1~-1; 8bac6ca36dd7fb6e1a5df804509d965c=0c86393222528be065d396c1cb85b093; 91d1e5aa2d49f01a98ca619ad658207a=c710d1890bccd9887bff2a4cfbfed571");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-Auth-Token", "0Ws2MAmAseTl39JZLohswZZgWLCxpZ1K");

        var raw = JSON.stringify({
          "contents": [
            {
              "role": "user",
              "parts": [
                {
                  "text": "What hotels are the best to stay at?"
                }
              ]
            }
          ]
        });

        var requestOptions = {
          method: 'POST',
          withCredentials: true,
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://developers.cathaypacific.com/hackathon-apigw/hackathon-middleware/v1/vertex-ai/google-gemini", requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        }}>選擇你的行程計劃</button>
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
