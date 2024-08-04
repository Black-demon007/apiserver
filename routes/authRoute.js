const express = require('express');
const verifyToken = require('../utils/auth.js');
const authController = require('../controllers/authControllers');


const {
  createGroup,
  getGroup,
  getGroupById,
  updateGroup,
  deleteGroup
} = require('../controllers/groupController.js');


const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} = require('../controllers/courseControllers.js');


const {
  createQuestion,
  getQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion
} = require('../controllers/questionControllers.js');


const {
  createSet,
  getSets,
  getSetById,
  updateSet,
  deleteSet
} = require('../controllers/setControllers.js');


const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} = require('../controllers/studentControllers.js');


const {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject
} = require('../controllers/subjectControllers.js');


const router = express.Router();


router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/createGroup', verifyToken, createGroup);
router.post('/getGroups', verifyToken, getGroup);
router.post('/getGroupById', verifyToken, getGroupById);
router.post('/updateGroup', verifyToken, updateGroup);
router.post('/deleteGroup', verifyToken, deleteGroup);

router.post('/createCourse', verifyToken, createCourse);
router.post('/getCourses', verifyToken, getCourses);
router.post('/getCourseById', verifyToken, getCourseById);
router.post('/updateCourse', verifyToken, updateCourse);
router.post('/deleteCourse', verifyToken, deleteCourse);

router.post('/createQuestion', verifyToken, createQuestion);
router.post('/getQuestions', verifyToken, verifyToken, getQuestions);
router.post('/getQuestionById', verifyToken, getQuestionById);
router.post('/updateQuestion', verifyToken, updateQuestion);
router.post('/deleteQuestion', verifyToken, deleteQuestion);

router.post('/createSet', verifyToken, createSet);
router.post('/getSets', verifyToken, getSets);
router.post('/getSetById', verifyToken, getSetById);
router.post('/updateSet', verifyToken, updateSet);
router.post('/deleteSet', verifyToken, deleteSet);

router.post('/createStudent', verifyToken, createStudent);
router.post('/getStudents', verifyToken, getStudents);
router.post('/getStudentById', verifyToken, getStudentById);
router.post('/updateStudent', verifyToken, updateStudent);
router.post('/deleteStudent', verifyToken, deleteStudent);

router.post('/createSubject', verifyToken, createSubject);
router.post('/getSubjects', verifyToken, getSubjects);
router.post('/getSubjectById', verifyToken, getSubjectById);
router.post('/updateSubject', verifyToken, updateSubject);
router.post('/deleteSubject', verifyToken, deleteSubject);

module.exports = router;