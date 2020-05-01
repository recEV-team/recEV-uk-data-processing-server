"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint no-use-before-define: 0 */ // --> OFF
const type_graphql_1 = require("type-graphql");
const Charity_1 = require("./Charity");
let AUCharity = class AUCharity extends Charity_1.Charity {
};
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.Float),
    __metadata("design:type", Number)
], AUCharity.prototype, "abn", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], AUCharity.prototype, "territoryNSW", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], AUCharity.prototype, "territoryACT", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], AUCharity.prototype, "territoryNT", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], AUCharity.prototype, "territoryQLD", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], AUCharity.prototype, "territorySA", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], AUCharity.prototype, "territoryTAS", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], AUCharity.prototype, "territoryVIC", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], AUCharity.prototype, "territoryWA", void 0);
AUCharity = __decorate([
    type_graphql_1.ObjectType()
], AUCharity);
exports.default = AUCharity;
//# sourceMappingURL=AUCharity.js.map