const Course = require ( '../models/courseModel.js');


const createCourse = async (req, res) => {
    try { 
       const { SubjectId, SubjectName, CourseName } = req.body;
       const newCourse = new Course({ SubjectId, SubjectName, CourseName });
       await newCourse.save();
       res.status(201).json(newCourse);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

 const getCourseById = async (req, res) => {
    try {
        const { id } = req.query;
        const course = await Course.findById(id);
        if (!course) {
          return res.status(404).json({ message: 'Course Not Found'});
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCourse = async (req, res) => {
    try {
        const { id } = req.query;
        const { SubjectId, SubjectName, CourseName } = req.body;
        const updatedCourse = await Course.findByIdAndUpdate(id, { SubjectId, SubjectName, CourseName }, { new: true });
        if (!updatedCourse) {
          return res.status(404).json({ message: 'Course Not Found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const { id } = req.query;
        const deletedCourse = await Course.findOneAndDelete({ _id: id });
        if (!deletedCourse) {
           return res.status(404).json({ message: 'Course Not Found' });
        }
        res.status(200).json({ message: 'Course Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse
};