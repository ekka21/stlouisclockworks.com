
(function($) {

	var ContactUs = $('#ContactUs'),
		  SubmitBtn = $('#Submit');

	ContactUs.submit(function(e) {

		SubmitBtn.attr("disabled", "disabled");

		if ( validateEmail() )
		{
      //ContactUs.serializeArray().map(function(x){data[x.name] = x.value;});
		  var data = {
				'name': $("#ContactUs input[name='name']").val(),
				'phone': $("#ContactUs input[name='phone']").val(),
				'email': $("#ContactUs input[name='email']").val(),
				'message': $("#ContactUs textarea[name='message']").val()
			};

      console.log(data);

			$.ajax( {
            url: 'https://gss11yzeie.execute-api.us-east-1.amazonaws.com/prod/contact',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8',
            crossDomain: true,
						dataType: 'json',
			      success: function() {
			        alert('Thank you for contacing us. We will review your request and get back to you shortly.');
			        ContactUs.trigger('reset');
			        SubmitBtn.removeAttr('disabled');
			      }
			});
		}

		e.preventDefault();
	});

})(jQuery);



function validateEmail()
{
	var email = $('#email'),
		x = email.val(),
		atpos=x.indexOf("@"),
		dotpos=x.lastIndexOf(".");

	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
		alert("Not a valid e-mail address");
		email.focus();
		$('#Submit').removeAttr("disabled");
		return false;
	}
	return true;
}