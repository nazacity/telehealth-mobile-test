import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from 'theme/theme';
import BaseText from 'components/basecomponents/text/BaseText';
import {IDoctorCategory} from 'models/doctor.model';

interface IProps {
  active: boolean;
  item: IDoctorCategory;
  onPress: () => void;
}

const SearchDoctorCategoryCard: React.FC<IProps> = ({
  active,
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: active ? COLORS.primary : COLORS.blue[1],
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 100,
      }}
      onPress={onPress}>
      <BaseText nt as="body2" color={active ? COLORS.white : COLORS.primary}>
        {item.title}
      </BaseText>
    </TouchableOpacity>
  );
};

export default SearchDoctorCategoryCard;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white},
});
