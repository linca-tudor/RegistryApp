import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import SimpleLineDivider from '~/components/SimpleLineDivider';
import FieldErrorMessage from '~/components/FieldErrorMessage';
import Entypo from 'react-native-vector-icons/Entypo';
import getStyles from './DateInputWithIcon.styles';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Colors from '~/helpers/Colors';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const DateInputWithIcon = ({
  placeholder,
  onChangeText,
  onBlur,
  style,
  icon,
  title,
  value,
  error,
}) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const [pickedDate, setPickedDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setPickedDate(value ? moment(value).toDate() : moment().toDate());
  }, [value]);

  const renderCrossIcon = () => {
    return (
      <TouchableOpacity
        onPress={() => onChangeText('')}
        style={globalStyles.formItem.crossIcon}>
        <Entypo
          name="circle-with-cross"
          size={24}
          color={Colors.ultramarineBlue}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[style, globalStyles.formItem.container]}>
      <View style={globalStyles.formItem.iconContainer}>{icon}</View>
      <View>
        <SimpleLineDivider
          orientation={'vertical'}
          thickness={2}
          color={Colors.warmGrey}
          borderRadius={1}
          margin={11.8}
        />
      </View>
      <TouchableOpacity
        onPress={() => setModalOpen(true)}
        style={globalStyles.formItem.textContainer}>
        <Text style={globalStyles.formItem.title}>{title}</Text>
        <View style={globalStyles.formItem.inputContainer}>
          {value && (
            <Text style={[globalStyles.formItem.input, styles.date]}>
              {moment(pickedDate).format('MMM Do, YYYY')}
            </Text>
          )}
          {!value && (
            <Text style={styles.placeholder}>
              {moment(placeholder).format('MMM Do, YYYY')}
            </Text>
          )}
          <DatePicker
            modal
            theme="light"
            open={modalOpen}
            date={pickedDate}
            mode={'date'}
            androidVariant={'iosClone'}
            maximumDate={moment().toDate()}
            minimumDate={moment().subtract(100, 'years').toDate()}
            onConfirm={timestamp => {
              setModalOpen(false);
              onChangeText(moment(timestamp).format('YYYY-MM-DD'));
            }}
            onCancel={() => {
              setModalOpen(false);
            }}
          />
          {value && renderCrossIcon()}
        </View>
        <FieldErrorMessage message={error} />
      </TouchableOpacity>
    </View>
  );
};

export default DateInputWithIcon;
