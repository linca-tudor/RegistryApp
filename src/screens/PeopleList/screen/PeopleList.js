import React from 'react';
import {View, Text} from 'react-native';
import getGlobalStyles from '~/helpers/GlobalStyles';
import Image from '~/components/Image';
import getStyles from './PeopleList.styles';
import PeopleItem from '~/components/PeopleItem';

const PeopleList = () => {
  const styles = getStyles();
  const generalStyles = getGlobalStyles();
  return (
    <View style={[generalStyles.flex, {backgroundColor: 'grey'}, styles.image]}>
      <Image
        source={require('~/assets/images/grumpyCat.png')}
        size={300}
        borderRadius={20}
      />
      <PeopleItem
        title={'Titlu'}
        subtitle={'Subtitlu'}
        description={'Description'}
        image={require('~/assets/images/grumpyCat.png')}
      />
    </View>
  );
};

export default PeopleList;
