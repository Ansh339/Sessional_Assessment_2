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
            <div class = "detail-info">
                <p>NAME: ${response[i].name}</p>
                <p>USERNAME: ${response[i].username}</p>
                <p>EMAIL: ${response[i].email}</p>
                <div>
                    <p>ADDRESS</p>
                    <ul>
                        <li>
                            <p>STREET: ${response[i].address.street}</p>
                        </li>
                        <li>
                            <p>SUITE: ${response[i].address.suite}</p>
                        </li>
                        <li>
                            <p>CITY: ${response[i].address.city}</p>
                        </li>
                        <li>
                            <p>ZIPCODE: ${response[i].address.zipcode}</p>
                        </li>
                        <li>
                            <p>LATITUDE: ${response[i].address.geo.lat}</p>
                        </li>
                        <li>
                            <p>LONGITUDE: ${response[i].address.geo.lng}</p>
                        </li>
                    </ul>
                </div>
                <p>CONTACT: ${response[i].phone}</p>
                <p>WEBSITE: ${response[i].website}</p>
                <div>
                    <p>COMPANY</p>
                    <ul>
                        <li>
                            <p>NAME: ${response[i].company.name}</p>
                        </li>
                        <li>
                            <p>CATCHPHRASE: ${response[i].company.catchPhrase}</p>
                        </li>
                        <li>
                            <p>BS: ${response[i].company.bs}</p>
                        </li>
                    </ul>
                </div>
            </div>
            `
        }

        document.querySelector('#detail-container').innerHTML = output
    }
}

xhr.send()