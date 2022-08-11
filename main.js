const xhr = new XMLHttpRequest();
const source = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

xhr.open('GET', source, false)
console.log("Working")

xhr.onreadystatechange = () =>
{
    if(xhr.readyState === 4 && xhr.status === 200)
    {
        console.log("Connected Successfully");

        const response = JSON.parse(xhr.responseText)

        let output = ''

        for(let i = 0; i < response.length; i++)
        {
            output +=  `
            <div>
                <p>NAME = ${response[i].name}</p>
                <p>USERNAME = ${response[i].username}</p>
                <p>EMAIL = ${response[i].email}</p>
                <p>CONTACT = ${response[i].phone}</p>
                <p>WEBSITE = ${response[i].website}</p>
            </div>
            `
        }

        document.querySelector('#detail-container').innerHTML = output
    }
}

xhr.send()