import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, SHADOW} from 'theme/theme';
import BaseText from 'components/basecomponents/text/BaseText';
import {IDoctor, logoLists} from 'models/doctor.model';
import numeral from 'numeral';
import VectorIcon from '../icon/VectorIcon';

interface IProps {
  item: IDoctor;
  onPress: () => void;
}

const DoctorCard: React.FC<IProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <View>
        <Image source={item.imageUrl} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <BaseText as="h3" nt>
          {item.title + ' ' + item.firstName + ' ' + item.lastName}
        </BaseText>
        <View style={styles.rowContainer}>
          <VectorIcon type="AntDesign" name="star" color="#F3C033" />
          <BaseText nt as="body2" color={COLORS.gray[3]} style={styles.label}>
            {item.rating}
          </BaseText>
          <VectorIcon type="Feather" name="user" color={COLORS.text.default} />
          <BaseText nt as="body2" color={COLORS.gray[3]} style={styles.label}>
            {item.department}
          </BaseText>
        </View>
        <View style={styles.rowContainer}>
          <VectorIcon
            type="SimpleLineIcons"
            name="location-pin"
            color={COLORS.gray[3]}
          />
          <BaseText nt as="body2" color={COLORS.gray[3]} style={styles.label}>
            {item.location}
          </BaseText>
        </View>
        <View style={styles.rowContainer}>
          {logoLists.map(item => {
            return (
              <View key={item.id} style={styles.logoContainer}>
                <Image source={item.imageUrl} style={styles.logo} />
              </View>
            );
          })}
          <View style={styles.logoMore}>
            <BaseText nt>3+</BaseText>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <BaseText as="h4" style={styles.flex}>
            search_doctor.start_fee
          </BaseText>
          <BaseText as="h4" nt color={COLORS.primary}>
            {item.fee === 0 ? 'ฟรี' : numeral(item.fee).format('0,0')}
          </BaseText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    flexDirection: 'row',
    ...SHADOW[3],
  },
  detailContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: -20,
    borderRadius: 20,
    zIndex: 1000,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  rowContainer: {flexDirection: 'row', alignItems: 'center', marginBottom: 5},
  image: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: 140,
    resizeMode: 'cover',
    height: '100%',
  },
  label: {marginHorizontal: 5},
  logoMore: {
    backgroundColor: '#EDEDED',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  logoContainer: {marginRight: 10},
  logo: {width: 20, height: 20},
  flex: {flex: 1},
});
