import React, {useState} from 'react';
import {useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import UserForm from '~/components/UserForm';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from './AddProfileScreen.styles';

const AddProfileScreen = ({}) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  return (
    <SafeAreaView style={[globalStyles.flex, styles.container]}>
      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        <UserForm />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProfileScreen;
