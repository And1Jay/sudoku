import express from 'express';
import { addElementIntoBoard } from '../controllers/addElementIntoBoard.js';
import { deleteElementFromBoard } from '../controllers/deleteElementFromBoard.js';
import { checkIfSolved } from '../controllers/checkIfSolved.js';
import { correctSoFar } from '../controllers/correctSoFar.js';
import undo from '../controllers/undo.js';
import undoUntilCorrect from '../controllers/undoUntilCorrect.js';
import getRandomHint from '../controllers/getRandomHint.js';
import getSpecificHint from '../controllers/getHintSpecificHint.js';

const router = express.Router();

router.post('/addelement', addElementIntoBoard);
router.post("/deleteelement", deleteElementFromBoard);
router.get("/checksolved", checkIfSolved);
router.get("/correctSoFar", correctSoFar);
router.get("/getRandomHint", getRandomHint);
router.get("/getSpecificHint", getSpecificHint);
router.get('/undo', undo);
router.get('/undountilcorrect', undoUntilCorrect);
export default router;
