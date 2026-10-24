const express = require("express");
const cors = require("cors");

const inventoryRoutes = require("./routes/inventory");
const ordersRoutes = require("./routes/orders");

const app = express();

app.use(cors());
app.use(express.json());

// Home
app.get("/", (req, res) => {
    res.json({
        message: "Smart Warehouse Backend is running!"
    });
});

// Inventory API
app.use("/api/inventory", inventoryRoutes);

// Orders API
app.use("/api/orders", ordersRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});