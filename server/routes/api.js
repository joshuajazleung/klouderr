const express = require('express');
const router = express.Router();
const fileService = require('../services/file.service');
const options = fileService.getFileOptions();
const multer = require('multer')(options);

router.get('/files/:id', fileService.getFile);
router.delete('/files/:id/delete/:code', fileService.deleteFile);
router.post('/download/:id', fileService.downloadFile);
router.post('/upload', multer.any(), fileService.uploadFile); 

module.exports = router;
