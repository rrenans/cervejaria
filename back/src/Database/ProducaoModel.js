import Sequelize, { Model, SMALLINT } from 'sequelize';

class Producao extends Model{
  static init(sequelize) {
    super.init({
      "idproducao": {type: Sequelize.SMALLINT, primarykey: true},
      "regiao_fabricada": Sequelize.STRING
    }, {
      sequelize,
      freezeTableName: true,
      tableName: "producao",
      timestamps: false,
      underscored: true
    }),
    this.removeAttribute("id")
    console.log(this.length)
    return this
  }
  static associate(model){
    console.log(model)
    this.belongsTo(model.Cerveja, {
      constraints: false,
      foreignKey: "idcerveja",
      targetKey: "idcerveja",
      as: "cerveja_producao"
    })
  }
}

export default Producao;