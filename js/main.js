var tableId = '1FN7VQx8Shni-c3nuvxIrFjylepCU-ajF2ZFF_gRb';
function executive() {
        var query = 'SELECT * FROM ' + tableId;
        var encodedQuery = encodeURIComponent(query);

        // Construct the URL
        var url = ['https://www.googleapis.com/fusiontables/v1/query'];
        url.push('?sql=' + encodedQuery);
        url.push('&key=AIzaSyD9Otr9A4pq624Ja9hRFMpUpBnyQAr06M0');
        url.push('&callback=?');

        // Send the JSONP request using jQuery
        $.ajax({
          url: url.join(''),
          dataType: 'jsonp',
          success: function (data) {
            var rows = data['rows'];
            var mainBio = document.getElementById('executive');
            for (var i in rows) {
		//Set row variables 
              var completionDate = rows[i][0];
              var featureTitle = rows[i][1];
              var leadWriters = rows[i][2];
			  var otherStaff = rows[i][3];
              var featureLength = rows[i][4];
              var newsletter = rows[i][5];
              var featureStatus = rows[i][6];
              var fluxxMaterialsCard = rows[i][7];
              var relatedProject = rows[i][8];
              var partners = rows[i][9];
              var promotionContact = rows[i][10];
              var otherNotes = rows[i][11];
			  
			  var featureElement = document.createElement('div');
			  
/*			  
			  var jumpElement = document.createElement('div')
			  jumpElement.className= 'main-div';
			  jumpElement.id = FirstName + LastName;
			  
			  
              var nameElement = document.createElement('a');
              nameElement.innerHTML = FirstName + ' ' + LastName;
              nameElement.className = 'name';
			  nameElement.href = "mailto:" + Email;
			  

              var titleElement = document.createElement('p');
              titleElement.innerHTML = Title + '<br>' + Division;
              titleElement.className = 'title';
              var divisionElement = document.createElement('p');
              divisionElement.innerHTML =  Division;
              divisionElement.className = 'division';
              var bioElement = document.createElement('p');
              bioElement.innerHTML =  Bio;
              bioElement.className = 'bio';
              var imageElement = document.createElement('a');
              imageElement.innerHTML = Image;
              imageElement.className = 'image';
              
              jumpElement.appendChild(imageElement);
              jumpElement.appendChild(nameElement);
              jumpElement.appendChild(titleElement);
			  jumpElement.appendChild(bioElement);
			  
              mainBio.appendChild(jumpElement);	
*/              		 			  
            }			
          }
        });
      }