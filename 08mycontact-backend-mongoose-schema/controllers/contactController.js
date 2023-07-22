const asyncHandler = require("express-async-handler");
// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

// @desc create all contact
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
  console.log("Request Body is :", req.body);
  const {name,email,mobile} = req.body;
  if(!name || !email || !mobile){
     res.status(400);
     throw new Error("All fields are mandatory");
  }else{
    res.status(201).json({ message: "Create Contact" });
  }
});

// @desc Get single contact
// @route GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
});
// @desc update contacts
// @route PUT /api/contacts
// @access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});

// @desc create all contacts
// @route DELETE /api/contacts:id
// @access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
