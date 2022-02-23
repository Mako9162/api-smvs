const jwt = require('jsonwebtoken');

const db = require('../lib/db.js');

function rutaidController(req, res) {
    
    const {ruta_id} = req.params;

    const sql = `SELECT * FROM ruta WHERE ruta_id= ${ruta_id}` ;

    jwt.verify(req.token, "smvssmvs", (err) => {
        if(err){
            res.send('Token no valido');
        }else{
            db.query(sql, (error, result) => {
                if (error) throw error;
                if (result.length > 0){
                    res.json(result);
                }else{
                    res.status(404).send('Sin Resultados!!!');
                }
            });
        }        

    });

};

function rutaController( req, res) {
    
    const sql = 'INSERT INTO ruta SET ?';

    const customerObj = {

        ruta_geoc_id: req.body.ruta_geoc_id,
        ruta_line: req.body.ruta_line   
                
    };

    jwt.verify(req.token, "smvssmvs", (err) => {
        if(err){
            res.send('Token no valido');
        }else{
            db.query(sql, customerObj, error => {
                if (error) throw error; 
                console.log(customerObj);
                res.status(200).send('Guardado correctamente !');
            });
        }
    });
    
};

module.exports = {
    rutaidController,
    rutaController
};