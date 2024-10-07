
const express = require('express');
const app = express();

app.get('/', (req, res)=>res.sendFile('/Users/nicolaslouis-kayen/repos/basic_informational_site/index.html'));


app.get('/:name', function (req, res, next) {
  var options = {
    root: '/Users/nicolaslouis-kayen/repos/basic_informational_site/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.name
    res.sendFile(fileName+'.html', options, function (err) {
      if (err) {
        // next(err)
        res.sendFile('/404.html')
      } else {
        console.log('Sent:', fileName)
      }
    })
})
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).sendFile('/Users/nicolaslouis-kayen/repos/basic_informational_site/404.html')
  })



const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(' Informational Site app - listening on port '+PORT+'!'))