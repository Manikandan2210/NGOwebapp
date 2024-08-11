
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParse = require("body-parser");
const compress = require("compression");
const cookieParse = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const helmet = require("helmet");
//get app.js

const {
    app: APP,
    db
} = require("./configurations/appConfigs");
const app = express();
const globalVariable = {};
global.need = (name,value) => {
    if (value !== undefined) {
        if (globalVariable[name]) {

        }else{
            globalVariable[name] = value;
        }
    }
    if (globalVariable[name]){
        return globalVariable[name];
    }
    return null;
};

app.use(helmet());
app.use(cookieParse());
app.use(bodyParse());
app.use(bodyParse.urlencoded({extended: true}));
app.use(compress());
app.use(morgan());

app.use((req, res, next)=> {
    if (req.get("host"))
        res.setHeader("Access-controll-Allow-Origin", req.get("host"));
    if (req.get("origin"))
        res.setHeader("Access-controll-Allow-Origin", req.get("origin"));
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS" 
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers",
    "origin, Content-Type, Authorzation, Accept");
    if (req.method == "OPTIONS"){
        res.send(200);
    }else {
        next();
    }
});

async function init(app) {
    const pool = require("./configurations/appConfigs");
    need("pool", pool);
    need("db", db);
    need("appConfig", APP);
}

init(app).then(()=>{
    app.use(require("./router/index"))
});


module.exports = app;