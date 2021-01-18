    $('#subBtn1').click(function() {

        $.ajax({
            url: "libs/php/getCountrySubInfo.php",
            type: 'POST',
            dataType: 'json',
            data: {
                lat: $('#lat').val(),
                lng: $('#lng').val()
            },
            success: function(result) {
                
                console.log(result);

                if (result.status.name == "ok") {
                    
                    $('#result1').html("<b>Country Name:</b> " + result['data']['countryName']);
                    $('#result2').html("<b>Country Code:</b> " + result['data']['countryCode']);
                    $('#result3').html("<b>Admin Name:</b> " + result['data']['adminName1']);
                    $('#result4').html("<b>Admin Code:</b> " + result['data']['adminCode1']);
                    $('#result5').html(" ");
                    
				}
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // your error code
            }
        });

    });

    $('#subBtn2').click(function() {

        $.ajax({
            url: "libs/php/getAddressInfo.php",
            type: 'POST',
            dataType: 'json',
            data: {
                lat: $('#lat').val(),
                lng: $('#lng').val()
            },
            success: function(result) {
                
                console.log(result);

                if (result.status.name == "ok") {
                    
                    $('#result1').html("<b>Street:</b> " + result['data']['street']);
                    $('#result2').html("<b>Postal Code:</b> " + result['data']['postalcode']);
                    $('#result3').html("<b>Admin Name 2:</b> " + result['data']['adminName2']);
                    $('#result4').html("<b>Admin Name 1:</b> " + result['data']['adminName1']);
                    $('#result5').html("<b>Country Code:</b> " + result['data']['countryCode']);
                    
                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // your error code
            }
        });

    });

    $('#subBtn3').click(function() {

        $.ajax({
            url: "libs/php/getOceanInfo.php",
            type: 'POST',
            dataType: 'json',
            data: {
                lat: $('#lat').val(),
                lng: $('#lng').val()
            },
            success: function(result) {
                
                console.log(result);

                if (result.status.name == "ok") {
                    
                    $('#result1').html("<b>Name:</b> " + result['data']['name']);
                    $('#result2').html("<b>GeoName ID:</b> " + result['data']['geonameId']);
                    $('#result3').html(" ");
                    $('#result3').html(" ");
                    
                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // your error code
            }
        });

    });