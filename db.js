const sql=require("mysql");
const db=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"gokul196",
    database:"student_reg"
});
db.connect((err) => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log("NOt connected");
        console.log(err);
    }
});


module.exports=db;