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

interface Props {
  navigation: StackNavigationProp<SettingsParamList, 'CartoesScreen'>
}

const Cartoes = ({ navigation }: Props) => {

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
          <Pressable style={styles.button}>
            <Text style={styles.textButton}> ACEITAMOS: </Text>
          </Pressable>
          <Image
              style={styles.image}
              source={require('../../assets/images/cartoes.png')}
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
    backgroundColor: 'green',
    marginTop: 200,
    marginBottom: 10
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  image: {
    justifyContent: 'center',
    width: 385,
    height: 200,
    marginTop: 0,
    marginBottom: 30,
  },
})

export default Cartoes
