let express = require('express');
let router = express.Router();
let formidable = require('formidable');
let fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.delete('/file', (req, res) => {

  let form = new formidable.IncomingForm({

    uploadDir: './upload',
    keepExtensions: true

  });

  form.parse(req, (err, fields, files) => {

    let path =  fields.path;

    path = path.toString();

    if (fs.existsSync(path)) {

      fs.unlink(path, err => {

        if (err) {

          res.status(400).json({

            err

          });

        } else {

          res.json({
            fields
          });

        }

      });

    }

  });

})

router.post('/upload', (req, res) => {

  let form = new formidable.IncomingForm({

    uploadDir: './upload',
    keepExtensions: true

  });

  form.parse(req, (err, fields, files) => {

    res.json({

      files


    });

  });

})

module.exports = router;
