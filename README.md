# Monster Coin Cryptocurrency | Full-Stack | Reatch App


GOAL:

- Full backend with test-driven development.
- TDD suite with Jest for the backend.
- Frontend in React Native with web view.
- Deployed the application to production (with multiple servers).
- Create an API around the Blockchain.
- Create a real-time connected peer-to-peer server with a pub/sub implementation.
- Implement a proof-of-work algorithm.
- Sign Transactions with cryptography and digital signature.
- Create a Transaction Pool for a real-time list of incoming data.
- Include transactions in core blocks of the chain.

## Client
`npm run dev`


## Run locally to test endpoints.

To test endpoints on a local server:
``` 
npm run dev
```

To open a second server to test peer-2-peer transactions:
``` 
npm run dev-peer

```

Using Postman or Thunder Client you can make a POST request to `http://localhost:3000/api/transact` with an object specifying a recipient (is to be a public key) and an amount.
```
{
    "recipient" : "foo",
    "amount" : 30
}
```


## Run test.

Test suit made with Jest testing
``` 
npm run test
```
