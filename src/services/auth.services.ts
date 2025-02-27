import {useMutation} from '@tanstack/react-query';
import {SignInDto} from 'dto/auth.dto';
import {IUser} from 'models/user.model';

const authServices = {
  useMutationSignIn(
    onSuccess: (data: IUser) => void,
    onError: (data: Error) => void,
  ) {
    return useMutation<IUser, Error, SignInDto>({
      mutationFn: async ({idCard}) => {
        try {
          const user: IUser = {
            id: 'abc',
            first_name: 'test',
            last_name: 'test',
          };
          return user;
        } catch (error) {
          throw error;
        }
      },
      onSuccess,
      onError,
    });
  },
};

export default authServices;
