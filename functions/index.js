const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_U2NagvurcyAQjnRM8TygLNSa00gvpQgT3m');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/',(req,res)=> res.status(200).send("Hello World"))

app.post('/payment/create', async (req, res)=>{
    console.log("Server payment");
    const total = parseInt(req.query.total);
    console.log("Payment Request recieved, for total ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    console.log("Payment clientSecret ", paymentIntent);
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app);
