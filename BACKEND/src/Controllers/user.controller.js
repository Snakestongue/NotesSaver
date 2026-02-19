import {User} from "../Models/user.model.js";
const register =  async(req, res) => {
    try {
        const {username, email, password} = req.body
        //validation
        if (!username || !email ||  !password){
            return res.status(400).json({message: "All field must be filled out"});
        }
        //exist
        const existing = await User.findOne({email: email.toLowerCase()})
        
        if (existing){
            const isPasswordMatch = existing.password == password;
          const isUsernameMatch = existing.username.toLowerCase() == username.toLowerCase();
            //return res.status(400).json({message: "User already registered"})
            if (isPasswordMatch && isUsernameMatch){
            return  res.status(200).json({
             message: "Logging back in!",
            user: {id: existing._id, email: existing.email, user: existing.username}
            })
            }else{
                return  res.status(400).json({
             message: "Incorrect Password or Username!"
            }) 
            }
          
        
        }
        //create
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            loggedIn: false
        });
        res.status(201).json({
            message: "User registered successfully",
            user: {id: user._id, email: user.email, user: user.username}
        })
    } catch (error) {
        console.log("Register error", error)
        res.status(500).json({message:"Internal server error"})//, error: error.message})
    }
}

export{
    register
}

