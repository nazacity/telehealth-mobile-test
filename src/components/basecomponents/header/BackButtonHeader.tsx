import React from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SHADOW} from 'theme/theme';
import VectorIcon from '../icon/VectorIcon';
import BaseText, {As} from '../text/BaseText';

interface IProps {
  title?: string;
  onBack?: () => void;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  as?: As;
}

const BackButtonHeader: React.FC<IProps> = ({
  title,
  onBack,
  rightIcon,
  onRightIconPress,
  as,
}) => {
  const insert = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {paddingTop: Platform.OS === 'ios' ? insert.top : 0},
      ]}>
      <TouchableOpacity
        disabled={onBack ? false : true}
        activeOpacity={0.8}
        onPress={onBack}
        style={styles.backButton}>
        {onBack ? (
          <VectorIcon type="AntDesign" name="left" size={22} />
        ) : (
          <View style={styles.noIcon} />
        )}
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <BaseText as={as || 'h3'} style={styles.title}>
          {title}
        </BaseText>
      </View>
      <TouchableOpacity
        disabled={onRightIconPress ? false : true}
        activeOpacity={0.8}
        onPress={onRightIconPress}
        style={styles.rightButton}>
        {rightIcon ? rightIcon : <View style={styles.noIcon} />}
      </TouchableOpacity>
    </View>
  );
};

export default BackButtonHeader;

const styles = StyleSheet.create({
  container: {
    ...SHADOW[1],
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    position: 'relative',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
  },
  titleContainer: {flex: 1},
  title: {textAlign: 'center', paddingVertical: 10},
  backButton: {padding: 10},
  rightButton: {padding: 10},
  noIcon: {
    width: 30,
  },
});
