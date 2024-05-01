const YourModel = require("../models/Config");

async function getDataFieldByConfigId(configId) {
  try {
    const document = await YourModel.findOne({ configId }, "data").exec();
   if (!document) {
      return null;
    }
    return document.data;
  } catch (error) {
    console.error("Error fetching data field by config ID:", error);
    throw error;
  }
}

async function updateRemarkByConfigId(configId, remark) {
  try {
    const updatedConfig = await YourModel.findOneAndUpdate({ configId }, { $set: { remark } }, { new: true }).exec();
    if (!updatedConfig) {
      throw new Error("Failed to update remark: Config ID not found");
    }
   return { message: "Success" };
  } catch (error) {
    console.error("Error updating remark by config ID:", error.message);
    return { message: "Failed" };
  }
}

module.exports = { getDataFieldByConfigId, updateRemarkByConfigId };
