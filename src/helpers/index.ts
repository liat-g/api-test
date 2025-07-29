//authentication helps to encrypt and authenticate tokens
import * as crypto from 'crypto';

const SECRET = 'STOMA-REST-API'

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/').update(SECRET).digest('hex'));
};

