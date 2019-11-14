"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.massKg = this.massKg;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    };
    Rocket.prototype.addCargo = function (cargo) {
        var added = false;
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            added = true;
        }
        return added;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var added = false;
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            added = true;
        }
        return added;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
