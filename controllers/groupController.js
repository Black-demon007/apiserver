const Group = require ( '../models/groupModel.js');


const createGroup = async (req, res) => {
    try { 
       const { GroupName, GroupCode, NumberOfStudents } = req.body;
       const newGroup = new Group({ GroupName, GroupCode, NumberOfStudents });
       await newGroup.save();
       res.status(201).json(newGroup);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

const getGroup = async (req, res) => {
    try {
        const groups = await Group.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

 const getGroupById = async (req, res) => {
    try {
        const { id } = req.query;
        const group = await Group.findById(id);
        if (!group) {
          return res.status(404).json({ message: 'Group Not Found'});
        }
        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateGroup = async (req, res) => {
    try {
        const { id } = req.query;
        const { GroupName, GroupCode, NumberOfStudents } = req.body;
        const updatedGroup = await Group.findByIdAndUpdate(id, { GroupName, GroupCode, NumberOfStudents }, { new: true });
        if (!updatedGroup) {
          return res.status(404).json({ message: 'Group Not Found' });
        }
        res.status(200).json(updatedGroup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteGroup = async (req, res) => {
    try {
        const { id } = req.query;
        const deletedGroup = await Group.findOneAndDelete({ _id: id });
        if (!deletedGroup) {
           return res.status(404).json({ message: 'Group Not Found' });
        }
        res.status(200).json({ message: 'Group Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createGroup,
    getGroup,
    getGroupById,
    updateGroup,
    deleteGroup
};