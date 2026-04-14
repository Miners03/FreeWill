import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });//latest note will be on top
    res.status(200).json({ notes });
  } catch (error) {
    console.error("error in getALLNotes", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const yourNote = await Note.findById(req.params.id);
    if (!yourNote) return res.status(404).json({ message: "note not found" });
    res.status(200).json(yourNote);
  } catch (error) {
    console.error("error in getALLNotes", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json({ savedNote });
    console.log("BODY:", req.body);
  } catch (error) {
    console.error("error in createNote", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );
    if (!updatedNote)
      return res.status(404).json({ message: "note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updatedNote", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "note not found" });

    res.status(200).json({ messages: "you have deleted a post" });
  } catch (error) {
    console.error("error in deleteNote", error);
    res.status(500).json({ message: "internal server error" });
  }
};
