import * as express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as mongoose from 'mongoose';

//need to use the asterisk for some reason

const app = express();

app.use(cors({

    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {console.log('Server running on http://localhost:8080/')});

const MONGO_URL = 'mongodb+srv://jxst4fxcks:sMYgAaJUWJtrCc6y@cluster0.q8gjas8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

require("mongoose").Promise = Promise //require is new syntax 

mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error))

