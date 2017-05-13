const PayCycle = require('./payCycle');
const errorHandler = require('../common/errorHandler');

//Configura os métodos HTTP que serão utilizados
PayCycle.methods(['get', 'post', 'put', 'delete']);

//Corrige o método put fazendo-o retornar o novo objeto após a alteração e aplica as validaçoes do schema, que por default, funcionanm apenas no método post
PayCycle.updateOptions({ new: true, runValidators: true });

//Atribui o Middleware errorHandle após a execução dos métodos http de post e put
PayCycle.after('post', errorHandler).after('put', errorHandler);

//Serviço que retorna o total de registros no banco
PayCycle.route('count', (req, res, next) => {
  PayCycle.count((error, value) => {
    
    if(error) {
      res.status(500).json({errors: [error]});
    } else {
      res.json({value});
    }

  });
});

//Serviço que retorna o valor total de creditos e de débitos
PayCycle.route('summary', (req, res, next) => {
  PayCycle.aggregate(
    {
      $project: {
        credit: { $sum: '$credits.value'}, 
        debt: { $sum: '$debts.value'}
      }
    } , 
    {
      $group: {
        _id: null, 
        credit: { $sum: '$credit' },
        debt: { $sum: '$debt' } 
      }
    } ,
    {
      $project: {
        _id: 0,
        credit: 1,
        debt: 1
      }
    } , 
    (error, result) => {
      if(error) {
        res.status(500).json({errors: [error]});
      } else{
        res.json(result[0] || {credit: 1, debt: 1});
      }
    }
  );
});

module.exports = PayCycle;