const express = require('express');
const router = express.Router();
const fileService = require('../services/file.service');
const options = fileService.getFileOptions();
const multer = require('multer')(options);

const { asyncMiddleware } = require('../helpers');

router.get('/files/:id', asyncMiddleware(fileService.getFile));
router.delete('/files/:id/delete/:code', asyncMiddleware(fileService.deleteFile));
router.post('/download/:id', asyncMiddleware(fileService.downloadFile));
router.post('/upload', multer.any(), asyncMiddleware(fileService.uploadFile)); 

module.exports = router;
