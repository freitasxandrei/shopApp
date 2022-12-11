import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, FlatList, View, TextInput, SafeAreaView, Image } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'
import Screen from '../../components/Screen'

import DownloadButton from '../../components/DownloadButton'

import { Text, useThemeColor } from '../../components/Themed'
import Colors from '../../constants/Colors'
import { trainings, TrainingItem } from '../../data/trainings'
import { HomeParamList } from '../../types'
import { useAppSelector } from '../../hooks'
import { selectFavourites } from '../../redux/selectors'
import { JumpingTransition } from 'react-native-reanimated'

interface Props {
  navigation: StackNavigationProp<HomeParamList, 'HomeScreen'>
}

export default function Home({ navigation }: Props) {
  const textColor = useThemeColor({}, 'text')

  const favourites = useAppSelector(selectFavourites)

  const renderPopularCard = ({ item }: TrainingItem) => {
    return (

      <View>
        <Card
          elevation={1}
          style={styles.card}
          onPress={() =>
            navigation.navigate('PlayScreen', {
              id: item.id,
            })
          }
        >
          <Card.Cover style={[styles.cardImage, styles.popularImage]} source={item.image} />
          <Card.Title
            titleStyle={[styles.cardTitle, { color: textColor }]}
            subtitleStyle={styles.cardSubtitle}
            title={item.title}
            subtitle={item.subtitle}
          />
        </Card>
      </View>
    )
  }

  const renderCard = ({ item }: TrainingItem) => {
    return (
      <Card
        style={styles.card}
        onPress={() =>
          navigation.navigate('PlayScreen', {
            id: item.id,
          })
        }
      >
        <Card.Cover style={styles.cardImage} source={item.image} />
        <Card.Title
          titleStyle={[styles.cardTitle, { color: textColor }]}
          subtitleStyle={styles.cardSubtitle}
          title={item.title}
          subtitle={item.subtitle}
        />
      </Card>
    )
  }

  return (

    <Screen scroll>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/promo.jpg')} />
      </View>
      <TextInput
        placeholder="Buscar produto"
        keyboardType="numeric"
        style={styles.input}
      />
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 25
        }}
      />

      <Text style={styles.title}> PRODUTOS </Text>
      <FlatList
        style={styles.cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={trainings.popular}
        renderItem={renderPopularCard}
        keyExtractor={({ id }) => id}
      />
      {favourites.length > 0 && (
        <>
          <Text style={styles.title}> FAVORITOS </Text>
          <FlatList
            style={styles.cards}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={favourites}
            renderItem={renderCard}
            keyExtractor={({ id }) => id}
          />
        </>
      )}
    </Screen>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
  },
  cardImage: {
    height: 135,
  },
  popularImage: {
    height: 250,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardSubtitle: {
    color: Colors.light.gray800,
    fontSize: 14,
  },
  cardValue: {
    color: Colors.light.gray800,
    fontSize: 14,
  },
  cardParagraph: {
    color: Colors.light.purple900,
    fontWeight: '600',
  },
  downloadButton: {
    position: 'relative',
    top: -6,
  },
  cards: {
    marginBottom: 30,
    textAlign: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 19,
  },
  input: {
    justifyContent: 'center',
    textAlign: 'center',
    width: 385,
    height: 44,
    padding: 0,
    marginTop: 0,
    marginBottom: 30,
    backgroundColor: 'white',
  },
  image: {
    justifyContent: 'center',
    width: 385,
    height: 200,
    marginTop: 0,
    marginBottom: 30,
  }
})
