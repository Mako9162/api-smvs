const {Router} = require('express');
const router = Router();
const jwt = require('jsonwebtoken')

const pass = require('../lib/jwt.js');
const vehi = require('../controllers/vehiculos');
const cond = require('../controllers/conductor');
const geoc = require('../controllers/geocerca');
const regi = require('../controllers/registro');
const ruta = require('../controllers/ruta');

//ruta de login que genera el token 
router.post('/login', (req, res) => {
    const user = {
        id: 1,
        username: 'Marco Arancibia',
        email: 'marancibia@outlook.com'
    }

    jwt.sign({user: user}, 'smvssmvs', {expiresIn: '365d'}, (err, token) => {
        res.json({
            token,
        });
    });
});
//prueba para el token
router.post('/post', pass, (req, res) => {
    jwt.verify(req.token, "smvssmvs", (err, authData) => {
        if(err){
            res.send('Token no valido');
        }else{
            res.json({
                message:"Token Valido",
                authData
            });
        }   
    });
});

//rutas para vehiculos
router.get('/patente/:vehi_id', pass, vehi.vehiController);
router.post('/ipatente', pass, vehi.vehiiController);
router.delete('/patente/:vehi_id', pass, vehi.vehidController);

//ruta para conductores
router.get('/conductor/:cond_id', pass, cond.condidController);
router.post('/conductor', pass, cond.condController);

//ruta para geocercas
router.get('/geocerca/:geoc_id', pass, geoc.geocidController);
router.post('/geocerca', pass, geoc.geocController);

//ruta de registros
router.get('/registro/:regi_id', pass, regi.regidController);
router.post('/registro', pass, regi.regController);

//ruta de ruta
router.get('/ruta/:ruta_id', pass, ruta.rutaidController);
router.post('/ruta', pass, ruta.rutaController);

module.exports = router;