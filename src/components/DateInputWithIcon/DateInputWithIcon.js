import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  Text,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import getStyles from './DateInputWithIcon.styles';
import Colors from '~/helpers/Colors';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const DateInputWithIcon = ({
  placeholder,
  onInputUpdate,
  onCrossPress,
  style,
  icon,
  title,
  date,
}) => {
  const styles = getStyles('');
  const [pickedDate, setPickedDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setPickedDate(date || moment().toDate());
  }, [date]);

  return (
    <View style={[style, styles.container]}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => setModalOpen('true')}>
          {date && (
            <Text style={styles.input}>
              {moment(pickedDate).format('MMM Do, YYYY')}
            </Text>
          )}
          {!date && <Text style={styles.placeholder}>{placeholder}</Text>}
          <DatePicker
            modal
            open={modalOpen}
            date={pickedDate}
            mode={'date'}
            maximumDate={moment().toDate()}
            minimumDate={moment().subtract(100, 'years').toDate()}
            onConfirm={timestamp => {
              onInputUpdate(moment(timestamp).toDate());
              setModalOpen(false);
            }}
            onCancel={() => {
              setModalOpen(false);
            }}
          />
        </TouchableOpacity>
      </View>
      {date && (
        <TouchableOpacity onPress={onCrossPress} style={styles.crossIcon}>
          <Entypo
            name="circle-with-cross"
            size={24}
            color={Colors.ultramarineBlue}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DateInputWithIcon;
