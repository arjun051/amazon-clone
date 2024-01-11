const functions = require("firebase-functions")
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const { RepeatOneSharp } = require("@mui/icons-material");
const stripe = require("stripe")('sk_test_51O1EHLSHauNfAME7Wj07dz8CINxyMglVe0cRc7MzzoCPyVQeJYsAzWOhWrSeT5PKxs5hH9ICeoVekyAvwLoiey4P00rZ31jCjY')
 // Api


// - Api config 
const app = express()

// - Middlewares
app.use(cors({ origin : true}))
app.use(express.json());

// - Api routes
app.get('/',(request,response) => response.status(200).send('Hello'))
app.post('/payments/create',async(request,response) => {
    const total = request.query.total
    console.log('Payment request recieved for this amount >>>',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total,
        currency: 'usd',
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_Secret,
    })
} )

//hey

// - Listen Commands
exports.api = functions.https.onRequest(app)
//example endpoint
// http://127.0.0.1:5001/clone-e3175/us-central1/api