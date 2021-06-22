import BiznessModel from "../models/biznessModel.js";
import mongoose from 'mongoose';

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
    const newBizness = new BiznessModel(bizness)
    try {
        await newBizness.save();
        res.status(201).json(newBizness);
        console.log('Business Created!');
    } catch (error) {
        res.status(409).json({message: error.message})
        console.log('Error creating business!'); 
    }
}

export const updateBizness = async (req, res) => {
    const { id: _id } = req.params;
    const bizness = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No business with that id found');

    const updatedBizness = await BiznessModel.findByIdAndUpdate(_id, bizness, {new: true});

    res.json(updatedBizness);
}

export const deleteBizness = async (req, res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No business with that id found');

    await BiznessModel.findByIdAndRemove(_id); 

    res.json({message: 'Post Deleted Succesfully'})
}