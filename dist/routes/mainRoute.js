"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const event_1 = __importDefault(require("./event"));
const middleware_1 = __importDefault(require("./middleware"));
const admin_1 = __importDefault(require("./admin"));
const router = (0, express_1.Router)();
router.use("/admin", admin_1.default);
router.use("/user", user_1.default);
router.use("/event", middleware_1.default, event_1.default);
router.use("/findEvent", middleware_1.default);
exports.default = router;
