const jwt = require('jsonwebtoken');

const db = require('../lib/db.js');

function geocController( req, res) {
    
    const sql = 'INSERT INTO geocerca SET ?';

    const customerObj = {
        geoc_nombre: req.body.geoc_nombre,
        geoc_color: req.body.geoc_color,
        geoc_poligono: req.body.geoc_poligono,
        geoc_visible: req.body.geoc_visible,
        geoc_div_id: req.body.geoc_div_id,
        geoc_empr_id: req.body.geoc_empr_id,
        geoc_codigo: req.body.geoc_codigo,
        geoc_max_speed: req.body.geoc_max_speed,
        geoc_m_b_speed: req.body.geoc_m_b_speed,
        geoc_tipo: req.body.geoc_tipo,
        geoc_item: req.body.geoc_item,
        cod_localidad: req.body.cod_localidad,
        nom_localidad: req.body.nom_localidad,
        nom_localidad_cm: req.body.nom_localidad_cm
                
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

function geocidController(req, res) {
    
    const {geoc_id} = req.params;

    const sql = `SELECT * FROM geocerca WHERE geoc_id= ${geoc_id}` ;

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
    geocController,
    geocidController
};