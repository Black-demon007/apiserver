const Question = require('../models/questionModel.js');


const createQuestion = async (req, res) => {
    try {
        const { QuestionText, SetId, SetName, SubjectId, SubjectName } = req.body;

        const newQuestion = new Question({ QuestionText, SetId, SetName ,SubjectId, SubjectName });
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getQuestionById = async (req, res) => {
    try {
        const { id } = req.query;
        const question = await Question.findById(id);
        if (!question) {
          return res.status(404).json({ message: 'Question Not Found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateQuestion = async (req, res) => {
    try {
        const { id } = req.query;
        const { QuestionText, SetId, SetName, SubjectId, SubjectName } = req.body;
        const updatedQuestion = await Question.findByIdAndUpdate(id, { QuestionText, SetId, SetName, SubjectId, SubjectName }, { new: true });
        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Question Not Found' });
        }
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.query;
        const deletedQuestion = await Question.findOneAndDelete({ _id: id });
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question Not Found' });
        }
        res.status(200).json({ message: 'Question Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports={
    createQuestion,
    getQuestions,
    getQuestionById,
    updateQuestion,
    deleteQuestion
};
