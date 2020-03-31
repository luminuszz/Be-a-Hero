# omniStack-11
Apoie ONG's, be a hero! 

## About
This a basic API using typescript , express , sqlite and knex


## Routes
````
routes.post('/login', SessionController.store)
routes.post('/createongs', UserController.store)
routes.use(tokenValidate)

// GET
routes.get('/ongs', UserController.index)
routes.get('/incidents', IncidentController.index)
routes.get('/profile', ProfilerController.index)
// POST
routes.post('/incidents', IncidentController.store)
// Delete
routes.delete('/incidents/:id', IncidentController.delete)

 ````
> obs: routes under the " tokenValidate " needs to jwt token created on login 

## Available 

### config the database in config/databaseConfig.ts
> read  the knex docs on  [knex docs](http://knexjs.org/)

In the project directory, you can run:
> `yarn`
> `db:migrate`

> `yarn start`
<br>
#or
you can run: 

> `npm install`
> `npm start`

## Usage example

![image](https://user-images.githubusercontent.com/48535259/77871797-95bb8780-721b-11ea-9f95-1fdca797b1d0.png)


![image](https://user-images.githubusercontent.com/48535259/77871849-c3083580-721b-11ea-8f1d-bac3fb7391bd.png)


>Insominia workspace [workSpace](https://drive.google.com/open?id=1YSNlhmLGWQkRkx3DKRjuEIMpxdqCjCw2)


create your requests the app in the production mode.<br />
 > Open [https://beahero12.herokuapp.com/](https://beahero12.herokuapp.com/) to view it in the browser.
<br />

