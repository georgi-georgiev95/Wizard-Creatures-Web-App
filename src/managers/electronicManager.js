const Electronic = require('../models/Electronic');

exports.create = (itemInfo) => Electronic.create(itemInfo);

exports.getAll = async () => await Electronic.find().lean();

exports.getOne = async (id) => await Electronic.findById(id).lean();

exports.addBuyer = async (id, userId) => await Electronic.findOneAndUpdate({ _id: id }, { $push: { buyingList: { userId: userId } } });

exports.editItem = async (id, itemInfo) => await Electronic.findByIdAndUpdate({ _id: id }, itemInfo);

exports.deleteItem = async (id) => await Electronic.findByIdAndDelete(id);