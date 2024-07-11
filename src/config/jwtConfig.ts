import { JwtModuleOptions } from '@nestjs/jwt';
import Constants from 'src/constants';

const jwtConfig: JwtModuleOptions = {
  secret: Constants.Security.SECRET_KEY,
  signOptions: {
    expiresIn: '1d',
  },
};

export default jwtConfig;
