import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs"
import { configKey } from "../../config";

export const adminAuthservices =()=>{

  const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  };

  const comparePassword = (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword);
  };

const generateToken = (payload: string) => {
    if (configKey.ADMINJWT_SECRET_KEY) {
      const token = jwt.sign({ payload }, configKey.ADMINJWT_SECRET_KEY, {
        expiresIn: "2d",
      });
      console.log(token,"tokennnnnnnn");
      
      return token;
    } else {
      throw new Error("JWT Token is undefined");
    }
  };

  const verifyToken = (token: string) => {
    if (configKey.ADMINJWT_SECRET_KEY) {
      const userId = jwt.verify(token, configKey.ADMINJWT_SECRET_KEY);
      console.log(userId,"000000000000000099999");
      
      return userId;
    }
    return undefined;
  };

  return {
    encryptPassword,
    comparePassword,
    generateToken,
    verifyToken

  }

}




export type adminAuthServicesReturn = ReturnType <typeof adminAuthservices>
export type adminAuthservices=typeof adminAuthservices
