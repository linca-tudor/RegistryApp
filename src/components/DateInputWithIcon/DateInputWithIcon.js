import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  Text,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import getStyles from './DateInputWithIcon.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Colors from '~/helpers/Colors';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const DateInputWithIcon = ({
  placeholder,
  onInputUpdate: onEndEditing,
  onCrossPress,
  style,
  icon,
  title,
  date,
}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const [pickedDate, setPickedDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setPickedDate(date || moment().toDate());
  }, [date]);

  return (
    <View style={[style, globalStyles.form.container]}>
      <View style={globalStyles.form.iconContainer}>{icon}</View>
      <View style={globalStyles.form.textContainer}>
        <Text style={globalStyles.form.title}>{title}</Text>
        <TouchableOpacity
          style={globalStyles.form.inputContainer}
          onPress={() => setModalOpen('true')}>
          {date && (
            <Text style={globalStyles.form.input}>
              {moment(pickedDate).format('MMM Do, YYYY')}
            </Text>
          )}
          {!date && <Text style={styles.placeholder}>{placeholder}</Text>}
          <DatePicker
            modal
            theme="light"
            open={modalOpen}
            date={pickedDate}
            mode={'date'}
            but
            androidVariant={'iosClone'}
            maximumDate={moment().toDate()}
            minimumDate={moment().subtract(100, 'years').toDate()}
            onConfirm={timestamp => {
              onEndEditing(moment(timestamp).toDate());
              setModalOpen(false);
            }}
            onCancel={() => {
              setModalOpen(false);
            }}
          />
        </TouchableOpacity>
      </View>
      {date && (
        <TouchableOpacity
          onPress={onCrossPress}
          style={globalStyles.form.crossIcon}>
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
