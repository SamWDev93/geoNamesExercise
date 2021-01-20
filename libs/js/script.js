    $('#subBtn1').click(function() {

        $.ajax({
            url: "libs/php/getCountrySubInfo.php",
            type: 'POST',
            dataType: 'json',
            data: {
                lat: $('#csLat').val(),
                lng: $('#csLng').val()
            },
            success: function(result) {
                
                console.log(result);

                if (result.status.name == "ok") {
                    
                    $('#csResult1').html("<b>Country Name:</b> " + result['data']['countryName']);
                    $('#csResult2').html("<b>Country Code:</b> " + result['data']['countryCode']);
                    $('#csResult3').html("<b>Admin Name:</b> " + result['data']['adminName1']);
                    $('#csResult4').html("<b>Admin Code:</b> " + result['data']['adminCode1']);
                    
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
                lat: $('#addressLat').val(),
                lng: $('#addressLng').val()
            },
            success: function(result) {
                
                console.log(result);

                if (result.status.name == "ok") {
                    
                    $('#addressResult1').html("<b>Street:</b> " + result['data']['street']);
                    $('#addressResult2').html("<b>Postal Code:</b> " + result['data']['postalcode']);
                    $('#addressResult3').html("<b>Admin Name 2:</b> " + result['data']['adminName2']);
                    $('#addressResult4').html("<b>Admin Name 1:</b> " + result['data']['adminName1']);
                    $('#addressResult5').html("<b>Country Code:</b> " + result['data']['countryCode']);
                    
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
                lat: $('#oceanLat').val(),
                lng: $('#oceanLng').val()
            },
            success: function(result) {
                
                console.log(result);

                if (result.status.name == "ok") {
                    
                    $('#oceanResult1').html("<b>Name:</b> " + result['data']['name']);
                    $('#oceanResult2').html("<b>GeoName ID:</b> " + result['data']['geonameId']);
                    
                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // your error code
            }
        });

    });