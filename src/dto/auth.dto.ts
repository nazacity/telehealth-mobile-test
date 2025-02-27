import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export interface SignInDto {
  idCard: string;
}

export const signInDefaultValue: SignInDto = {
  idCard: '',
};

export const signInSchema = () => {
  const {t} = useTranslation();
  return yupResolver(
    yup.object().shape({
      idCard: yup
        .string()
        .max(13, t('errors.id_card'))
        .min(13, t('errors.id_card'))
        .required(),
    }),
  );
};
