const PayCycle = require('./payCycle');

//Configura os métodos HTTP que serão utilizados
PayCycle.methods(['get', 'post', 'put', 'delete']);

//Corrige o método put fazendo-o retornar o novo objeto após a alteração e aplica as validaçoes do schema, que por default, funcionanm apenas no método post
PayCycle.updateOptions({ new: true, runValidators: true });

//Retorna o total de registros no banco
PayCycle.route('count', (req,res,next) => {
  PayCycle.count((error, value) => {
    
    if(error) {
      res.status(500).json({errors: [error]});
    } else {
      res.json({value});
    }

  });
});


module.exports = PayCycle;