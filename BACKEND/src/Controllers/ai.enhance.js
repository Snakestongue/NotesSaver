import axios from "axios";
export const aiEnhance = async(req, res) => {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ message: "Missing fields" });
    const models = [
        "Qwen/Qwen2.5-7B-Instruct",
        "meta-llama/Llama-3.2-1B-Instruct",
        "mistralai/Mistral-7B-Instruct-v0.3"
    ];
    for (const modelId of models) {
        try {
            console.log("Trying model:", modelId);
            const response = await axios.post(
                "https://router.huggingface.co/v1/chat/completions",{
                    model: modelId,
                    messages: [
                        {role: "system", content: "You improve user notes professionally." },
                        {role: "user", content: `Here are my notes titled "${title}": ${content}. Please enhance these notes to make them more detailed, informative, and readable, but keep the style as personal study notes, not a product description.` }
                    ]
                },{
                    headers: {
                        Authorization: `Bearer ${process.env.token}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            return res.json({ result: response.data.choices[0].message.content });
        }catch (error){
            console.log(`Model ${modelId} failed:`, error.message);
        }
    }
    res.status(500).json({ message: "No models worked"});
};