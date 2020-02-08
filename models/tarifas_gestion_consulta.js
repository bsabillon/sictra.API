/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_gestion_consulta', {
    idgestion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gc_referencia: {
      type: DataTypes.STRING(120),
      allowNull: true,
      defaultValue: ' '
    },
    gc_agente_A: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_fecha_inicio_A: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_fecha_final_A: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_contenedor_A1: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_A1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_A1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_A2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_A2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_A2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_A3: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_A3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_A3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_A4: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_A4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_A4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_A5: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_A5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_A5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_agente_B: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_fecha_inicio_B: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_fecha_final_B: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_campo_B1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_B1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_B2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_B2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_B2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_B3: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_B3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_B3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_B4: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_B4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_B4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_B5: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_B5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_B5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_agente_C: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_fecha_inicio_C: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_fecha_final_C: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_contenedor_C1: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_C1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_C1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_C2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_C2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_C2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_C3: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_C3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_C3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_C4: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_C4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_C4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_C5: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_C5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_C5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_agente_D: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_fecha_inicio_D: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_fecha_final_D: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_campo_D1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_D1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_D2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_D2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_D2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_D3: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_D3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_D3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_D4: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_D4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_D4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_D5: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_D5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_D5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_agente_E: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_fecha_inicio_E: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_fecha_final_E: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_contenedor_E1: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_E1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_E1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_E2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_E2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_E2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_E3: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_E3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_E3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_E4: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_E4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_E4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_E5: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_E5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_E5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_agente_F: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_fecha_inicio_F: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_fecha_final_F: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_campo_F1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_F1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_F2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_F2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_F2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_F3: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_F3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_F3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_F4: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_F4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_F4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_F5: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_F5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_F5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_agente_G: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_fecha_inicio_G: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_fecha_final_G: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_contenedor_G1: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_G1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_G1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_G2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_G2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_G2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_G3: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_G3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_G3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_G4: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_G4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_G4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_G5: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_G5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_G5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_agente_H: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_fecha_inicio_H: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_fecha_final_H: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gc_campo_H1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_H1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_H2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_H2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_H2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_H3: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_H3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_H3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_H4: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_H4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_H4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gc_contenedor_H5: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gc_campo_H5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gc_valor_H5: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tarifas_gestion_consulta'
  });
};
