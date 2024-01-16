import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import HtmlRenderPage from '../../components/core/HtmlRender';

export default function TabNotificationScreen() {
  const linkPressHandler = (evt: any) => {
    console.log(evt.target.data)
  }
  return (
    <HtmlRenderPage onLinkPress={linkPressHandler} />
  );
}

