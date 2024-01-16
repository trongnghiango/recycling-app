import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import HtmlRenderPage from '../components/core/HtmlRender';

type Props = {
  title: string
  content?: string
}
export default function ModalScreen({ title = 'Modal' }: Props) {
  const linkPressHandler = (evt: any) => {
    console.log(evt.target.data)
  }
  return (
    <View style={styles.container}>

      {/* <EditScreenInfo path="app/modal.tsx" /> */}
      <View style={styles.box}>
        <HtmlRenderPage onLinkPress={linkPressHandler} />
      </View>


      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(15,15,15,0.9)',
    // paddingHorizontal: 16,
    // paddingVertical: 20,
  },
  box: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    // borderRadius: 8,
    // padding: 16,
    // shadowColor: "#ffffff",
    // shadowOffset: {
    //   width: 8,
    //   height: 8,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 0,
    // elevation: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
