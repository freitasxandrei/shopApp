import * as React from 'react'
import { Alert, Pressable, Text, StyleSheet, Image } from 'react-native'
import { Divider, List } from 'react-native-paper'
import { useAppDispatch } from '../../hooks'
import { reset } from '../../redux/trainingSlice'
import { openURL } from '../../utils'
import { StackNavigationProp } from '@react-navigation/stack'
import { SettingsParamList } from '../../types'
import { View } from '../../components'
import Screen from '../../components/Screen'
import { WebView } from 'react-native-webview';


interface Props {
  navigation: StackNavigationProp<SettingsParamList, 'SettingsScreen'>
}

const Settings = ({ navigation }: Props) => {

  return (
    <>
      <Screen scroll>
        <View style={styles.quoteContainer}>
          {/* <Card style={styles.quoteCard}>
            <Card.Content style={styles.cardContent}>
              <Paragraph>{author}</Paragraph>
              <Title style={styles.quoteTitle}>{quote}</Title>
            </Card.Content>
          </Card> */}
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require('../../assets/images/tenis.jpg')}
            />
          </View>
          <Text style={styles.title}>
            Bem vindos ao BAZAAR
          </Text>
          <Text style={styles.subtitle}>
            Nossos produtos são inspirados pelas pessoas que estão à nossa volta, com suas belezas e qualidades. Produtos de bom gosto especialmente para você. Descubra our story e aproveite as promoções.
          </Text>
          <Text style={styles.title2}>
            Onde nos encontrar
          </Text>
          <Image
              style={styles.image2}
              source={require('../../assets/images/loca.jpg')}
            />
        </View>
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  cards: {
    marginBottom: 30,
  },
  card: {
    width: 150,
    marginRight: 10,
    textAlign: 'center',
  },
  quoteContainer: { marginRight: 10, marginBottom: 0 },
  quoteCard: {
    width: '100%',
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center'
  },
  quoteTitle: {
    textAlign: 'center',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 10,
    marginBottom: 10
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  title: {
    fontSize: 25,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'gray',
  },
  title2: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'gray',
    marginTop: 20
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'gray',
    marginTop: 15
  },
  image: {
    justifyContent: 'center',
    width: 385,
    height: 200,
    marginTop: 0,
    marginBottom: 30,
  },
  image2: {
    justifyContent: 'center',
    width: 385,
    height: 165,
    marginTop: 25,
    marginBottom: 30,
  }
})

export default Settings


