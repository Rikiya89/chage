'use strict';

{
    $(function () {
        $('#thum_btn').on('click', 'a', function () {
            const imageFile = $(this).attr('href');
            console.log(imageFile);
            $('#view img').hide();
            $('#view img').fadeIn().attr('src', imageFile);
            return false;
        });
    });

}