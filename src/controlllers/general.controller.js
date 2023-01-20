exports.createGeneral = (req, res) => {
  req.getConnection((err, conn) => {
    if(err) return res.send(err);
    conn.query(
      "INSERT INTO " + req.params.tabla + " SET ? ", [req.body],
      (err, rows) =>{
        console.log(
          err 
          ? "Err INSERT INTO " + req.params.tabla + " " + err
          : req.params.tabla + " insertado."
        )
        res.json(
          err
          ? {err: "Error al cargar datos."}
          : {msg: "Datos insertados "}
        )
      }
    )
  })
}

exports.delete = (req, res) => {
  req.getConnection((err, conn) =>{
    if(err) return res.send(err);
    conn.query(
      "DELETE FROM " + req.params.tabla + " WHERE " + req.params.id + " = ? ", [req.params.value],
      (err, rows) =>{
        console.log(
          err ? "Err DELETE FROM " + req.params.tabla + " WHERE " + req.params.id + " = ? " + err
          : req.params.tabla + "ID eliminado correctamente."
        );
        res.json(
          err
          ? {err: "Ocurrio un error al tratar de eliminar."}
          : {msg: "ID eliminado correctamente."}
        )
      }
    )
  })
}

exports.consulta = (req, res) => {
  req.getConnection((err, conn) =>{
    if(err) return res.send(err);
    console.log(req.params.tabla);
    console.log(req.params.campo);
    console.log(req.params.value);
    conn.query(
      "SELECT * FROM " + req.params.tabla + " WHERE " + req.params.campo + " = ?", [req.params.value],
      (err, rows) =>{
        console.log(rows)
        console.log(
         rows.length !== 0
         ? "SELECT FROM " + req.params.tabla + " WHERE " + req.params.campo + " = ? "
         : req.params.tabla + " Error al consultar"
        )
        res.json(
         rows.length == 0
         ? {err: "No se ha podido realizar la consulta."}
         : {msg: "Busqueda exitosa", result: rows}
        )
      }
    )
  })
}

exports.actualiza = (req, res) => {
  req.getConnection((err, conn) =>{
    if(err) return res.send(err);
    conn.query(
      "UPDATE " + req.params.tabla + " SET ? WHERE " + req.params.campo + " = ? ", [req.body, req.params.value],
      (err, rows) => {
        console.log(
          err
          ? "Err UPDATE " + req.params.tabla + " SET ? WHERE " + req.params.cedula + " = ?" + err
          : req.params.tabla + "Datos actualizados."
        );
        res.json(
          err
          ? {err: "Ha ocurrido un error al actualizad los datos."}
          : {msg: "Datos actualizados con éxito."}
        )
      }  
    )
  })
}