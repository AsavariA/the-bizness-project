import BiznessModel from "../models/biznessModel.js";

export const getAllBiznesses = async (req, res) => {
    try {
        const allBiznesses = await BiznessModel.find();
        res.status(200).json(allBiznesses)
    } catch (error) {
       res.status(404).json({message: error.message}) 
    }
}

export const createBizness = async (req, res) => {
    const bizness = req.body
    const newBizness = new BizznessModel(bizness)
    try {
        await newBizness.save();
        res.status(201).json(newBizness);
    } catch (error) {
        res.status(409).json({message: error.message}) 
    }
}