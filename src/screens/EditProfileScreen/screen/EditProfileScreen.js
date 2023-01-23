import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectUserById} from '~/reducers/usersSlice';
import {SafeAreaView, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import UserForm from '~/components/UserForm';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from './EditProfileScreen.styles';

const EditProfileScreen = ({onSubmitPress}) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  const id = useRoute().params.id;
  const userProfile = useSelector(state => selectUserById(state, id));

  return (
    <SafeAreaView style={[globalStyles.flex, styles.container]}>
      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        <UserForm
          onSubmitPress={onSubmitPress}
          profile={userProfile}
          buttonTitle={'Update profile'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
