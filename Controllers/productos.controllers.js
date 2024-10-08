const db = require("../DB/db");

const index = (req, res) => {
    const sql = "SELECT * FROM farmacia";
    db.query(sql, (error, rows) =>{
        if(error){
            return res.status(500).json({error: "Intente mas tarde"});
    }

    res.json(rows);
        
    })
};

module.exports ={
    index,
}