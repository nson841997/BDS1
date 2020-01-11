$(function () {
    $("#cboDistrictRegister").selectbox();
    GetCityRegister();
    eventEnter();
    $('#txtEmailRe').on("blur", function () {
        if ($(this).val() == "") {
            $(".err_txtEmailRe").removeClass("none");
            $(".err_txtEmailRe").text("Email không được bỏ trống.");
            $('.err_txtEmailRe').parent().removeClass("mg-bottom-20");
            return false;
        }
        else {
            if (!/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test($.trim($("#txtEmailRe").val()))) {
                $(".err_txtEmailRe").removeClass("none");
                $('.err_txtEmailRe').parent().removeClass("mg-bottom-20");
                $(".err_txtEmailRe").text("Email sai định dạng.");
                return false;
            }
            else {
                $(".err_txtEmailRe").addClass("none");
                $('.err_txtEmailRe').parent().addClass("mg-bottom-20");
            }
        }
    });
    $('#txtDidongRe').on('blur', function () {
        if ($(this).val() == "") {
            $(".err_txtDidongRe").removeClass("none");
            $(".err_txtDidongRe").text("Số điện thoại không được bỏ trống.");
            $('.err_txtDidongRe').parent().removeClass("mg-bottom-20");
            return false;
        }
        else {
            if (!/0[1-9][0-9]{8,12}/.test($.trim($("#txtDidongRe").val()))) {
                $(".err_txtDidongRe").removeClass("none");
                $('.err_txtDidongRe').parent().removeClass("mg-bottom-20");
                $(".err_txtDidongRe").text("Số điện thoại không đúng.");
                return false;
            }
            else {
                $(".err_txtDidongRe").addClass("none");
                $('.err_txtDidongRe').parent().addClass("mg-bottom-20");
            }
        }
    });
    $('#txtMatkhauRe').on('blur', function () {
        if ($.trim($("#txtMatkhauRe").val()) == '') {
            $(".err_txtMatkhauRe").removeClass("none");
            $('.err_txtMatkhauRe').parent().removeClass("mg-bottom-20");
            $(".err_txtMatkhauRe").text("Mật khẩu không được bỏ trống.");
            return false;
        } else {
            if ($.trim($('#txtMatkhauRe').val()).length < 6) {
                $(".err_txtMatkhauRe").removeClass("none");
                $('.err_txtMatkhauRe').parent().removeClass("mg-bottom-20");
                $(".err_txtMatkhauRe").text("Mật khẩu phải có ít nhất 6 ký tự");
                return false;
            } else {
                $(".err_txtMatkhauRe").addClass("none");
                $('.err_txtMatkhauRe').parent().addClass("mg-bottom-20");
            }
        }
    });
    $('#txtNhaplaimatkhauRe').on('blur', function () {
        if ($.trim($("#txtNhaplaimatkhauRe").val()) == '') {
            $(".err_txtNhaplaimatkhauRe").removeClass("none");
            $(".err_txtNhaplaimatkhauRe").text("Nhập lại mật khẩu không được bỏ trống.");
            $('.err_txtNhaplaimatkhauRe').parent().removeClass("mg-bottom-20");
            return false;
        } else {
            if ($.trim($("#txtNhaplaimatkhauRe").val()) != $.trim($("#txtMatkhauRe").val())) {
                $(".err_txtNhaplaimatkhauRe").removeClass("none");
                $(".err_txtNhaplaimatkhauRe").text("Nhập lại mật khẩu không đúng.");
                $('.err_txtNhaplaimatkhauRe').parent().removeClass("mg-bottom-20");
                return false;
            }
            else {
                $(".err_txtNhaplaimatkhauRe").addClass("none");
                $('.err_txtNhaplaimatkhauRe').parent().addClass("mg-bottom-20");
            }
        }
    });
    $('#txtcodeRe').on('blur', function () {
        if ($.trim($("#txtcodeRe").val()) == '') {
            $(".err_txtcodeRe").removeClass("none");
            $('.err_txtcodeRe').prev().removeClass("mg-bottom-20");
            $(".err_resultResponse").hide();
            return false;
        } else {
            $(".err_txtcodeRe").addClass("none");
            $('.err_txtcodeRe').prev().addClass("mg-bottom-20");
        }
    });
    $('#txtTendayduRe').on('blur', function () {
        if ($.trim($("#txtTendayduRe").val()) == "") {
            $('.err_txtTendayduRe').removeClass("none");
            $('#txtTendayduRe').focus();
            $('.err_txtTendayduRe').parent().removeClass("mg-bottom-20");
            return false;
        }
        else {
            $('.err_txtTendayduRe').parent().addClass("mg-bottom-20");
            $('.err_txtTendayduRe').addClass("none");
        }
    });
});
function GetCityRegister() {
    var d = $("#hddCityRegister").val(); var e;
    $.ajax({
        type: "POST", cache: false, url: "/Handler/SearchHandler.ashx?module=getcity",
        success: function (a) { e = $.parseJSON(a) }, timeout: 5000, complete: function () {
            var c = $("#cboCityRegister").html(); $.each(e, function (a, b) {
                if (d == b.CityCode) {
                    c += '<option value="' + b.CityCode + '" selected="selected">' + b.CityName + '</option>';
                    ChangeCityRegister(b.CityCode)
                } else c += '<option value="' + b.CityCode + '">' + b.CityName + '</option>'
            });
            $("#cboCityRegister").html(c)
            $("#cboCityRegister").selectbox("detach").selectbox();
        }
    })
}
function GetDistrictRegister(d, e) {
    $("#cboDistrictRegister").find("option:gt(0).").remove();
    var f; var g = $("#cboDistrictRegister").html(); if ($("body").data('GetDistrict_' + d) != null) {
        f = $("body").data('GetDistrict_' + d); $.each(f, function (a, b)
        { g += '<option value="' + b.DistrictId + '">' + b.DistrictName + '</option>' }); $("#cboDistrictRegister").html(g)
    } else {
        $.ajax({
            type: "POST", cache: false, url: "/Handler/SearchHandler.ashx?module=getdistrict",
            data: { "citycode": d }, success: function (a) {
                f = $.parseJSON(a);
                $("body").data('GetDistrict_' + d, f)
            }, timeout: 5000, complete: function () {
                var c = 0; $.each(f, function (a, b) {
                    if (e == b.DistrictId) {
                        g += '<option value="' + b.DistrictId + '" selected="selected">' + b.DistrictName + '</option>';
                        ChangeDistrictRegister(b.DistrictId)
                    } else g += '<option value="' + b.DistrictId + '">' + b.DistrictName + '</option>'
                }); $("#cboDistrictRegister").html(g);
                $("#cboDistrictRegister").selectbox("detach").selectbox();
            }
        })
    }
}

function ChangeCityRegister(a) {
    var e = $("#hddDistrictRegister").val();
    $("#hddDistrictRegister").val(-1);
    $("#spanDistrictRegister").html('Quận/Huyện');
    if (a != -1) { GetDistrictRegister(a, e) } $("#hddCityRegister").val(a);
    $("#spanCityRegister").html($("#cboCityRegister option[value='" + a + "']").text());
}
function ChangeDistrictRegister(a) {
    $("#hddDistrictRegister").val(a);
    $("#spanDistrictRegister").html($("#cboDistrictRegister option[value='" + a + "']").text());
}
function eventEnter() {
    $("input#txtTendayduRe,input#txtEmailRe,input#txtDidongRe,input#txtMatkhauRe,input#txtNhaplaimatkhauRe,input#txtcodeRe").keypress(function (event) {
        if (event.which == 13) {
            RegisterAjax();
        }
    });
}

function validate_register() {
    if ($.trim($("#txtTendayduRe").val()) == "")
    {
        $('.err_txtTendayduRe').removeClass("none");
        $('#txtTendayduRe').focus();
        $('.err_txtTendayduRe').parent().removeClass("mg-bottom-20");
        return false;
    }
    else
    {
        $('.err_txtTendayduRe').parent().addClass("mg-bottom-20");
        $('.err_txtTendayduRe').addClass("none");
    }
    if ($.trim($("#txtEmailRe").val()) == '') {
        $(".err_txtEmailRe").removeClass("none");
        $(".err_txtEmailRe").text("Email không được bỏ trống.");
        $('.err_txtEmailRe').parent().removeClass("mg-bottom-20");
        document.getElementById("txtEmailRe").focus();
        return false;
    } else {
        //var regexEmail = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
        if (!/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test($.trim($("#txtEmailRe").val()))) {
            $(".err_txtEmailRe").removeClass("none");
            $('.err_txtEmailRe').parent().removeClass("mg-bottom-20");
            $(".err_txtEmailRe").text("Email sai định dạng.");
            $('#txtEmail').focus();
            return false;
        }
        else {
            $(".err_txtEmailRe").addClass("none");
            $('.err_txtEmailRe').parent().addClass("mg-bottom-20");
        }
    }
    if ($.trim($('#txtDidongRe').val()) == '') {
        $(".err_txtDidongRe").removeClass("none");
        $(".err_txtDidongRe").text("Số điện thoại không được bỏ trống.");
        $('.err_txtDidongRe').parent().removeClass("mg-bottom-20");
        document.getElementById("txtDidongRe").focus();
        return false;
    } else {
        if (!/0[1-9][0-9]{8,12}/.test($.trim($("#txtDidongRe").val()))) {
            $(".err_txtDidongRe").removeClass("none");
            $('.err_txtDidongRe').parent().removeClass("mg-bottom-20");
            $(".err_txtDidongRe").text("Số điện thoại không đúng.");
            $('#txtDidongRe').focus();
            return false;
        }
        else {
            $(".err_txtDidongRe").addClass("none");
            $('.err_txtDidongRe').parent().addClass("mg-bottom-20");
        }
    }
    if ($.trim($("#txtMatkhauRe").val()) == '') {
        $(".err_txtMatkhauRe").removeClass("none");
        $('.err_txtMatkhauRe').parent().removeClass("mg-bottom-20");
        $(".err_txtMatkhauRe").text("Mật khẩu không được bỏ trống.");
        document.getElementById("txtMatkhauRe").focus();
        return false;
    } else {
        if ($.trim($('#txtMatkhauRe').val()).length < 6) {
            $(".err_txtMatkhauRe").removeClass("none");
            $('.err_txtMatkhauRe').parent().removeClass("mg-bottom-20");
            $(".err_txtMatkhauRe").text("Mật khẩu phải có ít nhất 6 ký tự");
            document.getElementById("txtMatkhauRe").focus();
            return false;
        } else {
            $(".err_txtMatkhauRe").addClass("none");
            $('.err_txtMatkhauRe').parent().addClass("mg-bottom-20");
        }
    }
    if ($.trim($("#txtNhaplaimatkhauRe").val()) == '') {
        $(".err_txtNhaplaimatkhauRe").removeClass("none");
        $(".err_txtNhaplaimatkhauRe").text("Nhập lại mật khẩu không được bỏ trống.");
        $('.err_txtNhaplaimatkhauRe').parent().removeClass("mg-bottom-20");
        document.getElementById("txtNhaplaimatkhauRe").focus();
        return false;
    } else {
        if ($.trim($("#txtNhaplaimatkhauRe").val()) != $.trim($("#txtMatkhauRe").val())) {
            $(".err_txtNhaplaimatkhauRe").removeClass("none");
            $(".err_txtNhaplaimatkhauRe").text("Nhập lại mật khẩu không đúng.");
            $('.err_txtNhaplaimatkhauRe').parent().removeClass("mg-bottom-20");
            document.getElementById("txtNhaplaimatkhauRe").focus();
            return false;
        }
        else {
            $(".err_txtNhaplaimatkhauRe").addClass("none");
            $('.err_txtNhaplaimatkhauRe').parent().addClass("mg-bottom-20");
        }
    }
    if ($.trim($("#txtcodeRe").val()) == '') {
        $(".err_txtcodeRe").removeClass("none");
        $('.err_txtcodeRe').prev().removeClass("mg-bottom-20");
        document.getElementById("txtcodeRe").focus();
        return false;
    } else {
        $(".err_txtcodeRe").addClass("none");
        $('.err_txtcodeRe').prev().addClass("mg-bottom-20");
    }
    return true;
}

function RegisterAjax() {
    $(".err_txtcodeRe").addClass("none");
    $(".err_resultResponse").hide();
    if (!validate_register()) return false;
    var txtTendayduRe = $.trim($('#txtTendayduRe').val());
    var txtEmailRe = $.trim($('#txtEmailRe').val());
    var txtDidongRe = $.trim($('#txtDidongRe').val());
    var txtMatkhauRe = $.trim($('#txtMatkhauRe').val());
    var txtNhaplaimatkhauRe = $.trim($('#txtNhaplaimatkhauRe').val());
    var cboCityRegister = $.trim($('#cboCityRegister').val());
    var cboDistrictRegister = $.trim($('#cboDistrictRegister').val());
    var txtcodeRe = $.trim($('#txtcodeRe').val());
    var url = '/Handler/Register.ashx';
    var data = {
        act: "Register",
        txtTendaydu: txtTendayduRe,
        txtEmail: txtEmailRe,
        txtDidong: txtDidongRe,
        txtMatkhau: txtMatkhauRe,
        txtNhaplaimatkhau: txtNhaplaimatkhauRe,
        cboCityRegister: cboCityRegister,
        cboDistrictRegister: cboDistrictRegister,
        txtcode: txtcodeRe,
    };
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function (GetValue) {
            
            if (GetValue == "2") {
                $(".err_resultResponse").html("Email này đã có người sử dụng. Bạn vui lòng chọn email khác.").show();
                $('#txtEmailRe').focus();
            }
            else if (GetValue == "1") {
                // "Chúc mừng bạn đã đăng ký thành công!"
                $('#fancybox-overlay').trigger("click");
                $('body').removeClass("no-scroll");
                $('#notification').removeClass("none");
            }
            else if (GetValue == "3") {
                $(".err_resultResponse").html("Mã đăng ký không chính xác !").show();
                $('#txtcodeRe').val("");
                $('#txtcodeRe').focus();
            }
            else if (GetValue.search("Email này dùng để đăng nhập") > -1) {
                alert(GetValue);
                $('#txtEmailRe,#txtcodeRe').val("");
                $('#txtEmailRe').focus();
            }
            else {
                $(".err_resultResponse").html("Có lỗi xảy ra. Vui lòng thử lại sau !").show();
            }

            $(".fa-refresh").click();
        }
    });
}




