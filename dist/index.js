"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userProfile = zod_1.z.object({
    name: zod_1.z.string().min(1),
    email: zod_1.z.string().email(),
    age: zod_1.z.number().min(18).optional(),
});
app.put("/user", (req, res) => {
    const parsed = userProfile.safeParse(req.body);
    if (!parsed.success) {
        res.status(404).json({
            message: "Error while submitting form",
        });
        return;
    }
    const updateBody = req.body;
    res.status(200).json({
        data: updateBody,
        message: "Data sent successfully to the server",
    });
});
//# sourceMappingURL=index.js.map