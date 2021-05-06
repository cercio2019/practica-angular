const express = require('express');
const app = express();
const cors = require('cors');
const {v4: uuidv4} = require('uuid');
const {readFile, writeFile} = require('fs').promises;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let items = [];

app.get('/', (req, res) => {
    res.send('Servidor de prueba');
});
app.get('/contacts', async (req, res) => {
    await open();
    res.json(items);
});

app.get('/locations', async(req, res)=>{
    await openlocation();
    res.json(items)
})

app.get('/contacts/:id', (req, res) => {
    res.send(`${req.params.id}`);
});

app.get('/locations/:id', async(req, res)=>{
    await openlocationId(req.params.id);
    res.json(items)
})

app.post('/addContact', async (req, res) => {
    const id = uuidv4();
    req.body['id'] = id;
    await open();
    items.unshift(req.body);
    
    await save();
    res.json(req.body);
});

async function save(){
    const res = await writeFile('contacts.json', JSON.stringify(items), 'utf-8');
}

async function open(){
    const res = await readFile('contacts.json', 'utf-8');
    items = JSON.parse(res);
    console.log('open',items);
}

async function openlocation(){
    const res = await readFile('locations.json', 'utf-8');
    items = JSON.parse(res);
    console.log('open',items);
}

async function openlocationId(id){
    const res = await readFile('locations.json', 'utf-8');
    items = JSON.parse(res);
    items = items.filter(date => date.id == id);
    console.log('open',items);
}


app.listen(3000, () => {
    console.log('servidor iniciado...');
});