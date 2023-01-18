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