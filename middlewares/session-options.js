import { MongoClient } from 'mongodb';
import { promisifyStore, expressSession } from 'next-session';
import connectMongo from 'connect-mongo';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MongoStore = connectMongo(expressSession);

const mongoStore = new MongoStore({
    client: client,
    stringify: false,
});

export default {
    store: promisifyStore(mongoStore),
}
