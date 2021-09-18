'use strict'
    var generateButton = document.getElementById('generateButton')

    generateButton.addEventListener('click',function(event)
    {
        event.preventDefault();

        var displayChar = document.getElementById('displayChar');
        displayChar.className='container main-form2 m-auto';

        
        const randomNum = Math.ceil(Math.random()*88);
        // "https://akabab.github.io/starwars-api/api/id/5.json"
        $.get(`https://akabab.github.io/starwars-api/api/id/${randomNum}.json`, function (data)
        {
            displayChar.innerHTML=
            `
            <h1 class='text-center display-5 api-header'>
            ${data.name} Profile
            </h1>
            <table class='m-auto'>
                <tbody class='text-center'>
                    <tr>
                        <td class='left-column'>
                            Home World
                        </td>
                        <td class='right-column'>
                            ${data.homeworld}
                        </td>
                    </tr>
                    <tr>
                        <td class='left-column'>
                            Born Location
                        </td>
                        <td class='right-column'>
                            ${data.bornLocation}
                        </td>
                    </tr>
                    <tr>
                        <td class='left-column'>
                            Died at
                        </td>
                        <td class='right-column'>
                            ${data.diedLocation}
                        </td>
                    </tr>
                    <tr>
                        <td class='left-column'>
                            Wiki Information
                        </td>
                        <td class='right-column'>
                        <a href="${data.wiki}">${data.wiki}</a>
                        </td>
                    </tr>
                    <tr>
                        <td class='left-column'>
                            Species
                        </td>
                        <td class='right-column'>
                            ${data.species}
                        </td>
                    </tr>
                    <tr>
                        <td class='left-column'>
                            Masters
                        </td>
                        <td class='right-column'>
                            ${data.masters}
                        </td>
                    </tr>
                    <tr>
                        <td style='vertical-align : text-bottom' class='left-column'>
                            Profile Pic
                        </td>
                        <td class='right-column'>
                            <img src="${data.image}" alt="${data.name} Picture" class='img-resize mb-5'>
                        </td>
                    </tr>
                </tbody>
            </table>
            `
            displayChar.className='main-form2 container m-auto'  
        });
    })