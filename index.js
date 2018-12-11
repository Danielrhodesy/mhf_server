const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/data', function(req, res){
  res.json(data);
});

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
    console.log('Server is running on port '+app.get('port'));
})
