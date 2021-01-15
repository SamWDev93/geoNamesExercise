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

                    $('#results').html(result['data']);

                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // your error code
            }
        });

    });