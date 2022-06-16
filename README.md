## Description

This is application called 'Cars register'

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
<li> Create a car
<li> Create a driver 
<i> (the driver should be assigned to any car) <i>
<li> Find all cars and related drivers to them
<li> Find a car using 'id' and related drivers to the car
<li> Update a car properties
<li> Remove a car

## Example of requests:
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
Always