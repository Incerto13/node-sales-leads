const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');


// GET '/'s
router.get('/', indexController.getIndex);

// GET '/'
router.post('/', indexController.postLead);

// GET /leads
router.get('/leads', indexController.getLeads);

router.get('/lead/:leadId', indexController.getLead);

router.get('/lead/:leadId/edit', indexController.getEditLead);

router.post('/lead/:leadId/edit', indexController.postEditLead);

router.post('/lead/:leadId/delete', indexController.deleteLead);

router.post('/lead/:leadId/delete-json', indexController.deleteLeadJson);


module.exports = router;