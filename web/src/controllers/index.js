const Lead = require('../models/lead');


exports.getIndex = (req, res, next) => {
  res.render('index', { 
    title: 'Landing Page',
    path: '/', 
  });
};

exports.postLead = (req, res, next) => {
  const { leadEmail } = req.body;
  return Lead.create({
    email: leadEmail,
  })
    .then(lead => {
      console.log('The following lead has been created: ', req.body.leadEmail);
      res.redirect('/leads');
    });
};

exports.getLeads = (req, res, next) => {
  return Lead.find()
    .then(leads => {
      
      res.render('./lead/lead-list', { 
        title: 'Leads',
        leads, 
        path: '/leads'
      });  
  });
};

exports.getLead = (req, res, next) => { 
  const { leadId } = req.params;
  return Lead.findById(leadId)
    .then(lead => {
      res.render('./lead/lead-detail', { lead, path: 'none' });  
  });
};

exports.getEditLead = (req, res, next) => { 
  const { leadId } = req.params;
  return Lead.findById(leadId)
    .then(lead => {
      res.render('./lead/edit-lead', { lead, path: 'none' });  
  });
};

exports.postEditLead = (req, res, next) => { 
  const { leadId } = req.params;
  const updatedEmail  = req.body.leadEmail;
  return Lead.findById(leadId)
    .then(lead => {
      lead.email = updatedEmail;
      lead.save()
    })
    .then(result => {
      console.log(leadId);
      // redirect to lead-detail route using variable from earlier callback
      res.redirect(`/lead/${leadId}`);
    }); 
};

exports.deleteLead = (req, res, next) => { 
  const { leadId } = req.params;
  return Lead.deleteOne({ _id: leadId, })
    .then(result => {
     res.redirect('/leads');
    })
};

// This powers the client-side AJAX button on leads page
exports.deleteLeadJson = (req, res, next) => { 
  const { leadId } = req.params;
  return Lead.deleteOne({ _id: leadId, })
    .then(result => {
     res.send({ msg: "Success" });
    })
};