const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'tvoj_korisnicki_naziv',
    password: 'tvoja_lozinka',
    database: 'tvoje_ime_baze'
});

db.connect(err => {
    if (err) {
        console.error('Greška pri povezivanju s bazom:', err);
        return;
    }
    console.log('Povezano s bazom podataka.');
});
