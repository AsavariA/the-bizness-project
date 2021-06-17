import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    photo: String,
})

const biznessSchema = mongoose.Schema({
    owner: String,
    contact: String,
    name: String,
    description: String,
    tags: String,
    logo: String,
    products: [productSchema],
})

const BiznessModel = mongoose.model('Bizness', biznessSchema);

export default BiznessModel;