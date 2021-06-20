const {
  getAllTransactions,
  getAnTransaction,
} = require('../../../controllers/Core/transactionController');

module.exports = (router, models, auth, sequelize) => {
  router.get('/kardex/', auth, getAllTransactions(models, sequelize));

  router.get('/kardex/:id', auth, getAnTransaction(models, sequelize));

  return router;
};