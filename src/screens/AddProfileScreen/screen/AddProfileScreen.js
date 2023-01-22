import React, {useState} from 'react';
import {useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import UserForm from '~/components/UserForm';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from './AddProfileScreen.styles';

const AddProfileScreen = ({onSubmitPress}) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  return (
    <SafeAreaView style={[globalStyles.flex, styles.container]}>
      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        <UserForm onSubmitPress={onSubmitPress} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProfileScreen;
