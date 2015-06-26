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
              var featureDescription = rows[i][12];
		//Feature Box Container 	  
			  var featureElementContainer = document.createElement('div');
			  featureElementContainer.className = 'feature-box-container col-lg-3 col-md-4 col-sm-6';			  
		//Create Feature Box	  
			  var featureElement = document.createElement('div');
			  featureElement.className = 'text-center feature-box';
			  var thisElementId = 'feature-' + i;
			  featureElement.id = thisElementId;
			  var featureModalId = thisElementId + '-modal';
			  featureElement.setAttribute('data-toggle', 'modal');
			  featureElement.setAttribute('data-target', '#' + featureModalId)
		//Conditional Background color when created	  
			  if (featureStatus.length > 30) { 
				  var thisFeatureClasses = featureElement.getAttribute('class');
				  featureElement.setAttribute('class', thisFeatureClasses + ' completed-feature');
			  }
		//Title
			  var moduleTitle = document.createElement('h4');
			  moduleTitle.innerHTML = featureTitle;
		//Authors	  
			  var moduleAuthors = document.createElement('p');
			  moduleAuthors.innerHTML = '<strong>Lead Author(s)</strong>: ' + leadWriters;
		//Date/Status Row	  
			  var featureDateStatus = document.createElement('div');
			  featureDateStatus.className = 'row';
			  featureDateStatus.id = 'dateStatus';			  
		//Date
			  var moduleDate = document.createElement('div');
			  moduleDate.className = 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
			  if (completionDate.length <= 1){
				  completionDate = "TBD"
			  }
			  moduleDate.innerHTML = "<strong>Date: </strong>" + completionDate;
		//Status
			  var moduleStatus = document.createElement('div');
			  moduleStatus.className = 'col-lg-6 col-md-6 col-sm-6 col-xs-6'
			  if (featureStatus.length > 30) {
				  featureStatus = '<a href="' + featureStatus + '" target="_blank">Posted</a>'
			  }			  
			  moduleStatus.innerHTML = '<strong>Status:</strong> ' + featureStatus;
		//Append Objects
			  featureDateStatus.appendChild(moduleDate);
			  featureDateStatus.appendChild(moduleStatus);			  
			  featureElement.appendChild(moduleTitle);
			  featureElement.appendChild(moduleAuthors);
			  featureElement.appendChild(featureDateStatus);
			  featureElementContainer.appendChild(featureElement);
			  addFeatures.appendChild(featureElementContainer);
		//Create Modal			  

			  var modalArea = document.getElementById('modal-area');			  
			  var modalContainer = document.createElement('div');
			  modalContainer.className = 'modal fade';
			  modalContainer.id = featureModalId;
			  modalContainer.setAttribute('tabIndex', '-1');
			  modalContainer.setAttribute('role', 'dialog');
			  modalContainer.setAttribute('aria-labelledby', 'modal-' + i + '-label');
			  modalArea.appendChild(modalContainer);
			  var modalDialog = document.createElement('div');
			  modalDialog.className = 'modal-dialog';
			  modalDialog.setAttribute('role', 'document');
			  modalContainer.appendChild(modalDialog);
		//Modal Content
			  var modalContent = document.createElement('div');
			  modalContent.className = 'modal-content';
			  modalDialog.appendChild(modalContent);
		//Modal Header
			  var modalHeader = document.createElement('div');
			  modalHeader.className = 'modal-header';
			  modalContent.appendChild(modalHeader);
		//Modal Close Button
			  var modalClose = document.createElement('button');
			  modalClose.setAttribute('type', 'close');
			  modalClose.className = 'close';
			  modalClose.setAttribute('data-dismiss', 'modal');
			  modalClose.setAttribute('aria-label', 'Close');
			  modalHeader.appendChild(modalClose);
			  var closeX = document.createElement('span');
			  closeX.setAttribute('aria-hidden', 'true');
			  closeX.innerHTML = '&times;';			  
			  modalClose.appendChild(closeX);
		//Modal Title
			  var modalTitle = document.createElement('h4');
			  modalTitle.className = 'modal-title text-center';
			  modalTitle.id = 'modal-' + i + '-label';
			  modalTitle.innerHTML = featureTitle;
			  modalHeader.appendChild(modalTitle);
		//Modal Author	  
			  var modalAuthors = document.createElement('p');
			  modalAuthors.className = 'text-center';
			  modalAuthors.innerHTML = '<strong>Lead Author(s):</strong> ' + leadWriters;
			  modalHeader.appendChild(modalAuthors);	  			  
		//Modal Body
			  var modalBody = document.createElement('div');
			  modalBody.className = 'modal-body';
			  modalContent.appendChild(modalBody);
		//Description
			  var modalFeatureDescription = document.createElement('p');
			  modalFeatureDescription.className = 'modal-feature-description text-center';
			  if (featureDescription.length > 1) {
			  	modalFeatureDescription.innerHTML = featureDescription;
			  } else {modalFeatureDescription.innerHTML = '<i>No description</i>'};
			  modalBody.appendChild(modalFeatureDescription);
		//Modal body row 			  
			  var modalBodyRow = document.createElement('div');
			  modalBodyRow.className = 'row';			  			  
		//Modal Other Staff	  
			  if (otherStaff.length > 1) {
				  var modalOtherStaff = document.createElement('div');
				  modalOtherStaff.className = 'text-center col-sm-6 col-md-6 col-lg-6';			  
				  modalOtherStaff.innerHTML = '<strong>Other Staff:</strong> ' + otherStaff;
				  modalBodyRow.appendChild(modalOtherStaff);
			  }
		//Modal Status
			  var modalStatus = document.createElement('div');
			  modalStatus.className = 'text-center col-sm-6 col-md-6 col-lg-6';
			  modalStatus.innerHTML = '<strong>Status:</strong> ' + featureStatus;
			  modalBodyRow.appendChild(modalStatus);
		//Modal Length			  
			  var modalLength = document.createElement('div');
			  modalLength.className = 'text-center col-sm-6 col-md-6 col-lg-6';
			  modalLength.innerHTML = '<strong>Approx. Length:</strong> ' + featureLength;
			  modalBodyRow.appendChild(modalLength);
			  
			  modalBody.appendChild(modalBodyRow);
		//Modal Footer
			  var modalFooter = document.createElement('div');
			  modalFooter.className = 'modal-footer';
			  modalContent.appendChild(modalFooter);
		//Footer Buttons
			  var footerButton = document.createElement('button');
			  footerButton.setAttribute('type', 'button');
			  footerButton.className = 'btn btn-default';
			  footerButton.setAttribute('data-dismiss', 'modal');
			  footerButton.innerHTML = 'Close';
			  modalFooter.appendChild(footerButton);
				
            }			
          }
        });
      }