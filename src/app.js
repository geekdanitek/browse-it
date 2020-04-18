import express, { response } from 'express';
import puppeteer from 'puppeteer';
//import axios from 'axios';
//import twilio from 'twilio';

const client = require('twilio')(process.env.SID, process.env.KEY);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express();

    // client.messages.create({
    //     from: 'whatsapp:+14155238886',
    //     to: 'whatsapp:+2348060917025',
    //     body: 'hello',
    //     mediaUrl: 'https://bit.ly/whatsapp-image-example'
    // })
    // .then(message => {
    //     console.log('sent');
    //     console.log(message.sid);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
//const url = 'https://timberwolf-mastiff-9776.twil.io/demo-reply';


app.post('/incoming', async (req, res) => {
    console.log('starting operation');

    const twiml = new MessagingResponse();

    const mess = req.body.Body;
    console.log(mess);
     //console.log(q);
    twiml.message(mess);
    res.set('Content-Type', 'text/xml');
    //res.send('done');
    //console.log(twiml.toString());
    res.status(200).send(twiml.toString());
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto('https://reftek.consulting');
    // await page.screenshot({path: 'demo1.png'});

    //res.send('done');
});

app.listen(3000, (req, res) => {
    console.log('hello');
});