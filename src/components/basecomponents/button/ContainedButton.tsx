import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from 'theme/theme';
import BaseText from 'components/basecomponents/text/BaseText';

interface IProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

const ContainedButton: React.FC<IProps> = ({
  label,
  loading,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          ...(disabled && {
            backgroundColor: COLORS.blue[1],
          }),
        },
      ]}
      disabled={disabled}
      onPress={onPress}>
      <BaseText as="h4" color={!disabled ? COLORS.white : COLORS.primary}>
        {label}
      </BaseText>
      {loading && (
        <ActivityIndicator color={COLORS.white} style={styles.loading} />
      )}
    </TouchableOpacity>
  );
};

export default ContainedButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loading: {position: 'absolute', top: 0, bottom: 0, right: 20},
});
