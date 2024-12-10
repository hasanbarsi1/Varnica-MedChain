
// export async function sendMessage(prompts) {
//     const apiUrl = 'https://api.openai.com/v1/chat/completions';
//     const apiUrl2 = 'https://gemini.googleapis.com/v1/endpoint';
    
//     try {
//         console.log("berjaya1");
//         const response = await fetch(apiUrl2, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${key2}`
//             },
//             body: JSON.stringify({
//                 prompt : prompts
//             })
//         });

//         if (!response.ok) {
//             // Log error if the response is not successful
//             console.error("API response error:", response.status, response.statusText);
//             return `Error: API response error. Status: ${response.status}`;
//         }
//         console.log("berjaya2");
//         const data = await response.json();
//         return data.choices[0].message.content;
        
//     } catch (error) {
//         console.error("Fetch error:", error);
//         return "Error: Unable to connect to the API.";
//     }
// }

// export async function sendMessage2(prompts) {

//     try {
//         console.log("berjaya1");
//         const response = await fetch('http://localhost:5000/generate-text', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ prompt }),
//       });

//         if (!response.ok) {
//             // Log error if the response is not successful
//             console.error("API response error:", response.status, response.statusText);
//             return `Error: API response error. Status: ${response.status}`;
//         }
//         console.log("berjaya2");
//         const data = await response.json();
//         return data;
        
//     } catch (error) {
//         console.error("Fetch error:", error);
//         return "Error: Unable to connect to the API.";
//     }
// }


