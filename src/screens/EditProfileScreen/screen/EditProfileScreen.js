import React from 'react';
import {Platform, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import UserForm from '~/components/UserForm';
import getGlobalStyles from '~/helpers/GlobalStyles';
import getStyles from './EditProfileScreen.styles';

const EditProfileScreen = ({onSubmitPress, profile}) => {
  const globalStyles = getGlobalStyles();
  const styles = getStyles();

  return (
    <SafeAreaView style={[globalStyles.flex, styles.container]}>
      <KeyboardAwareScrollView
        style={{width: '100%'}}
        showsVerticalScrollIndicator={false}
        extraScrollHeight={Platform.OS === 'android' ? 102 : 132}
        enableOnAndroid
        enableResetScrollToCoords={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled">
        <UserForm
          onSubmitPress={onSubmitPress}
          profile={profile}
          buttonTitle={'Update profile'}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
