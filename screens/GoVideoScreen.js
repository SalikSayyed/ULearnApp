import * as React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import AppButton from '../components/Button'
import { Video } from 'expo-av'
import Color from '../config/Colors'

export default function App() {
  const video = React.useRef(null)
  const [videoUrl, setVideoUrl] = React.useState(
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  )
  const [status, setStatus] = React.useState({})
  const [fullScreen, setFullScreen] = React.useState(false)
  const [orientation, setOrientation] = React.useState('portrait')

  const isPortrait = () => {
    const dim = Dimensions.get('screen')
    return dim.height >= dim.width
  }

  Dimensions.addEventListener('change', () => {
    setOrientation(isPortrait() ? 'portrait' : 'landscape')
  })

  if (orientation === 'portrait') {
    return (
      <View style={[styles.containerPortrait, { backgroundColor: Color.lightGrey }]}>
        <Video
          ref={video}
          volume={100}
          style={[styles.video]}
          source={{
            uri: videoUrl,
          }}
          useNativeControls={true}
          onFullscreenUpdate={async () => {
            console.log('onFullScreenUpdate')
            setFullScreen(!fullScreen)
          }}
          resizeMode={fullScreen ? 'stretch' : 'contain'}
          isLooping
          onPlaybackStatusUpdate={() => setStatus(() => status)}
        />
        <View style={styles.buttonPortrait}>
          <AppButton
            tagName="Big Buck Bunny"
            onPress={() => {
              setVideoUrl(
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              )
            }}
          />
          <AppButton
            tagName="Elephants Dream"
            onPress={() => {
              setVideoUrl(
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
              )
            }}
          />
        </View>
      </View>
    )
  } else {
    return (
      <View style={[styles.containerLandScape, { backgroundColor: Color.lightGrey }]}>
        <Video
          ref={video}
          volume={100}
          style={[styles.videoLandscape]}
          source={{
            uri: videoUrl,
          }}
          useNativeControls={true}
          onFullscreenUpdate={async () => {
            setFullScreen(!fullScreen)
          }}
          resizeMode={fullScreen ? 'stretch' : 'contain'}
          isLooping
          onPlaybackStatusUpdate={() => setStatus(() => status)}
        />
        <View style={styles.buttonLandscape}>
          <AppButton
            tagName="Big Buck Bunny"
            onPress={() => {
              setVideoUrl(
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              )
            }}
            customStyle={styles.btnStyleLandscape}
            textStyle={styles.textStyleLandscape}
          />
          <AppButton
            tagName="Elephants Dream"
            onPress={() => {
              setVideoUrl(
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
              )
            }}
            customStyle={styles.btnStyleLandscape}
            textStyle={styles.textStyleLandscape}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerPortrait: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  containerLandScape: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  video: {
    alignSelf: 'center',
    width: 380,
    height: 280,
  },
  videoLandscape: {
    alignSelf: 'center',
    width: 600,
    height: 340,
    marginLeft: 10,
    marginBottom: 10,
  },
  buttonLandscape: {
    flexDirection: 'column',
  },
  buttonPortrait: {
    flexDirection: 'column',
  },
  btnStyleLandscape: {
    width: 130,
  },
  textStyleLandscape: {
    fontSize: 15,
  },
})
