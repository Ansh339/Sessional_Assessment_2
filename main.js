// DISPLAY DUMMY LINK DATA
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
                <p>ID: ${response[i].id}</p>
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

// DISPLAY FORM DATA
var form = document.getElementById('form')

      form.addEventListener('submit', (e) =>
      {
        e.preventDefault()

        var name = document.getElementById('name').value
        var userName = document.getElementById('user-name').value
        var email = document.getElementById('email').value
        var street = document.getElementById('street').value
        var suite = document.getElementById('suite').value
        var city = document.getElementById('city').value
        var zipcode = document.getElementById('zipcode').value
        var lat = document.getElementById('lat').value
        var lng = document.getElementById('lng').value
        var contact = document.getElementById('contact').value
        var website = document.getElementById('website').value
        var companyName = document.getElementById('company-name').value
        var catchPhrase = document.getElementById('catch-phrase').value
        var bs = document.getElementById('bs').value
        console.log(name)

        let store = ''

        store += `
        <div class = "post-detail-info">
          <p>NAME: ${name}</p>
          <p>USERNAME: ${userName}</p>
          <p>EMAIL: ${email}</p>
          <div>
            <p>ADDRESS</p>
            <ul>
              <li>
                <p>STREET: ${street}</p>
              </li>
              <li>
                <p>SUITE: ${suite}</p>
              </li>
              <li>
                <p>CITY: ${city}</p>
              </li>
              <li>
                <p>ZIPCODE: ${zipcode}</p>
              </li>
              <li>
                <p>LATITUDE: ${lat}</p>
              </li>
              <li>
                <p>LONGITUDE: ${lng}</p>
              </li>
            </ul>
          </div>
          <p>CONTACT: ${contact}</p>
          <p>WEBSITE: ${website}</p>
          <div>
            <p>COMPANY</p>
            <ul>
              <li>
                <p>NAME: ${companyName}</p>
              </li>
              <li>
                <p>CATCHPHRASE: ${catchPhrase}</p>
              </li>
              <li>
                <p>BS: ${bs}</p>
              </li>
            </ul>
          </div>
        </div>
        `
        document.querySelector('#data-display').innerHTML = store
      })

      document.querySelector('#search-data').addEventListener('click', (e) => 
      {
          e.preventDefault()
      
          const xhr1 = new XMLHttpRequest()
          let searchData = document.getElementById('collect-data').value
          const source1 = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'
      
          xhr1.open('GET',source1)
          console.log('Mouse clicked')
          console.log(searchData);
      
          xhr1.onreadystatechange = () =>
          {
              if(xhr1.readyState === 4 && xhr1.status === 200)
              {
                  console.log("Connection Successful");
                  const response = JSON.parse(xhr1.responseText)
      
                  console.log("Working");
                  let put = ''
                  console.log('Working2');
                  put = `
                      <div class = "search-detail-info">
                              <p>ID - ${response[searchData - 1].id}
                              <p>NAME - ${response[searchData - 1].name}</p>
                              <p>USERNAME - ${response[searchData - 1].username}</p>
                              <p>EMAIL - ${response[searchData - 1].email}</p>
                              <div>
                                  <p>ADDRESS</p>
                                  <ul>
                                      <li>
                                          <p>STREET - ${response[searchData - 1].address.street}</p>
                                      </li>
                                      <li>
                                          <p>SUITE - ${response[searchData - 1].address.suite}</p>
                                      </li>
                                      <li>
                                          <p>CITY - ${response[searchData - 1].address.city}</p>
                                      </li>
                                      <li>
                                          <p>ZIPCODE - ${response[searchData - 1].address.zipcode}</p>
                                      </li>
                                      <li>
                                          <p>LATITUDE - ${response[searchData - 1].address.geo.lat}</p>
                                      </li>
                                      <li>
                                          <p>LONGITUDE - ${response[searchData - 1].address.geo.lng}</p>
                                      </li>
                                  </ul>
                              </div>
                              <p>CONTACT - ${response[searchData - 1].phone}</p>
                              <p>WEBSITE - ${response[searchData - 1].website}</p>
                              <div>
                                  <p>COMPANY</p>
                                  <ul>
                                      <li>
                                          <p>NAME - ${response[searchData - 1].company.name}</p>
                                      </li>
                                      <li>
                                          <p>CATCHPHRASE - ${response[searchData - 1].company.catchPhrase}</p>
                                      </li>
                                      <li>
                                          <p>BS - ${response[searchData - 1].company.bs}</p>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                  `
                  document.querySelector('#search-container').innerHTML = put
              }
          }
          xhr1.send()
      })