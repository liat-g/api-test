import * as express from 'express';
import { register } from '../controllers/authetication';

export default (router: express.Router) => {
    router.post('/auth/register', register);
}