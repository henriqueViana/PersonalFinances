const PayCycle = require('./payCycle');

//Configura os métodos HTTP que serão utilizados
PayCycle.methods(['get', 'post', 'put', 'delete']);

//Corrige o método put fazendo-o retornar o novo objeto após a alteração e aplica as validaçoes do schema, que por default, funcionanm apenas no método post
PayCycle.updateOptions({ new: true, runValidators: true });

module.exports = PayCycle;