const mongoose = require('mongoose');
const express = require('express');
const app = express();
const controller = require ('./controller.js')

const port = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://nichsuz:<password>@cluster0.j7woi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('made a connection to the database')

})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();

app.use('/feedback', router);
router.post('/', controller.sendFeedback, (req, res) => {
  return res.status(200).json(res.locals)
})

// const mockResponse = {
//   foo: 'bar',
//   bar: 'foo'
// };
// app.get('/api', (req, res) => {
//   res.send(mockResponse);
// });
// app.get('/', (req, res) => {
//  res.status(200).send('Hello World!');
// });
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});