const dbPool = require('../config/database');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery);
};

const createNewUser = body => {
  const SQLQuery = `  INSERT INTO users (name, telp, address) 
                        VALUES ('${body.name}', '${body.telp}', '${body.address}')`;

  return dbPool.execute(SQLQuery);
};

const updateUser = (body, idUser) => {
  const SQLQuery = `  UPDATE users 
                        SET name='${body.name}', telp='${body.telp}', address='${body.address}' 
                        WHERE id=${idUser}`;

  return dbPool.execute(SQLQuery);
};

const deleteUser = idUser => {
  const SQLQuery = `DELETE FROM users WHERE id=${idUser}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
