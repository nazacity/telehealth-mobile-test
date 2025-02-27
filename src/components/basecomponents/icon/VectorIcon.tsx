import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from 'theme/theme';

export type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons'
  | 'Zocial'
  | 'SimpleLineIcons';

interface IProps {
  type: IconType;
  name: string;
  size?: number;
  color?: string;
}

const VectorIcon: React.FC<IProps> = ({type, name, size, color}) => {
  switch (type) {
    case 'AntDesign':
      return (
        <AntDesign
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'EvilIcons':
      return (
        <EvilIcons
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'Feather':
      return (
        <Feather
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'FontAwesome':
      return (
        <FontAwesome
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'Fontisto':
      return (
        <Fontisto
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'Foundation':
      return (
        <Foundation
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'Foundation':
      return (
        <Foundation
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'Octicons':
      return (
        <Octicons
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'Zocial':
      return (
        <Zocial
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
    default:
      return (
        <FontAwesome
          name={name}
          size={size ? size : 24}
          color={color ? color : COLORS.text.default}
        />
      );
  }
};

export default VectorIcon;
