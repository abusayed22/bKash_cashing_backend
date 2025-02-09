import { jwtVerify, SignJWT } from "jose";
import '@/envConfiq';

const env = process.env



// create token 
export async function CreateToken(email,id) {
    try {
     const secret = new TextEncoder().encode(env.JWT_SECRET);
     const payload = {email,id};
 
     let token = new SignJWT(payload)
     .setProtectedHeader({alg:'HS256'})
     .setIssuedAt()
     .setIssuer(env.JWT_ISSUER)
     .setExpirationTime(env.JWT_EXPIRE) 
     .sign(secret)
 
     return token;
    } catch (error) {
     console.log('create token errro: ',error)
    } 
 }


 // token Decoded
export async function TokenDecoded(token) {
    // console.log('dec',JWT_SECRET)
    try {
        const secret = new TextEncoder().encode(env.JWT_SECRET);
        const decoded = await jwtVerify(token, secret);
        return decoded['payload']
    } catch (error) {
        console.log('token decoded error: ', error)
    }
}