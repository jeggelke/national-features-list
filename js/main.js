var tableId = '1FN7VQx8Shni-c3nuvxIrFjylepCU-ajF2ZFF_gRb';
function listFeatures() {
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
            var addFeatures = document.getElementById('features-list');
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
			  featureElement.className = 'text-center feature-box';
			  
			  var moduleTitle = document.createElement('h4');
			  moduleTitle.innerHTML = featureTitle;
			  
			  var moduleAuthors = document.createElement('p');
			  moduleAuthors.innerHTML = '<strong>Lead Author(s)</strong>: ' + leadWriters;
			  
			  var featureElementContainer = document.createElement('div');
			  featureElementContainer.className = 'feature-box-container col-lg-3 col-md-4 col-sm-6'
			  
			  var featureDateStatus = document.createElement('div');
			  featureDateStatus.className = 'row';
			  featureDateStatus.id = 'dateStatus';			  
			  
			  var moduleDate = document.createElement('div');
			  moduleDate.className = 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
			  if (completionDate.length <= 1){
				  completionDate = "TBD"
			  }
			  moduleDate.innerHTML = "<strong>Date: </strong>" + completionDate;
			  
			  var moduleStatus = document.createElement('div');
			  moduleStatus.className = 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
			  if (featureStatus.length > 30) {
				  featureStatus = '<a href="' + featureStatus + '" target="_blank">Posted</a>'
			  }			  
			  moduleStatus.innerHTML = '<strong>Status:</strong> ' + featureStatus;

			  featureDateStatus.appendChild(moduleDate);
			  featureDateStatus.appendChild(moduleStatus);
			  
			  featureElement.appendChild(moduleTitle);
			  featureElement.appendChild(moduleAuthors);
			  featureElement.appendChild(featureDateStatus);
			  featureElementContainer.appendChild(featureElement);
			  addFeatures.appendChild(featureElementContainer);
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