$(function(){
    //バリデーション お問合せ
    $('#contact_name').on('blur',function(){
        var error;
        let value = $(this).val();
        var error_message = document.getElementById('text_contact_name');
        if(value == ""){
            error = true;
        }
        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
        }

    });

    $('#contact_first_name').on('blur',function(){
        var error;
        let value = $(this).val();
        var error_message = document.getElementById('text_contact_name');
        if(value == ""){
            error = true;
        }
        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
        }

    });

    $('#contact_kana').on('blur',function(){
        let error;
        let value = $(this).val();
        var error_message = document.getElementById('text_contact_kana');
        if(value == ""){
            error = true;
        }

        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
            let error02;
            if(!$(this).val().match(/^[ァ-ロワヲンー 　\r\n\t]*$/)){ 
                error02 = true;
            } 
            if(error02){
                error_message.innerHTML = 'カタカナで入力してください';
            } else {
                error_message.innerHTML = '';
            }
        }
    });

    $('#contact_first_kana').on('blur',function(){
        let error;
        let value = $(this).val();
        var error_message = document.getElementById('text_contact_kana');
        if(value == ""){
            error = true;
        }

        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
            let error02;
            if(!$(this).val().match(/^[ァ-ロワヲンー 　\r\n\t]*$/)){ 
                error02 = true;
            } 
            if(error02){
                error_message.innerHTML = 'カタカナで入力してください';
            } else {
                error_message.innerHTML = '';
            }
        }
    });

    $('#contact_email').on('blur',function(){
        let error;
        let value = $(this).val();
        var error_message = document.getElementById('text_contact_email');
        if(value == ""){
            error = true;
        }

        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
            let error02;
            if(!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){ 
                error02 = true;
            } 
            if(error02){
                error_message.innerHTML = 'メールアドレスの形式で入力してください';
            } else {
                error_message.innerHTML = '';
            }
        }
    });

    /*
    $('#contact_tel').on('blur',function(){
        let error;
        let value = $(this).val();
        var error_message = document.getElementById('text_contact_tel');
        if(value == ""){
            error = true;
        }

        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
            let error02;
            if(!$(this).val().match(/^[0-9]+$/)){
                error02 = true;
            } 
            if(error02){
                error_message.innerHTML = '半角数字のみ、ハイフンなしで入力してください';
            } else {
                error_message.innerHTML = '';
            }
        }
    });
    */

    $('#contact_comments').on('blur',function(){
        let error;
        let value = $(this).val();
        var error_message = document.getElementById('text_contact_comments');
        if(value == ""){
            error = true;
        }
        if(error){
            error_message.innerHTML = '入力必須項目です';
        } else {
            error_message.innerHTML = '';
        }
    });

 
    $("#confirmBtn").click(function () {
        var error;

        // 氏名
        let value01 = $("#contact_name").val();
        var name = document.getElementById('text_contact_name');
        if(value01 == ""){
            error = true;
        }
        if(error){
            name.innerHTML = '入力必須項目です';
            return;
        }

        let value01_sub = $("#contact_first_name").val();
        if(value01_sub == ""){
            error = true;
        }
        if(error){
            name.innerHTML = '入力必須項目です';
            return;
        }

        // フリガナ
        let value02 = $("#contact_kana").val();
        var kana = document.getElementById('text_contact_kana');
        if(value02 == ""){
            error = true;
        }
        if(error){
            kana.innerHTML = '入力必須項目です';
            return;
        } else {
            kana.innerHTML = '';
            let error02;
            if(!value02.match(/^[ァ-ロワヲンー 　\r\n\t]*$/)){ 
                error02 = true;
            } 
            if(error02){
                kana.innerHTML = 'カタカナで入力してください';
                return;
            } 
        }

        let value02_sub = $("#contact_first_kana").val();
        if(value02_sub == ""){
            error = true;
        }
        if(error){
            kana.innerHTML = '入力必須項目です';
            return;
        } else {
            kana.innerHTML = '';
            let error02;
            if(!value02_sub.match(/^[ァ-ロワヲンー 　\r\n\t]*$/)){ 
                error02 = true;
            } 
            if(error02){
                kana.innerHTML = 'カタカナで入力してください';
                return;
            } 
        }

        // メールアドレス
        let value03 = $("#contact_email").val();
        var email = document.getElementById('text_contact_email');
        if(value03 == ""){
            error = true;
        } 
        if(error){
            email.innerHTML = '入力必須項目です';
            return;
        } else {
            email.innerHTML = '';
            let error02;
            if(!value03.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){ 
                error02 = true;
            } 
            if(error02){
                email.innerHTML = 'メールアドレスの形式で入力してください';
                return;
            } 
        }
        
        /*
        // 電話番号
        let value04 = $("#contact_tel").val();
        var tel = document.getElementById('text_contact_tel');
        if(value04 == ""){
            error = true;
        } 
        if(error){
            tel.innerHTML = '入力必須項目です';
            return;
        } else {
            tel.innerHTML = '';
            let error02;
            if(!value04.match(/^[0-9]+$/)){ 
                error02 = true;
            } 
            if(error02){
                tel.innerHTML = '半角数字のみ、ハイフンなしで入力してください';
                return;
            } 
        }
        */

        // お問合せ内容
        let value05 = $("#contact_comments").val();
        var comments = document.getElementById('text_contact_comments');
        if(value05 == ""){
            error = true;
        }
        if(error){
            comments.innerHTML = '入力必須項目です';
            return;
        }

        var company_name = document.getElementById('text_company_name');
        let value06 = $("#contact_company_name").val();
        value05_txt = value05.replace( /\r?\n/g, '<br />' );

        company_name.classList.add("confirm");
        name.classList.add("confirm");
        kana.classList.add("confirm");
        email.classList.add("confirm");
//        tel.classList.add("confirm");
        comments.classList.add("confirm");

        name.innerHTML = value01 + ' ' + value01_sub;
        kana.innerHTML = value02 + ' ' + value02_sub;

        email.innerHTML = value03;
//        tel.innerHTML = value04;
        comments.innerHTML = value05_txt;
        company_name.innerHTML = value06;

        // typeを変更
        $('#contact_company_name').attr({
            type: 'hidden',
        });
        $('#contact_name').attr({
            type: 'hidden',
        });
        $('#contact_first_name').attr({
            type: 'hidden',
        });
        $('#contact_kana').attr({
            type: 'hidden',
        });
        $('#contact_first_kana').attr({
            type: 'hidden',
        });
        $('#contact_email').attr({
            type: 'hidden',
        });
        /*
        $('#contact_tel').attr({
            type: 'hidden',
        });
        */
        $("#contact_comments").css('display', 'none');
        $('#agreement').attr({
            type: 'hidden',
        });
        $("#contact_agreement1").css('display', 'none');
        $("#contact_agreement2").css('display', 'none');        
        
        $('#confirmBtn').attr({
            type: 'hidden',
        });
        $('#backBtn').attr({
            type: 'button',
        });
        $('#submitBtn').attr({
            type: 'submit',
        });
    });

    $("#backBtn").click(function () {
        var company_name = document.getElementById('text_company_name');
        var name = document.getElementById('text_contact_name');
        var kana = document.getElementById('text_contact_kana');
        var email = document.getElementById('text_contact_email');
    //    var tel = document.getElementById('text_contact_tel');
        var comments = document.getElementById('text_contact_comments');

        company_name.classList.remove("confirm");
        name.classList.remove("confirm");
        kana.classList.remove("confirm");
        email.classList.remove("confirm");
    //    tel.classList.remove("confirm");
        comments.classList.remove("confirm");

        company_name.innerHTML = '';
        name.innerHTML = '';
        kana.innerHTML = '';
        email.innerHTML = '';
    //    tel.innerHTML = '';
        comments.innerHTML = '';

        // typeを変更
        $('#contact_company_name').attr({
            type: 'text',
        });
        $('#contact_name').attr({
            type: 'text',
        });
        $('#contact_first_name').attr({
            type: 'text',
        });
        $('#contact_kana').attr({
            type: 'text',
        });
        $('#contact_first_kana').attr({
            type: 'text',
        });
        $('#contact_email').attr({
            type: 'email',
        });
        /*
        $('#contact_tel').attr({
            type: 'tel',
        });
        */
        $("#contact_comments").css('display', 'block');
        $('#agreement').attr({
            type: 'checkbox',
        });
        $("#contact_agreement1").css('display', 'block');
        $("#contact_agreement2").css('display', 'inline-block');        
        
        $('#confirmBtn').attr({
            type: 'button',
        });
        $('#backBtn').attr({
            type: 'hidden',
        });
        $('#submitBtn').attr({
            type: 'hidden',
        });
    });

    $("#agreement").click(function () {
        var btnAgree = document.getElementById( "agreement" );
        var btnAgreeCK = $(btnAgree).prop('checked');
        if(btnAgreeCK){
            $('#confirmBtn').attr({
                disabled: false,
            });
        } else {
            $('#confirmBtn').attr({
                disabled: true,
            });
        }
    });

    $("#check").click(function () {
        if ($("#check").prop("checked") == true) {            
            $("#const_zip02").prop("required", true);
            $("#const_addr01").prop("required", true);
            $("#const_addr02").prop("required", true);

            var element1 = document.getElementById( "const_zip02" );
            var element2 = document.getElementById( "const_addr01" );
            var element3 = document.getElementById( "const_addr02" );
            var check1 = $(element1).prop('required');
            var check2 = $(element2).prop('required');
            var check3 = $(element3).prop('required');
        } else {
            $("#const_zip02").prop("required", false);
            $("#const_addr01").prop("required", false);
            $("#const_addr02").prop("required", false);
            
            
            var element1 = document.getElementById( "const_zip02" );
            var element2 = document.getElementById( "const_addr01" );
            var element3 = document.getElementById( "const_addr02" );
            var check1 = $(element1).prop('required');
            var check2 = $(element2).prop('required');
            var check3 = $(element3).prop('required');
        }
    });
    
    $("#submitBtn").click(function ()  {
        var company_name = $("[name=\"entry.1423428794\"]").val();
        var email = $("[name=\"entry.215863835\"]").val();
//        var tel = $("[name=\"entry.1087620094\"]").val();
        var comments = $("[name=\"entry.8787768\"]").val();

        let last_name = $("#contact_name").val();
        let first_name = $("#contact_first_name").val();
        var name = last_name + " " + first_name;

        let last_kana = $("#contact_kana").val();
        let first_kana = $("#contact_first_kana").val();
        var kana = last_kana + " " + first_kana;
 
        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfvuZkQr1hQJDywHZGYPKnZpA2iiZDut3S3_Mf7ce3_JUJklw/formResponse",
            data: {
                "entry.1423428794": company_name,
                "entry.2117307615": name,
                "entry.2126760718": kana,
                "entry.215863835": email,
//                "entry.1087620094": tel,
                "entry.8787768": comments
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $("#contact").slideUp();
                    $('#success').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理
                    $("#contact").slideUp();
                    $('#error').slideDown();
                }
            }
        });
        event.preventDefault();  
    });
});