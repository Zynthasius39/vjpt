export const apiUrl = "http://localhost:8000"

const askLlama = async (question: string) => {
    const data = {
        messages: [
            {
                role: "user",
                content: question
            }
        ],
        model: "llama3-8b-8192"
    };

    try {
        const res = await fetch(apiUrl + "/ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const responseData = await res.json();
        return responseData.choices[0].message.content; 
    } catch (error: any) {
        console.error("Error:", error);
        return "Bir hata oluştu: " + error.message;
    }

};

export async function askMe() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

export default askLlama