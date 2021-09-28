import * as React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Video } from 'expo-av'
import Color from '../config/Colors'
import AppText from '../components/AppText'

export default function App() {
  const video = React.useRef(null)
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
          style={[styles.video]}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
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
      </View>
    )
  } else {
    return (
      <View style={[styles.containerLandScape, { backgroundColor: Color.lightGrey }]}>
        <Video
          ref={video}
          style={[styles.video]}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          }}
          useNativeControls={true}
          onFullscreenUpdate={async () => {
            setFullScreen(!fullScreen)
          }}
          resizeMode={fullScreen ? 'stretch' : 'contain'}
          isLooping
          onPlaybackStatusUpdate={() => setStatus(() => status)}
        />
        <AppText text="LandScape" />
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
    justifyContent: 'center',
    alignSelf: 'center',
  },
  video: {
    alignSelf: 'center',
    width: 380,
    height: 280,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
