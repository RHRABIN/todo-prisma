import express from 'express';
import router from './src/app/routes';

const app = express();
const port = process.env.PORT || 8000;

// app.use(cors())
// app.use(cookieParser())

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
