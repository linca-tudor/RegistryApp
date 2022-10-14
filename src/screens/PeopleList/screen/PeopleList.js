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
    <PeopleItem
      title={'Titlu'}
      subtitle={'Subtitluasdadddasdaasdasdadaasdasddadad'}
      description={'Description'}
      image={require('~/assets/images/grumpyCat.png')}
    />
  );
};

export default PeopleList;
