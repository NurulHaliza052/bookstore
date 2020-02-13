//app/examples/delete.data.js
const sql = require("../models/db");
sql.query("DELETE FROM BOOKS WHERE id = '1'", (err,res) => {
    if (err) {
        Console.log(err);
    } else {
        Console.log("Data berhasil dihapus: " + res.affectedRows);
    }
});