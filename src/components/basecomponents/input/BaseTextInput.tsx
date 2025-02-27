import React, {useEffect} from 'react';
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleProp,
  TextStyle,
} from 'react-native';
import VectorIcon from '../icon/VectorIcon';
import {s} from 'react-native-size-matters';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {COLORS, FONT_FAMILY} from 'theme/theme';
import {useTranslation} from 'react-i18next';

interface IProps extends TextInputProps {
  renderRightIcon?: React.ReactNode;
  label?: string;
  inputContainerStyle?: StyleProp<TextStyle>;
}

const BaseTextInput = React.forwardRef<TextInput, IProps>(
  (
    {
      value,
      onChange,
      renderRightIcon,
      label,
      onFocus,
      onBlur,
      multiline,
      inputContainerStyle,
      numberOfLines,
      ...restProps
    },
    ref,
  ) => {
    const {t} = useTranslation();
    const active = useSharedValue(0);
    const hasValue = useSharedValue(0);

    const reset = () => {
      onChange('');
    };

    const _renderRightIcon =
      renderRightIcon ||
      (value !== '' && (
        <TouchableOpacity activeOpacity={0.4} onPress={reset}>
          <VectorIcon
            type="Ionicons"
            name="close"
            color={COLORS.gray[3]}
            size={20}
          />
        </TouchableOpacity>
      ));

    useEffect(() => {
      if (value) {
        hasValue.value = withTiming(1, {duration: 50});
      } else {
        hasValue.value = withTiming(0, {duration: 50});
      }
    }, [value]);

    const AnimatedLableContainerStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(hasValue.value, [0, 1], [1, 0]),
      };
    });

    const AnimatedLabelStyle = useAnimatedStyle(() => {
      return {
        color: interpolateColor(active.value, [0, 1], ['gray', COLORS.primary]),
      };
    });

    const BorderStyle = useAnimatedStyle(() => {
      return {
        borderColor: interpolateColor(
          active.value,
          [0, 1],
          [COLORS.gray[1], COLORS.primary],
        ),
        borderWidth: 1,
      };
    });

    const BorderStyle2 = useAnimatedStyle(() => {
      return {
        borderColor: interpolateColor(
          active.value,
          [0, 1],
          [COLORS.transparent[1], COLORS.blue[2]],
        ),
        borderWidth: 5,
      };
    });

    const onCusotmeFocus = (
      e: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      if (onFocus) {
        onFocus(e);
      }
      active.value = withTiming(1, {
        duration: 200,
      });
    };

    const onCustomBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (onBlur) {
        onBlur(e);
      }
      if (!value) {
        active.value = withTiming(0, {
          duration: 200,
        });
      }
    };

    return (
      <Animated.View style={[styles.container2, BorderStyle2]}>
        <Animated.View style={[styles.container, BorderStyle]}>
          {label && (
            <Animated.View
              style={[
                styles.labelContainer,
                AnimatedLableContainerStyle,
                {
                  justifyContent: multiline ? 'flex-start' : 'center',
                  top: multiline ? 7 : 0,
                },
              ]}>
              <Animated.Text style={[styles.text, AnimatedLabelStyle]}>
                {t(`${label}`)}
              </Animated.Text>
            </Animated.View>
          )}
          <TextInput
            value={value}
            onChangeText={onChange}
            style={[
              {height: numberOfLines ? numberOfLines * 40 : 50},
              styles.inputContainer,
              styles.text,
              inputContainerStyle,
            ]}
            placeholderTextColor={COLORS.gray[3]}
            onFocus={onCusotmeFocus}
            onBlur={onCustomBlur}
            ref={ref}
            multiline={multiline}
            {...restProps}
          />
          {_renderRightIcon}
        </Animated.View>
      </Animated.View>
    );
  },
);

export default BaseTextInput;

const styles = StyleSheet.create({
  container2: {
    borderRadius: 10,
    marginVertical: 10,
  },
  container: {
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 10,
    position: 'relative',
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  labelContainer: {
    position: 'absolute',
    left: 15,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  text: {
    fontSize: s(14),
    lineHeight: s(20),
    color: COLORS.text.default,
    fontFamily: FONT_FAMILY.SEMI,
  },
});
