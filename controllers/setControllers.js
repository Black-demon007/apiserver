const Set = require('../models/setModel.js');


const createSet = async (req, res) => {
    try {
        const { subjectId, subjectName, setName, setPrice } = req.body;
        const newSet = new Set({ subjectId, subjectName, setName, setPrice });
        await newSet.save();
        res.status(201).json(newSet);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getSets = async (req, res) => {
    try {
        const sets = await Set.find();
        res.status(200).json(sets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSetById = async (req, res) => {
    try {
        const { id } = req.query;
        const set = await Set.findById(id);
        if (!set) {
          return res.status(404).json({ message: 'Set Not Found' });
        }
        res.status(200).json(set);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSet = async (req, res) => {
    try {
        const { id } = req.query;
        const { subjectId, SubjectName, setName, setPrice } = req.body;
        const updatedSet = await Set.findByIdAndUpdate(id, { subjectId, SubjectName, setName, setPrice }, { new: true });
        if (!updatedSet) {
          return res.status(404).json({ message: 'Set Not Found' });
        }
        res.status(200).json(updatedSet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteSet = async (req, res) => {
    try {
        const { id } = req.query;
        const deletedSet = await Set.findOneAndDelete({ _id: id });
        if (!deletedSet) {
            return res.status(404).json({ message: 'Set Not Found' });
        }
        res.status(200).json({ message: 'Set Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports={
    createSet,
    getSets,
    getSetById,
    updateSet,
    deleteSet
};
