## Description

The application is called 'Cars register'. It has very basic Nest.js functionality and helps to understand the fundamentals of the framework. I have implemented authentification using pasport-local strategy from Passport.js, RBAC authorization model. There is basics CRUD model that allows practicing fully-cycle actions with entities. Domain and API are separated so you can easily change transport from GraphQl to any other if you want. The application is built within docker and easily runs.

## Technologies

<li> Node.js using Nest.js framework
<li> MySQL 5.7
<li> TypeORM
<li> GraphQL
<li> Docker & Docker Compose

## Running the app

```bash
$ docker-compose build

$ docker-compose up

```

## Functionality
<li> Create (register) a user
<li> Log in (using passport-local strategy)
<li> Log out
<li> Find all users
<li> Find a user by 'id'
<li> Create a car
<li> Create a driver 
<i> (the driver should be assigned to any car) </i>
<li> Find a driver by 'id'
<li> Find all cars and related drivers to them
<li> Find a car using 'id' and related drivers to the car
<li> Update a car properties
<li> Remove a car

## Example of requests:

<li> Create (register) a user
  
```bash
mutation {
  createUser(createUserInput: {
    username: "Neo",
    password: "Matrix"
  }) {
    id,
    username,
    password,
  }
}

```

<li> Log in
  
```bash
mutation {
  login(loginUserInput: {
    username: "Kyrylo",
    password: "Matrix"
  }) {
    username,
    id,
  }
}

```

<li> Log out
  
```bash
query {
  logoutUser{
    Message
  }
}

```

<li> Find all users
  
```bash
query {
  findAllUsers {
    id,
    username,
    password,
    roles,
  }
}

```

<li> Find a user by id
  
```bash
query {
  findUser(username: "Sam") {
    id,
    username,
  }
}

```

<li> Create a car
  
```bash
{
  createCar(createCarInput: {
    brand: "BMW",
    color: "black"
  }) {
    id,
    brand,
    color
  }
}

```
<li> Create a driver 
  
```bash
{
  createDriver(createDriverInput: {
    name: "Andrew",
    carId: 1,
  }) {
    name,
    carId
  }
}

```
<li> Find a driver by id
  
```bash
query {
  findDriver(id: 11)
  {
    name,
    carId,
  }
}

```
<li> Find all cars and related drivers to them
  
```bash
{
  getAllCars {
    brand,
    color,
    drivers {
      name,
      carId
    }
  }
}
```
<li> Find a car using 'id' and related drivers to the car
  
```bash
{
  getCar(id: 1) {
    id,
    brand,
    color,
    drivers {
      name,
      carId
    }
  }
}

```
<li> Update a car's properties
  
```bash
{
  updateCar(id: 1, data: {
    brand: "Mercedes",
    color: "Yellow"
  }) {
  	id,
    brand,
    color
  }
}

```
<li> Delete a car
  
```bash
{
	deleteCar(id: 9) {
    brand,
  }
}

```

## Stay in touch
Always in touch
