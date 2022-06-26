const api_url ="https://anapioficeandfire.com/api/books";
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    let r="";
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        let tC="";
     for(let i=0;i<data.length;i++){
    tc+=`<tr>
    <th scope="row">${data[index].id}</th>
        <td>${data[index].id}</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>`
     }
}}
// Calling that async function
getapi(api_url);
