const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter) {
    const response =  await Flight.findAll({
        where: filter,
        attributes: [
          "id",
          "flightNumber",
          "airplaneId",
          "departureAirportId",
          "arrivalAirportId",
          "arrivalTime",
          "departureTime",
          "price",
          "boardingGate",
          "totalSeats",
          "createdAt",
          "updatedAt",
        ],
    })
    return response;
  }
}

module.exports = FlightRepository;


