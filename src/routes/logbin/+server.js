import { onMount } from "svelte";

// @ts-nocheck
/** @type {import('./$types').RequestHandler} */
export async function GET(log) {
    let clientIP = "0.0.0.0";
    
    let logJson = {
        time: new Date().toLocaleString(),
        client_ip: clientIP,
        log_content: log
      };

    //console.log("log:"+ logJson);
    fetch('http://localhost:3000/save_log', {
      // @ts-ignore
      origin: 'http://localhost:5173',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(logJson)
    })
    .then(response => {
        console.log("response:"+response);
      if (response.ok) {
        console.log('JSON data sent successfully.');
      } else {
        console.log("response:"+response);
        console.error('Error:', response.status);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
    return new Response();
};
