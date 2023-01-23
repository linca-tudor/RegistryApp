import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import UserForm from '~/components/UserForm';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from './EditProfileScreen.styles';

const EditProfileScreen = ({onSubmitPress, profile}) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  return (
    <SafeAreaView style={[globalStyles.flex, styles.container]}>
      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        <UserForm
          onSubmitPress={onSubmitPress}
          profile={profile}
          buttonTitle={'Update profile'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
