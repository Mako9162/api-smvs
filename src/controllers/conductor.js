const jwt = require('jsonwebtoken');

const db = require('../lib/db.js');

function condController( req, res) {
    
    const sql = 'INSERT INTO conductor SET ?';

    const customerObj = {
        cond_nombre: req.body.cond_nombre,
        cond_apellido: req.body.cond_apellido,
        cond_rut: req.body.cond_rut,
        cond_empr_id: req.body.cond_empr_id,
        cond_visible: req.body.cond_visible
        
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

function condidController(req, res) {
    
    const {cond_id} = req.params;

    const sql = `SELECT * FROM conductor WHERE cond_id= ${cond_id}` ;

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

module.exports = {
    condController,
    condidController
};