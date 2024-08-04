const Subject = require('../models/subjectModel.js');


const createSubject = async (req, res) => {
    try {
        const { subjectName } = req.body;
        const newSubject = new Subject({ subjectName: subjectName });
        await newSubject.save();
        res.status(201).json(newSubject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSubjectById = async (req, res) => {
    try {
        const { id } = req.query;
        const subject = await Subject.findById(id);
        if (!subject) {
          return res.status(404).json({ message: 'Subject Not Found' });
        }
        res.status(200).json(subject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSubject = async (req, res) => {
    try {
        const { id } = req.query;
        const { subjectName } = req.body;
    
        if (!subjectName) {
          return res.status(400).json({ message: 'Subject Name Is Required' });
        }

        const updatedSubject = await Subject.findByIdAndUpdate(id, { subjectName }, { new: true });

        if (!updatedSubject) {
          return res.status(404).json({ message: 'Subject Not Found' });
        }

        res.status(200).json(updatedSubject);
      } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteSubject = async (req, res) => {
    try {
        const { id } = req.query;
        const deletedSubject = await Subject.findOneAndDelete({ _id: id });
        if (!deletedSubject) {
            return res.status(404).json({ message: 'Subject Not Found' });
        }
        res.status(200).json({ message: 'Subject Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports={
    createSubject,
    getSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject
};