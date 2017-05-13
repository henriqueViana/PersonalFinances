const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Informe um nome para o crédito'] } ,
  value: { type: Number, min: 0, required: [true, 'Informe um valor para o crédito'] }
});

const debtSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Informe um nome para o seu débito'] } ,
  value: { type: Number, min: 0, required: [true, 'Informe um valor para o débito'] } ,
  status: { type: String, required: false, uppercase: true , enum: ['PAGO', 'PENDENTE', 'AUSENTE']}
});

const payCycleSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Informe um nome para o ciclo de pagamento'] } ,
  month: { type: Number, min: 1, max: 12, required: [true, 'Informe o mês do ciclo de pagamento'] } ,
  year: { type: Number, min: 1970, max: 2100, required: [true, 'Informe o ano do ciclo de pagameto'] } ,
  credits: [ creditSchema ] ,
  debts: [ debtSchema ]
});

module.exports = restful.model('PayCycle' , payCycleSchema);