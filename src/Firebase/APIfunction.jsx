import React from "react";

const APInews = {
    googleNews : async () => {
        const apiKey = '4c89184e43f9ee4ea3408c22d526daaf'; // Replace with your GNews API key
        const endpoint = `https://gnews.io/api/v4/search?q=technology&lang=en&country=us&token=${apiKey}`;
      console.log("hello");
        try {
          const response = await fetch(endpoint);
      
          if (!response.ok) {
            console.error(`Error: ${response.status}`);
            return {title : "Error", description : "Error"};
          }
      
          const data = await response.json();
          console.log(data); // Logs the fetched news articles
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },

    newsApi : async () => {
        const apiKey = 'daa65b74aed94c5d858da4249f3f610c'; // Replace with your GNews API key
        const endpoint = `https://newsapi.org/v2/everything?q=startup+AND+AI+AND+tech+AND+business&language=en&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;
      console.log("hello");
        try {
          const response = await fetch(endpoint);
      
          if (!response.ok) {
            console.error(`Error: ${response.status}`);
            alert("Error : " +response.status);
            return ;
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
}


// const APInews = {
//     googleNews : async () => {
//         const options = {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Key': '8a09fd7ca3msh76aa7eb63d30aafp1cfc12jsn6a4dff6aa10b', // Replace with your RapidAPI key
//             'X-RapidAPI-Host': 'google-news13.p.rapidapi.com',
//           },
//         };
  
//         try {
//             console.log("hello");
//           const response = await fetch(
//             'https://google-news13.p.rapidapi.com/business?lr=en-US',
//             options
//           );
//           if (!response.ok) {
//             // throw new Error(`HTTP error! status: ${response.status}`);
//             console.log(response.status);
//           }
//           const data = await response.json();
//           console.log(data);
//           return data;
//         } catch (err) {
//           console.log(err);
//         }
//       }
// }

export default APInews