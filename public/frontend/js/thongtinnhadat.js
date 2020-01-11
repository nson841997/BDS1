//$(function () {
jQuery(document).ready(function () {
    $('#cboCateSearch').selectbox();
    $(".toTop").live("click", function (event) {
        event.preventDefault();
        var t = $(window).scrollTop();
        $('html,body').stop().animate({ scrollTop: 0 }, 300);
    });
    $(window).scroll(function () {
        var op = $(window).scrollTop() / $(window).height();
        op = op > 1 ? 1 : op;
        $(".toTop").stop().animate({ 'opacity': op }, 10);
    });

    //active menu
    var url = window.location.pathname;
    if (url == '/thanh-vien/quan-ly-tin-rao.htm') {
        $(".box-left ul li:first a").addClass('active');
    }
    else {
        $(".box-left ul li a[href$='" + url + "']").addClass('active');
        //$("#menu_top a[href$='" + url + "']").parent().addClass('current');
    }
    //box_comment
    $(".box_comment .titlebox span").click(function (e) {
        $(".box_comment .active_taps").removeClass("active_taps");
        $(".box_comment #" + e.target.id).addClass("active_taps");
        $(".box_comment .listbox .box").hide();
        $(".box_comment ." + e.target.id).fadeIn();

        return false;
    });
});
/*


/*Tim kiếm top*/
function seachKeypress(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        event.preventDefault();
        searchClick();
    }
}
function searchClick() {
    var hddCate = $("#hddCate").val();
    var hddCity = $("#hddCity").val();
    var hddDistrict = $("#hddDistrict").val();
    var hddArea = $("#hddArea").val();
    var hddPrice = $("#hddPrice").val();
    var hddProject = $("#hddProject").val();
    var hddWard = $("#hddWard").val();
    var hddStreet = $("#hddStreet").val();
    var hddRoom = $("#hddRoom").val();
    var hddDirection = $("#hddDirection").val();

    if (hddCate > -1 || hddCity > -1 || hddDistrict > -1 || hddArea > -1 || hddPrice > -1 || hddProject > -1 || hddWard > -1 || hddStreet > -1 || hddRoom > -1 || hddDirection > -1) {
        //$("#btnSearch").click();

        var data = {
            productType: $("#hddType").val(),
            cateId: hddCate,
            cityCode: hddCity,
            districtId: hddDistrict,
            streetId: hddStreet,
            wardId: hddWard,
            projectId: hddProject,
            AreaVl: hddArea,
            PriceVl: hddPrice,
            RoomVl: hddRoom,
            DirectionVl: hddDirection
        };
        $.ajax({
            type: "POST",
            url: "/Handler/SearchHandler.ashx?module=SearchByProcess",
            data: data,
            success: function (url) {
                location.href = url;
            },
            error: function (msg) {
                //alert(msg.status);
            }
        });
    }
    else {
        var cateSearch = $("#hddCateSearch").val();
        cateSearch = cateSearch == undefined ? $("#cboType").val() : cateSearch;
        var text = $.trim($("#txtTextSearch").val());
        var regex = /[^a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ0-9\s]/ig;
        text = text.replace(regex, '');
        if (text == 'Nhập từ khóa' || text == '') {
            $("#txtTextSearch").val('');
            $("#txtTextSearch").focus();
            return false;
        } else {
            SearchFullText(cateSearch, text);
        }
    }
}
function SearchFullText(cateSearch, text) {
    var data = {
        cateSearch: cateSearch,
        text: text
    };
    $.ajax({
        type: "POST",
        url: "/Handler/SearchHandler.ashx?module=SearchFullText",
        data: data,
        success: function (url) {
            window.location.href = url;
        },
        error: function (msg) {
            //alert(msg.status);
        }
    });
}
/*Tim kiếm top end*/

MemberLogOut = function () {
    if (confirm('Bạn có chắc chắn muốn thoát ?')) {
        $.ajax({
            type: "POST",
            url: "/Handler/UserHandler.ashx?act=LogOut",
            success: function (url) {
                $.removeCookie('savedProductIds', { path: '/' });
                location.href = '/';
            }
        });
    }

}

function refreshCaptcha(imgId) {
    $('#' + imgId).attr('src', '/Layout/Capchar/CaptchaGenerator.aspx?t=' + new Date().getMilliseconds());
}

SetPasswordSocial = function () {
    if ($('#txtSetNewPass').val() != '' && $('#txtSetConfirmPassword').val() != '') {
        if ($('#txtSetNewPass').val() != $('#txtSetConfirmPassword').val()) {
            $('.pNotice').show();
            $('.pNotice p').html('Xác nhận mật khẩu không đúng !');
            return false;
        } else {
            $.ajax({
                dataType: 'json',
                url: '/Handler/UserHandler.ashx',
                data: { act: 'setpass', newp: $('#txtSetNewPass').val() },
                type: "POST",
                success: function (data) {
                    if (data.success == 0) {
                        $('.pNotice').show();
                        $('.pNotice p').html(data.mess);
                        return false;
                    } else {
                        if (confirm(data.mess) + '. Bạn có muốn quay về trang cá nhân?') {
                            window.location.href = '/thanh-vien/quan-ly-tin-rao.htm';
                        }
                    }
                }
            });
        }
    } else {
        $('.pNotice').show();
        $('.pNotice p').html('Các trường không được để trống !');
        return false;
    }
}


ChangePassword = function () {
    if ($('#txtOldPassword').val() == '') {
        $('#spanMKC').css("display", "");
        $('#spanMKC').text("Mật khẩu cũ không được để trống");
        $('#spanMKC').parent().removeClass("mg-bottom-20");
        $('#txtOldPassword').focus();
        return false;
    }
    else {
        if ($.trim($('#txtOldPassword').val()).length < 6) {
            $('#spanMKC').css("display", "");
            $('#spanMKC').text("Mật khẩu cũ phải có ít nhất 6 kí tự")
            $('#spanMKC').parent().removeClass("mg-bottom-20");
            $('#txtOldPassword').focus();
            return false;
        }
        else {
            $('#spanMKC').css("display", "none");
            $('#spanMKC').parent().addClass("mg-bottom-20");
        }
    }
    if ($('#txtNewPassword').val() == '') {
        $('#spanMKM').css("display", "");
        $('#spanMKM').text("Mật khẩu mới không được để trống");
        $('#spanMKM').parent().removeClass("mg-bottom-20");
        $('#txtNewPassword').focus();
        return false;
    }
    else {
        if ($.trim($('#txtNewPassword').val()).length < 6) {
            $('#spanMKM').css("display", "");
            $('#spanMKM').text("Mật khẩu mới phải có ít nhất 6 kí tự")
            $('#spanMKM').parent().removeClass("mg-bottom-20");
            $('#txtNewPassword').focus();
            return false;
        }
        else {
            $('#spanMKM').css("display", "none");
            $('#spanMKM').parent().addClass("mg-bottom-20");
        }
    }
    if ($('#txtConfirmPassword').val() == '') {
        $('#spanXNMK').css("display", "");
        $('#spanXNMK').text("Xác nhận mật khẩu không được để trống");
        $('#txtConfirmPassword').focus();
        return false;
    }
    else {
        if ($.trim($('#txtConfirmPassword').val()).length < 6) {
            $('#spanXNMK').css("display", "");
            $('#spanXNMK').text("Xác nhận mật khẩu phải có ít nhất 6 kí tự")
            $('#txtConfirmPassword').focus();
            return false;
        }
        else {
            if ($.trim($('#txtConfirmPassword').val()) != $.trim($('#txtNewPassword').val())) {
                $('#spanXNMK').css("display", "");
                $('#spanXNMK').text("Xác nhận mật khẩu không chính xác")
                $('#txtConfirmPassword').focus();
                return false;
            }
            else {
                $('#spanXNMK').css("display", "none");
            }
        }
    }
    $.ajax({
        dataType: 'json',
        url: '/Handler/UserHandler.ashx',
        data: { act: 'changepass', oldp: $('#txtOldPassword').val(), newp: $('#txtNewPassword').val() },
        type: "POST",
        success: function (data) {
            if (data.success == 0) {
                $('.pNotice').show();
                $('.pNotice p').html(data.mess);
                return false;
            } else {
                if (confirm(data.mess) + '. Bạn có muốn quay về trang cá nhân?') {
                    window.location.href = '/thanh-vien/quan-ly-tin-rao.htm';
                }
            }
        }
    });

};

/*product count*/

$(function () {

    //box_comment
    $(".box_404 .titletaps span").click(function (e) {
        $(".box_404 .active_taps").removeClass("active_taps");
        $(".box_404 #" + e.target.id).addClass("active_taps");
        $(".box_404 .listtaps .box").hide();
        $(".box_404 ." + e.target.id).fadeIn();

        return false;
    });


    var p_leng = $(".Project ul li").length;
    if (p_leng > 15) {
        for (var i = 15; i < p_leng; i++) {
            if (i > 14) {
                $(".Project ul li").eq(i).css("display", "none");
            }
        }
    }
    else
        $(".show_p").hide();

    $(".show_p").click(function () {
        $(this).hide();
        $(".Project ul li").css("display", "block");
    });
});
/*product count end*/