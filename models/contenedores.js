/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contenedores', {
    idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contenedor_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contenedor_ref: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    contenedor_ancho: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_alto: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_largo: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_peso_kg: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_volumen_cbm: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_imagen: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    contenedor_pesobruto_kg: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_volumenbruto_cbm: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_tarplan: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    contenedor_tarpeso: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    contenedor_tarvolumen: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    contenedor_custom: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    contenedor_cool: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    contenedor_CANTIDAD_KG: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    contenedor_CBM_KG: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    contenedor_CFT_LBS: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    contenedor_ancho_puerta: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_alto_puerta: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_peso_lbs: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_pesobruto_lbs: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_volumen_cft: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_volumenbruto_cft: {
      type: "DOUBLE",
      allowNull: true
    },
    contenedor_coloader: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'contenedores'
  });
};
