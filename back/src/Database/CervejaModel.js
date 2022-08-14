import Sequelize, { Model, SMALLINT } from 'sequelize';

class Cerveja extends Model{
  static init(sequelize) {
    super.init({
      "idcerveja": {type: Sequelize.SMALLINT, primarykey: true},
      "nome": Sequelize.STRING,
      "tipo": Sequelize.STRING
    }, {
      sequelize,
      freezeTableName: true,
      tableName: "cerveja",
      timestamps: false,
      underscored: true
    }),
    this.removeAttribute("id")
    console.log(this.length)
    return this
  }
  static associate(model){
    this.hasMany(model.Producao, {
      // constraints: false,
      // foreignKey: "idcerveja",
      // targetKey: "idcerveja",
      // as: "cerveja_producao"
    })
  }
}

export default Cerveja;