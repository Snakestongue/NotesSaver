import { User } from "../Models/user.model.js";
export const saveNote = async (req, res) => {
    try {
        const{
             email, content 
            } = req.body;
        if (!content || !email) {
            return res.status(400).json({ message: "Email and content are required" });
        }
        const user = await User.findOne({ email: email }); 
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.notes.push({ content });
        await user.save();

        res.status(201).json({
            message: "Note saved successfully",
            note: user.notes[user.notes.length - 1] 
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
export const getNotes = async (req, res) => {
    try {
        const { email } = req.query; 
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ notes: user.notes });
   } catch (error) {
        res.status(500).json({ 
            message: "Internal server error", 

        });
    }
};


