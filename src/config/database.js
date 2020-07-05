module.exports = {
  host: '127.0.0.1', 
  username: 'postgres', 
  password: '123', 
  database: 'nodeauth', 
  dialect: 'postgres', 
  logging: false, 
  define: {
    timestamps: true, 
    underscored: true,
    underscoredAll: true
  }
};