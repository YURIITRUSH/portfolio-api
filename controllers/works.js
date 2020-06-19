const ExampleOfWork = require('../models/ExampleOfWork.js')
exports.create = function(req, res, next) {
  



  var record = new ExampleOfWork(req.body);
  record.save(function (err, work) {
    if (err) return res.status(400).send(err);
    res.json(work)
  })
}
exports.list = function(req, res, next) {
  ExampleOfWork.find({}, (err, works) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.json(works)
    }
  })
}
exports.show = function(req, res, next) {
  var { id } = req.params
  ExampleOfWork.findById(id, function (err, doc) {
  if (err) {
    return res.status(404).send('404 Error')
  }
  res.json(doc)
});
}
exports.update = function(req, res, next) {
  var { id } = req.params
  ExampleOfWork.findByIdAndUpdate(id, req.body, { upsert: true }, function (err, doc) {
    if (err) {
      return res.status(404).send('404 Error')
    }
    res.json(doc)
  });
}
exports.delete = function(req, res, next) {
  ExampleOfWork.findOneAndRemove({ _id: req.params.id }, (err) => {
    if (err) {
      return res.send(err)
    }
    res.status(204).json("No content")
  })
}
