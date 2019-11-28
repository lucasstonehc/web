var express = require('express');
var router = express.Router();
const {Tarefa} = require('../banco');

/* GET home page. */
router.get('/', function(req, res, next) {
  Tarefa.findAll({
    order: [
      ['createdAt', 'DESC']
    ]
  })
    .then(tarefas => {
      res.render('tarefas', {tarefas: tarefas});
    });
});

router.post('/tarefas/nova', (req, res) => {
  var prazo = req.body.prazo.trim().length ? new Date(req.body.prazo) : null;
  const data = {
    descricao: req.body.desc,
    prazo: prazo
  };

  Tarefa.create(data)
    .then(tarefa => {
      console.log('Tarefa criada com id %i.', tarefa.id);
      res.redirect(303, '/'); // padrão PRG
    })
});

router.post('/tarefas/excluir', (req, res) => {

  Tarefa.destroy( {
    where: {
      id: parseInt(req.body.tarefa_id)
    }
  }).then(() => {
    console.log('tarefa %i. excluida: %s', req.body.tarefa_id);
    res.redirect(303, '/');
  });

});

router.post('/tarefas/concluir', (req, res) => {

  const data = {
    concluida: (req.body.tarefa_concluida === 'true')
  };

  Tarefa.update(data, {
    where: {
      id: parseInt(req.body.tarefa_id)
    }
  }).then(() => {
    console.log('tarefa %i. concluida: %s', req.body.tarefa_id, req.body.tarefa_concluida);
    res.redirect(303, '/');
  });

});

module.exports = router;
