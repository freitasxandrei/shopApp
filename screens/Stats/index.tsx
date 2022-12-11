import * as React from 'react'
import { StyleSheet, ScrollView, View, Pressable, Text, Alert } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { AntDesign as Icon } from '@expo/vector-icons'

import useColorScheme from '../../hooks/useColorScheme'
import Calendar from './Calendar'
import Screen from '../../components/Screen'
import { useAppSelector, useMinutesToStatsTime, useMsToMinutes, useQuote } from '../../hooks'
import { selectStreak, selectTotalDuration, selectTotalSessions } from '../../redux/selectors'
import ManualEntry from './ManualEntry'
import { useThemeColor } from '../../components'

export default function StatsScreen() {
  const colorScheme = useColorScheme()
  const totalSessions = useAppSelector(selectTotalSessions)
  const totalDuration = useAppSelector(selectTotalDuration)
  const streak = useAppSelector(selectStreak)
  const totalMinutes = useMsToMinutes(totalDuration)
  const listenedStat = useMinutesToStatsTime(totalMinutes)
  const primary = useThemeColor({}, 'primary')
  const [manualEntryTimestamp, setManualEntryTimestamp] = React.useState<number>()
  const { quote, author } = useQuote()

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
            <Text style={styles.textButton}> Camisetas </Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}> Bermudas </Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}> Tênis </Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}> Casacos </Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}> Meias </Text>
          </Pressable>
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
  }
})
