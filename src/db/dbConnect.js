const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'DreamCarMarket',
    password: '',
    port: 5432,
});


let login = '13';
let pass = '14';
let email = 'jopka@p33isy33a.com';
let firstname = 'dfadfffa44sd';

Login(login,pass)

function Register(login,pass,email,firstname){
    let date = new Date ()
    client.connect(err => {
        if (err) throw err;
        else {
            console.log(date+";Database is OK! status:200")
            console.log(date+";Operation:Registration")
            client.query("INSERT INTO accounts (login,pass,email,firstname) VALUES($1,$2,$3,$4)",[login,pass,email,firstname])
            .then(response =>{
                console.log(date+";Request is succesfully!")
                client.end(
                    console.log(date+";Session closed!")
                )
            })
            .catch(err=>{
                console.log(err)
                throw err;
            })
        }

    });

}
function Login(login,pass){
    let date = new Date ()
    client.connect(err => {
        if (err) throw err;
        else {
            console.log(date+";Database is OK! status:200")
            console.log(date+";Operation:Login")
            client.query("SELECT * FROM accounts WHERE login IN ($1) AND pass in($2)",[login,pass])
                .then(response =>{
                    console.log(date+";Request is succesfully!")
                    console.log(date+";Result:"+client.results)
                    client.end(
                        console.log(date+";Session closed!")
                    )
                })
                .catch(err=>{
                    console.log(err)
                    throw err;
                })
        }
    });

}

