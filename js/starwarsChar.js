$(document).ready(function()
      {
        $("#generateButton").click(function()
          { 
            const randomNum = Math.ceil(Math.random()*88);
            $.get(`https://akabab.github.io/starwars-api/api/id/${randomNum}.json`, function (data)
            {
              var starwarChar = 
              {
                'name' : data.name,
                'homeworld' : data.homeworld,
                'bornlocation' : data.bornLocation,
                'diedLocation' : data.diedLocation,
                'wiki' : data.wiki,
                'species' : data.species,
                'masters' : data.masters,
                'image' : data.image
              }

              if(typeof starwarChar.homeworld == 'undefined')
              {
                starwarChar.homeworld = 'Not Available'
              }
              if(typeof starwarChar.bornLocation == 'undefined')
              {
                starwarChar.bornLocation = 'Not Available'
              }
              if(typeof starwarChar.diedLocation == 'undefined')
              {
                starwarChar.diedLocation = 'Not Available'
              }
              if(typeof starwarChar.wiki == 'undefined')
              {
                starwarChar.wiki = 'Not Available'
              }
              if(typeof starwarChar.species == 'undefined')
              {
                starwarChar.species = 'Not Available'
              }
              if(typeof starwarChar.masters == 'undefined')
              {
                starwarChar.masters = 'Not Available'
              }
              if(typeof starwarChar.image == 'undefined')
              {
                starwarChar.image = 'Not Available'
              }

              console.log(starwarChar);
              
              $('#displayChar').html(
                `
                <h1 class='text-center display-5 api-header'>
                ${starwarChar.name} Profile
                </h1>
                <table class='m-auto'>
                <tbody class='text-center'>
                    <tr>
                        <td class='left-column'>
                            Home World
                        </td>
                        <td class='right-column'>
                            ${starwarChar.homeworld}
                        </td>
                    </tr>
                    <tr>
                        <td class='left-column'>
                            Born Location
                        </td>
                        <td class='right-column'>
                            ${starwarChar.bornLocation}
                        </td>
                    </tr>
                    <tr>
                        <td class='left-column'>
                            Died at
                        </td>
                        <td class='right-column'>
                            ${starwarChar.diedLocation}
                        </td>
                    </tr>
                    <tr>
                        <td class='left-column'>
                            Wiki Information
                        </td>
                        <td class='right-column'>
                        <a href="${starwarChar.wiki}">${starwarChar.wiki}</a>
                        </td>
                    </tr>
                    <tr>
                        <td class='left-column'>
                            Species
                        </td>
                        <td class='right-column'>
                            ${starwarChar.species}
                        </td>
                    </tr>
                    <tr>
                        <td class='left-column'>
                            Masters
                        </td>
                        <td class='right-column'>
                            ${starwarChar.masters}
                        </td>
                    </tr>
                    <tr>
                        <td style='vertical-align : text-bottom' class='left-column'>
                            Profile Pic
                        </td>
                        <td class='right-column'>
                            <img src="${starwarChar.image}" alt="${starwarChar.name} Picture" class='img-resize mb-5'>
                        </td>
                    </tr>
                </tbody>
            </table>
                `
                )
            })
              
          });
      });