const express = require("express");
const router = express.Router();

const { getDataFieldByConfigId, updateRemarkByConfigId } = require("../controllers/configuration");

router.get("/configurations/:configId", async (req, res) => {
  const { configId } = req.params;
 try {
    const data = await getDataFieldByConfigId(configId);

    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "Data not found for the specified configId" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/configurations/:configId", async (req, res) => {
  const { configId } = req.params;
  const { remark } = req.body;

  try {
    const updatedConfig = await updateRemarkByConfigId(configId, remark);

    if (updatedConfig) {
      res.json(updatedConfig);
    } else {
      res.status(404).json({ message: "Config ID not found" });
    }
  } catch (error) {
    console.error("Error updating remark:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
