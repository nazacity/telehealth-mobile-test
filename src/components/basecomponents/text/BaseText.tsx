import React from 'react';
import {Text, TextProps, TextStyle, StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme/theme';
import {useTranslation} from 'react-i18next';

export type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'title' | 'body1' | 'body2';

interface IProps extends TextProps {
  children: React.ReactNode | string;
  as?: As;
  style?: TextStyle;
  color?: string;
  nt?: boolean;
}

const BaseText: React.FC<IProps> = ({
  children = '',
  as = 'body1',
  style,
  color,
  nt,
  ...restProps
}) => {
  const {t} = useTranslation();
  return (
    <Text
      style={[styles[as], {color: color || COLORS.text.default, ...style}]}
      {...restProps}
      allowFontScaling={false}>
      {nt ? children : t(children as string)}
    </Text>
  );
};

export default BaseText;

const styles = StyleSheet.create({
  h1: {
    ...FONTS.h1,
  },
  h2: {
    ...FONTS.h2,
  },
  h3: {
    ...FONTS.h3,
  },
  h4: {
    ...FONTS.h4,
  },
  h5: {
    ...FONTS.h5,
  },
  title: {
    ...FONTS.title,
  },
  body1: {
    ...FONTS.body1,
  },
  body2: {
    ...FONTS.body2,
  },
});
