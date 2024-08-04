const Student = require('../models/studentModel.js');


const createStudent = async (req, res) => {
    try {
        const { FullName, Mobile, Email, CollegeName, CollegeAddress, Degree, DateOfBirth, Password } = req.body;
        const newStudent = new Student({ FullName, Mobile, Email, CollegeName, CollegeAddress, Degree, DateOfBirth, Password });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getStudentById = async (req, res) => {
    try {
        const { id } = req.query;
        const student = await Student.findById(id);
        if (!student) {
           return res.status(404).json({ message: 'Student Not Found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { id } = req.query;
        const { FullName, Mobile, Email, CollegeName, CollegeAddress, Degree, DateOfBirth, Password } = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(id, { FullName, Mobile, Email, CollegeName, CollegeAddress, Degree, DateOfBirth, Password }, { new: true });
        if (!updatedStudent) {
          return res.status(404).json({ message: 'Student Not Found' });
        }
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.query;
        const deletedStudent = await Student.findOneAndDelete({ _id: id });
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student Not Found' });
        }
        res.status(200).json({ message: 'Student Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports={
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
