const { json } = require('express');
const { app } = require('./core'); 
const { db, update } = require('./db');

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */


app.get('/Vacuum/on', (req, res) => {
let ost = db.get('devices');
let pan = ost.find({ id : "VAC1" })
pan.assign({ on : true })

.value();
res.end();
update();
})

app.get('/Vacuum/off', (req, res) => {
let ost = db.get('devices');
let pan = ost.find({ id : "VAC1" })
pan.assign({ on : false })

.value();
res.end();
update();
})

app.get('/Light/Bedroom/on', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "LIG1" })
    pan.assign({ on : true })
    
    .value();
    res.end();
    update();
})

app.get('/Light/Bedroom/off', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "LIG1" })
    pan.assign({ on : false })
    
    .value();
    res.end();
    update();
})

app.get('/Light/LivingRoom/on', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "LIG2" })
    pan.assign({ on : true, brightness: 0.5 })
    
    .value();
    res.end();
    update();
})

app.get('/Light/LivingRoom/off', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "LIG2" })
    pan.assign({ on : false })
    
    .value();
    res.end();
    update();
})

app.get('/Light/Garden/on', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "LIG3" })
    pan.assign({ on : true })
    
    .value();
    res.end();
    update();
})

app.get('/Light/Garden/off', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "LIG3" })
    pan.assign({ on : false })
    
    .value();
    res.end();
    update();
})

app.get('/Blinds/up', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "BLI1" })
    pan.assign({ on : false })
    
    .value();
    res.end();
    update();
})

app.get('/Blinds/down', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "BLI1" })
    pan.assign({ on : true })
    
    .value();
    res.end();
    update();
})

app.get('/AC/on', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "AC1" })
    pan.assign({ on : true })
    
    .value();
    res.end();
    update();
})

app.get('/AC/off', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "AC1" })
    pan.assign({ on : false })
    
    .value();
    res.end();
    update();
})

app.get('/Door/Lock', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "LOC1" })
    pan.assign({ locked : false })
    
    .value();
    res.end();
    update();
})
app.get('/Door/Unlock', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "LOC1" })
    pan.assign({ locked : true })
    
    .value();
    res.end();
    update();
})

app.get('/Cam/on', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "CAM1" })
    pan.assign({ on : true })
    
    .value();
    res.end();
    update();
})

app.get('/Cam/off', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "CAM1" })
    pan.assign({ on : false })
    
    .value();
    res.end();
    update();
})

app.get('/Speaker/on', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "SPE1" })
    pan.assign({ on : true })
    request.open('GET', 'assets/beat3.mp3', true)

    .value();
    res.end();
    update();
})

app.get('/Speaker/off', (req, res) => {
    let ost = db.get('devices');
    let pan = ost.find({ id : "SPE1" })
    pan.assign({ on : false })
    request.open('GET', 'assets/beat3.mp3', false)
    
    .value();
    res.end();
    update();
})
