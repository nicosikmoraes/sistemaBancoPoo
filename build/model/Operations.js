"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusEnum_1 = require("./StatusEnum");
class Operations {
    constructor(control) {
        this.status = StatusEnum_1.StatusTransference.Failed;
        this.control = control;
    }
    deposit(amount) {
        this.control.db.setAcessBalance(this.control.db.getAcessBalance() + amount);
        console.log("Balance:" + this.control.db.getAcessBalance());
    }
    withdraw(amount) {
        this.control.db.setAcessBalance(this.control.db.getAcessBalance() - amount);
        console.log("Balance:" + this.control.db.getAcessBalance());
    }
    transference(amount) {
        let account1 = this.control.db.getAcessBalance();
        this.control.db.setAcessBalance(account1 - amount);
        this.control.db.setAccount2(this.control.db.getAccount2() + amount);
    }
    statusName(name) {
        if (name.length > 5) {
            this.status = StatusEnum_1.StatusTransference.Completed;
        }
        else {
            this.status = StatusEnum_1.StatusTransference.Failed;
        }
        console.log(this.status);
    }
    statusCpf(cpf) {
        if (cpf === 11) {
            this.status = StatusEnum_1.StatusTransference.Completed;
        }
        else {
            this.status = StatusEnum_1.StatusTransference.Failed;
        }
        console.log(this.status);
    }
}
exports.default = Operations;
