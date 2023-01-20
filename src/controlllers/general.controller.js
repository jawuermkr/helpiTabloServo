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