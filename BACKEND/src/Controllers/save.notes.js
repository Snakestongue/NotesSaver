import { User } from "../Models/user.model.js";
export const saveNote = async (req, res) => {
    try{
        const username = req.body.username;
        const content = req.body.content;
        const title = req.body.title;
        console.log("Username:", username);
        console.log("Title:", `"${title}"`, "Length:", title?.length);
        console.log("Content:", `"${content}"`);
        if (!content || !username || !title) {
            return res.status(400).json({ message: "Username and content are required" });
        }
        const user = await User.findOne({ username: username.toLowerCase() });      
        if (!user) {
            return res.status(404).json({ 
                message: "User not found. Check your spelling or login again." 
            });
        }
        user.notes.push({ content, title });
        await user.save();
        res.status(201).json({
            message: "Note saved successfully",
            note: user.notes[user.notes.length - 1] 
        });
    } catch (error) {
        console.error(" SAVE ERROR:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
export const getNotes = async (req, res) => {
    try {
        const { username } = req.query; 
        const user = await User.findOne({ username: username.toLowerCase() });
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