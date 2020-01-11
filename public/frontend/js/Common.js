$(document).ready(function () {
    $(function () {
        $('#BtnLogin').fancybox();
        $('#ftBtnLogin').fancybox();
        $('#ftBtnRegister').fancybox();
        $('#BtnRegister').fancybox();

        //$("body").on("click", "#BtnLogin", function () {
        //    $('#BtnLogin').fancybox({
        //        afterClose: function () {
        //            eventEnterLogin();
        //        }
        //    });
        //    $('body').addClass("no-scroll");
        //});
        //$("body").on("click", "#ftBtnLogin", function () {
        //    $('#ftBtnLogin').fancybox({
        //        afterClose: function () {
        //            eventEnterLogin();
        //        }
        //    });
        //    $('body').addClass("no-scroll");
        //});
        //$("body").on("click", "#ftBtnRegister", function () {
        //    $('#ftBtnRegister').fancybox({
        //        afterClose: function () {
        //            eventEnter();
        //        }
        //    });
        //    $('body').addClass("no-scroll");
        //});
        //$("body").on("click", "#BtnRegister", function () {
        //    $('#BtnRegister').fancybox({
        //        afterClose: function () {
        //            eventEnter();
        //        }
        //    });
        //    $('body').addClass("no-scroll");
        //});
        $("#backtop").live("click", function (event) {
            event.preventDefault();
            var t = $(window).scrollTop();
            $('html,body').stop().animate({ scrollTop: 0 }, 300);
        });

        $('.bg-popup').click(function () {
            $('#boxProductSaved').hide();
            $('body').removeClass("no-scroll");
        });
        checkNumberSave();
        $('#btnProductSaved').click(function () {
            if ($('#numberSave').text() != 0) {
                var cookieProductSave = $.cookie('savedProductIds');
                $('#boxProductSaved').removeClass('none');
                $('#boxProductSaved').show();
                if (cookieProductSave == undefined || cookieProductSave == 0 || cookieProductSave == " ")
                    $('#boxProductSaved table').html("<p style='text-align:center'>Không có tin rao nào được lưu.</p>");
                else
                    GetProductlist();
                $('body').addClass("no-scroll");
                $(document).keyup(function (e) {
                    if (e.keyCode == 27) {
                        $('.bg-popup').trigger("click");
                    }
                });
                var numberSavedStt = $('span#numberSave').text();
                if (numberSavedStt > 3)
                    $('#model-scroll').scrollbar();
            }
            else {
                alert("Không có tin rao nào được lưu.");
                return false;
            }

        });
        $('#txtSearchArticle').on('keypress', function (event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                searchArticles();
            }
        });
    });

    rePosition();



});




function ClosedModelPreview() {
    $(document).mouseup(function (e) {
        var container = $("#previewProductModel");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $('body').removeClass("no-scroll");
            $(".btnPostNew").show();
        }
    });
}
function ClosedModelForget() {
    $(document).mouseup(function (e) {
        var container = $("#ForgetPassContent");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $('body').removeClass("no-scroll");
        }
        else {
            $('body').addClass("no-scroll");
        }
    });
}

function checkNumberSave() {
    var number = 0;
    var cookieProductSave = $.cookie('savedProductIds');
    if (cookieProductSave != undefined && cookieProductSave != " " && cookieProductSave != "") {
        if (cookieProductSave.search(',') > -1) {
            var arrCookie = cookieProductSave.split(',');
            for (var i = 0; i < arrCookie.length; i++) {
                if (arrCookie[i] != "")
                    number++;
            }
            $('#numberSave').text(number);
        }
        else {
            $('#numberSave').text("1");
        }
    }
    else {
        $('#numberSave').text(number);
    }
}
function validate_login() {
    if ($.trim($("#txtUserNameLogin").val()) == '') {
        $(".err_txtUserNameLogin").removeClass("none");
        $(".err_txtUserNameLogin").text("Email không được bỏ trống.");
        $('.err_txtUserNameLogin').parent().removeClass("mg-bottom-20");
        document.getElementById("txtUserNameLogin").focus();
        return false;
    } else {
        if (!/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test($.trim($("#txtUserNameLogin").val()))) {
            $(".err_txtUserNameLogin").removeClass("none");
            $('.err_txtUserNameLogin').parent().removeClass("mg-bottom-20");
            $(".err_txtUserNameLogin").text("Email sai định dạng.");
            $('#txtUserNameLogin').focus();
            return false;
        }
        else {
            $(".err_txtUserNameLogin").addClass("none");
            $('.err_txtUserNameLogin').parent().addClass("mg-bottom-20");
        }
    }
    if ($.trim($("#txtPasswordLogin").val()) == '') {
        $(".err_txtPasswordLogin").removeClass("none");
        $('.err_txtPasswordLogin').parent().removeClass("mg-bottom-20");
        $(".err_txtPasswordLogin").text("Mật khẩu không được để trống");
        document.getElementById("txtPasswordLogin").focus();
        return false;
    } else {
        if ($.trim($('#txtPasswordLogin').val()).length < 6) {
            $(".err_txtPasswordLogin").removeClass("none");
            $('.err_txtPasswordLogin').parent().removeClass("mg-bottom-20");
            $(".err_txtPasswordLogin").text("Mật khẩu phải có ít nhất 6 ký tự");
            document.getElementById("txtPasswordLogin").focus();
            return false;
        }
        else {
            $(".err_txtPasswordLogin").addClass("none");
            $('.err_txtPasswordLogin').parent().addClass("mg-bottom-20");
        }
    }
    return true;
}

function validate_login_Page() {
    if ($.trim($("#txtUserNameLoginPage").val()) == '') {
        $(".err_txtUserNameLogin").removeClass("none");
        $(".err_txtUserNameLogin").text("Email không được bỏ trống.");
        $('.err_txtUserNameLogin').parent().removeClass("mg-bottom-20");
        document.getElementById("txtUserNameLoginPage").focus();
        return false;
    } else {
        if (!/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test($.trim($("#txtUserNameLoginPage").val()))) {
            $(".err_txtUserNameLogin").removeClass("none");
            $('.err_txtUserNameLogin').parent().removeClass("mg-bottom-20");
            $(".err_txtUserNameLogin").text("Email sai định dạng.");
            $('#txtUserNameLoginPage').focus();
            return false;
        }
        else {
            $(".err_txtUserNameLogin").addClass("none");
            $('.err_txtUserNameLogin').parent().addClass("mg-bottom-20");
        }
    }
    if ($.trim($("#txtPasswordLoginPage").val()) == '') {
        $(".err_txtPasswordLogin").removeClass("none");
        $('.err_txtPasswordLogin').parent().removeClass("mg-bottom-20");
        $(".err_txtPasswordLogin").text("Mật khẩu không được để trống");
        document.getElementById("txtPasswordLoginPage").focus();
        return false;
    } else {
        if ($.trim($('#txtPasswordLoginPage').val()).length < 6) {
            $(".err_txtPasswordLogin").removeClass("none");
            $('.err_txtPasswordLogin').parent().removeClass("mg-bottom-20");
            $(".err_txtPasswordLogin").text("Mật khẩu phải có ít nhất 6 ký tự");
            document.getElementById("txtPasswordLoginPage").focus();
            return false;
        }
        else {
            $(".err_txtPasswordLogin").addClass("none");
            $('.err_txtPasswordLogin').parent().addClass("mg-bottom-20");
        }
    }
    return true;
}


function LoginAjax() {
    if (!validate_login()) return false;
    var UserName = $.trim($("#txtUserNameLogin").val());
    var PassWord = $.trim($("#txtPasswordLogin").val());
    var chkRemember = $('#Login1_chkRemember').attr("Checked");
    if (chkRemember == "checked")
        chkRemember = true;
    else
        chkRemember = false;
    var url = '/Handler/UserHandler.ashx';
    var data = {
        act: "Login",
        txtUsername: UserName,
        txtPassword: PassWord,
        chkRemember: chkRemember
    };
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function (GetValue) {
            if (GetValue.search("Tài khoản của bạn") > -1) {
                alert(GetValue);
            }
            else if (GetValue == "Email hoặc mật khẩu không đúng !") {
                alert(GetValue);
                $('#txtPasswordLogin').val(""), $('#txtPasswordLogin').focus();
            }
            else {
                window.location.href = "/thanh-vien/quan-ly-tin-rao.htm";
            }
        }
    });
}

function LoginAjaxInPage() {
    if (!validate_login_Page()) return false;
    var UserName = $.trim($("#txtUserNameLoginPage").val());
    var PassWord = $.trim($("#txtPasswordLoginPage").val());
    var chkRemember = $('#chkRemember').attr("Checked");
    if (chkRemember == "checked")
        chkRemember = true;
    else
        chkRemember = false;
    var url = '/Handler/UserHandler.ashx';
    var data = {
        act: "Login",
        txtUsername: UserName,
        txtPassword: PassWord,
        chkRemember: chkRemember
    };
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function (GetValue) {
            if (GetValue.search("Tài khoản của bạn") > -1) {
                alert(GetValue);
            }
            else if (GetValue == "Email hoặc mật khẩu không đúng !") {
                alert(GetValue);
                $('#txtPasswordLoginPage').focus();
            }
            else {
                window.location.href = "/thanh-vien/quan-ly-tin-rao.htm";
            }
        }
    });
}

function eventEnterLogin() {
    $("input#txtUserNameLogin,input#txtPasswordLogin").keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $('#btnLoginUser').trigger("click");
        }
    });
}

function validate_forgetPass() {
    if ($.trim($("#txtEmailForget").val()) == '') {
        $(".err_txtEmailForget").removeClass("none");
        $(".err_txtEmailForget").text("Email không được bỏ trống.");
        $('.err_txtEmailForget').parent().removeClass("mg-bottom-20");
        document.getElementById("txtEmailForget").focus();
        return false;
    } else {
        if (!/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test($.trim($("#txtEmailForget").val()))) {
            $(".err_txtEmailForget").removeClass("none");
            $('.err_txtEmailForget').parent().removeClass("mg-bottom-20");
            $(".err_txtEmailForget").text("Email sai định dạng.");
            $('#txtEmailForget').focus();
            return false;
        }
        else {
            $(".err_txtEmailForget").addClass("none");
            $('.err_txtEmailForget').parent().addClass("mg-bottom-20");
        }
    }
    if ($.trim($('#txtcodeForget').val()) == '') {
        $(".err_txtcodeForget").removeClass("none");
        $('.err_txtcodeForget').parent().removeClass("mg-bottom-30");
        $('.err_txtcodeForget').addClass("mg-bottom-10");
        document.getElementById("txtcodeForget").focus();
        return false;
    }
    else {
        $(".err_txtcodeForget").addClass("none");
        $('.err_txtcodeForget').parent().addClass("mg-bottom-30");
        $('.err_txtcodeForget').removeClass("mg-bottom-10");
    }
    return true;
}

function ForgetPass() {
    if (!validate_forgetPass()) return false;
    $('.loading_contact').show();
    var txtEmail = $.trim($("#txtEmailForget").val());
    var txtCode = $.trim($("#txtcodeForget").val());
    var url = '/Handler/UserHandler.ashx';
    var data = {
        act: "forgetpass",
        txtEmail: txtEmail,
        txtCode: txtCode,
    };
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function (GetValue) {
            if (GetValue == "Chúng tôi đã gửi xác nhận mật khẩu vào mail của bạn.") {
                $('.loading_contact').hide();
                refreshCaptcha('img_CAPTCHA_RESULT_314');
                alert(GetValue);
                $('#fancybox-overlay').trigger("click");
                $('body').removeClass('no-scroll');
            }
            else if (GetValue == "Email đăng nhập này không tồn tại !") {
                alert(GetValue);
                $('.loading_contact').hide();
                $('#txtEmailForget').val('');
                $('#txtEmailForget').focus();
                refreshCaptcha('img_CAPTCHA_RESULT_314');
            }
            else if (GetValue == "Mã an toàn không đúng !") {
                $('.loading_contact').hide();
                alert(GetValue);
                $('#txtcodeForget').val('');
                $('#txtcodeForget').focus();
                refreshCaptcha('img_CAPTCHA_RESULT_314');
            }
            else if (GetValue.search("Email này dùng để đăng nhập") > -1) {
                $('.loading_contact').hide();
                refreshCaptcha('img_CAPTCHA_RESULT_314');
                alert(GetValue);
                window.location.href = "/";
            }
            else {
                $('.loading_contact').hide();
                alert("Có lỗi xảy ra khi gửi mail!");
                refreshCaptcha('img_CAPTCHA_RESULT_314');
                window.location.href = "/";
            }

        }
    });
}

function validate_confirmPass() {
    if ($.trim($("#MainContent_txtConfirmNewPassword").val()) == '') {
        $(".err_Confirm").removeClass("none");
        $(".err_Confirm").text("Mật khẩu mới không được bỏ trống.");
        $("#MainContent_txtConfirmNewPassword").focus();
        return false;
    } else {
        if ($.trim($('#MainContent_txtConfirmNewPassword').val()).length < 6) {
            $(".err_Confirm").removeClass("none");
            $(".err_Confirm").text("Mật khẩu phải có ít nhất 6 ký tự");
            $("#MainContent_txtConfirmNewPassword").focus();
            return false;
        }
        else {
            $(".err_Confirm").addClass("none");
        }
    }
    if ($.trim($("#MainContent_txtConfirmPassword").val()) == '') {
        $(".err_Confirm").removeClass("none");
        $(".err_Confirm").text("Xác nhận mật khẩu không được bỏ trống.");
        $("#MainContent_txtConfirmPassword").focus();
        return false;
    } else {
        if ($.trim($('#MainContent_txtConfirmPassword').val()).length < 6) {
            $(".err_Confirm").removeClass("none");
            $(".err_Confirm").text("Xác nhận mật khẩu phải có ít nhất 6 ký tự");
            $("#MainContent_txtConfirmPassword").focus();
            return false;
        }
        else {
            $(".err_Confirm").addClass("none");
        }
    }
    if ($.trim($("#MainContent_txtConfirmPassword").val()) != $.trim($("#MainContent_txtConfirmNewPassword").val())) {
        $(".err_Confirm").removeClass("none");
        $(".err_Confirm").text("Xác nhận mật khẩu không chính xác.");
        $("#txtConfirmPassword").focus();
        return false;
    }
    else {
        $(".err_Confirm").addClass("none");
    }
    return true;
}

function confirmPass() {
    if (!validate_confirmPass()) return false;
    var pass = $.trim($("#MainContent_txtConfirmNewPassword").val());
    var UserId = $.trim($('#MainContent_userIdSetPass').val());
    var data = {
        act: "setPass",
        UserId: UserId,
        txtPass: pass,
    };
    var url = '/Handler/UserHandler.ashx';
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function (GetValue) {
            alert(GetValue);
            window.location.href = "/";
        }
    });
}

function searchArticle() {
    var text = $.trim($("#txtSearchArticle").val());
    var regex = /[^a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ0-9\s]/ig;
    text = text.replace(regex, '');
    if (text == 'Tìm tin tức lời khuyên tư vấn' || text == '') {
        {
            $("#txtSearchArticle").val("");
            $("#txtTextSearch").focus();
            return false;
        }
    } else {
        var data = {
            text: text
        };
        $.ajax({
            type: "POST",
            url: "/Handler/SearchHandler.ashx?module=SearchArticle",
            data: data,
            success: function (url) {
                window.location.href = url;
            },
            error: function (msg) {
                //alert(msg.status);
            }
        });
    }

}

function ConfirmCaptcha() {
    var txtcodeConfirm = $.trim($('#txtcodeConfirm').val());
    var type = $('#txtTypeConfirm').val();
    var productid = $('#txtProductIdConfirm').val();
    if (txtcodeConfirm == "") {
        $('.err_txtcodeConfirm').removeClass("none");
        $('#txtcodeConfirm').focus();
        return false;
    }
    else {
        $('.err_txtcodeConfirm').addClass("none");
    }
    var data = {
        act: "ConfirmCaptcha",
        txtcodeConfirm: txtcodeConfirm,
    };
    $.ajax({
        type: "POST",
        url: '/Handler/UserHandler.ashx',
        data: data,
        success: function (GetValue) {
            if (GetValue == "Xác nhận thành công!") {
                if (type == "post") {
                    $('#' + productid + " .reupproduct").attr("href");
                    console.log($('#' + productid + " .reupproduct").attr("href"));
                }
                else {
                    $('#' + productid + " .newupproduct").attr("href");
                    console.log($('#' + productid + " .newupproduct").attr("href"));
                }
                $('#fancybox-overlay').trigger("click");
            }
            else if (GetValue == "Mã xác nhận không chính xác!") {
                $('#txtcodeConfirm').focus();
                refreshCaptcha('img_CAPTCHA_RESULT_318');
                alert(GetValue);
            }
            else {
                alert("Có lỗi xảy ra. Vui lòng thử lại sau !");
            }
        }
    });
}

function validateRegisterEmail() {
    if ($('#txtFullNameRemail').val() == '') {
        $('.spanFullNameRemail').css("display", "");
        $('.spanFullNameRemail').parent().removeClass("mg-bottom-20").addClass('mg-bottom-5');
        $('#txtFullNameRemail').focus();
        return false;
    }
    else {
        $('.spanFullNameRemail').parent().addClass("mg-bottom-20").removeClass('mg-bottom-5');
        $('.spanFullNameRemail').css("display", "none");
    }
    if ($('#txtEmailRemail').val() == '') {
        $('.spanEmailRemail').css("display", "");
        $('#txtEmailRemail').focus();
        return false;
    }
    else {
        if (!/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test($.trim($("#txtEmailRemail").val()))) {
            $('.spanEmailRemail').css("display", "");
            $(".spanEmailRemail").text("Email sai định dạng.");
            $('#txtEmailRemail').focus();
            return false;
        }
        else {
            $(".spanEmailRemail").css("display", "none");
        }
    }
}

function searchArticles() {
    var text = $.trim($("#txtSearchArticle").val());

    if (text == '') {
        alert("Bạn cần nhập nội dung tìm kiếm");
        $("#txtSearchArticle").focus();
        return;
    }

    var regex = /[^a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ0-9\s]/ig;
    text = text.replace(regex, '');
    if (text == 'Tìm tin tức lời khuyên tư vấn' || text == '') {
        $("#txtSearchArticle").val("");
        $("#txtSearchArticle").focus();
        return false;
    } else {
        SearchTextArticle(text);
    }
}

function SearchTextArticle(text) {
    var data = {
        text: text
    };
    $.ajax({
        type: "POST",
        url: "/Handler/SearchHandler.ashx?module=SearchArticle",
        data: data,
        success: function (url) {
            window.location.href = url;
        },
        error: function (msg) {
            //alert(msg.status);
        }
    });
}


$(window).scroll(function () {

    if ($(this).scrollTop() > 150) {
        $('body').addClass("head-affix");

    }
    else {
        $('body').removeClass("head-affix");
    }
    var op = $(window).scrollTop() / $(window).height();
    op = op > 1 ? 1 : op;
    $("#backtop").stop().animate({ 'opacity': op }, 10);

    rePosition();
});

$(window).resize(function () {
    rePosition();
});

function rePosition() {
    if (window.location.pathname.indexOf("thanh-vien") > 0)
    {
        $('.ban_scroll').hide();
        $("#SiteLeft").hide();
        $("#SiteRight").hide();
        return;
    }

    if ($('.ban_scroll .item').length > 0) {
        var bodywidth = 1150;
        var widthBannerLeft = $('#SiteLeft .ban_scroll').width();
        var xleft = (($("body").width() - bodywidth) / 2) - widthBannerLeft;
        var top = window.location.pathname != "/" ? 96 : 515;
        if (window.location.pathname.indexOf("dang-tin") > 0) {
            top = 295;
        }

        if ($('body').hasClass("head-affix")) {
            top = window.location.pathname != "/" ? 291 : 570;
        }

        var bottom = $(".foot-top").position().top - $(".ban_scroll").height() - $(".foot-top").height();

        //console.log("bottom: " + bottom + " --  " + $(window).scrollTop());

        //Chỉ hiển thị từ phần gốc hất lên chi tiết thôi, ko hiển thị khi vuốt quá tin cùng khoảng giá
        //xleft = xleft < 0 ? 0 : xleft;
        if ($(window).scrollTop() > bottom) {
            //console.log("qua");
            $('#SiteLeft .ban_scroll').css({ 'position': 'fixed', 'bottom': 318, 'top': '', 'left': xleft });
            $('#SiteRight .ban_scroll').css({ 'position': 'fixed', 'bottom': 318, 'top': '', 'right': xleft });
        }
        else if ($(window).scrollTop() > top - $(".main-head").height()) {
            //ngta keo qua cai tin 
            $('#SiteLeft .ban_scroll').css({ 'position': 'fixed', 'bottom': '', 'top': $(".main-head").height(), 'left': xleft });
            $('#SiteRight .ban_scroll').css({ 'position': 'fixed', 'bottom': '', 'top': $(".main-head").height(), 'right': xleft });
        } else {
            $('#SiteLeft .ban_scroll').css({ 'position': 'fixed', 'bottom': '', 'top': top, 'left': xleft });
            $('#SiteRight .ban_scroll').css({ 'position': 'fixed', 'bottom': '', 'top': top, 'right': xleft });
        }

        $('.ban_scroll').show();
        $("#SiteLeft").show();
        $("#SiteRight").show();

    } else {
        $('.ban_scroll').hide();
        $("#SiteLeft").hide();
        $("#SiteRight").hide();
    }
}