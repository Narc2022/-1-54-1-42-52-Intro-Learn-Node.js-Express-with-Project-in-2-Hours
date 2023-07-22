const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contact);
});

// @desc create all contact
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
  console.log("Request Body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  } else {
    const contact = await Contact.create({
      name,
      email,
      phone,
    });
    res.status(201).json(contact);
  }
});

// @desc Get single contact
// @route GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
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
