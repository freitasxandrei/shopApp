import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Paragraph, Dialog, Portal, Provider, TextInput } from 'react-native-paper'
import { MS_PER_MINUTE } from '../../../constants/Units'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { manualEntry } from '../../../redux/trainingSlice'
import { selectActivity } from '../../../redux/selectors'

interface Props {
  timestamp?: number
  onDismiss: () => void
}

const ManualEntry = ({ timestamp, onDismiss }: Props) => {
  const visible = Boolean(timestamp)
  const dispatch = useAppDispatch()
  const activity = useAppSelector(selectActivity)
  const [duration, setDuration] = React.useState(-1)
  const [defaultValue, setDefaultValue] = React.useState('')

  React.useEffect(() => {
    if (!timestamp) {
      return
    }

    const newDuration = activity[timestamp]?.duration || -1
    setDuration(newDuration)
    setDefaultValue(newDuration === -1 ? '' : Math.floor(newDuration / MS_PER_MINUTE).toString())
  }, [activity, timestamp])

  const onChangeText = (text: string) => {
    const value = Number(text)

    if (text === '' || Number.isNaN(value)) {
      setDuration(-1)
      return
    }

    setDuration(value * MS_PER_MINUTE)
  }

  const onSubmit = () => {
    if (duration < 0) {
      return
    }

    dispatch(
      manualEntry({
        timestamp: timestamp!,
        duration,
      })
    )
    onDismiss()
  }

  return (
    <Provider>

    </Provider>
  )
}

const styles = StyleSheet.create({
  textInput: { marginTop: 10 },
})

export default ManualEntry
