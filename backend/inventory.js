const express = require("express");

const router = express.Router();

let inventory = [
    {
        id: 1,
        name: "Laptop",
        sku: "LAP001",
        category: "Electronics",
        quantity: 25,
        location: "A-01",
        price: 55000
    },
    {
        id: 2,
        name: "Wireless Mouse",
        sku: "MOU001",
        category: "Electronics",
        quantity: 8,
        location: "A-02",
        price: 800
    },
    {
        id: 3,
        name: "Keyboard",
        sku: "KEY001",
        category: "Electronics",
        quantity: 4,
        location: "A-03",
        price: 1200
    }
];

router.get("/", (req, res) => {
    res.json({
        success: true,
        count: inventory.length,
        inventory: inventory
    });
});

module.exports = router;