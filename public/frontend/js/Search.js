
$(document).ready(function () {

    //$('.search ul li select').selectbox();
    var productType = $('#hddType').val();
    $('#cboType').val(productType);
    LoadType(productType)
    $("#cboDistrict, #cboStreet, #cboProject, #cboWard").selectbox();
    GetCity($('#hddCity').val());

    $(".divExtend").hide();

    $("#lblExtend").click(function () {
        if ($(".divExtend").is(':visible')) {
            $(".divExtend").hide();
            $("#lblExtend").html("Tìm kiếm nâng cao");

            $("#cboWard").val("");
            $("#hddWard").val('-1');

            $("#cboStreet").val("");
            $("#hddStreet").val('-1');

            $("#cboProject").val("");
            $("#hddProject").val('-1');

            $("#cboRoom").val("");
            $("#hddRoom").val('-1');

            $("#cboDirection").val("");
            $("#hddDirection").val('-1');
        } else {
            $(".divExtend").show();
            $("#lblExtend").html("Thu gọn tìm kiếm");

        }
    });
});
function ChangeType(value) {
    $('ul.tabs-search.home-search li').removeClass('active');
    if (value == 38) {
        $('#ban').addClass('active');
    }
    else {
        $('#chothue').addClass('active');
    }
    $('#hddType').val(value);
    $('#hddCate').val(-1);
    ChangeLoaigiaodich(value);


}
function ChangeProduct(value) {
    if (value == 38) {
        $('#pr_hot').addClass('active');
        $('#pr_top').removeClass('active');
        $('#prTop').css('display', 'none');
        $('#prHost').css('display', 'block');
    }
    else {
        $('#pr_top').addClass('active');
        $('#pr_hot').removeClass('active');
        $('#prHost').css('display', 'none');
        $('#prTop').css('display', 'block');
    }
}
function ChangeNews(value) {
    $('ul.title-tabs.news-home li').removeClass('active');
    if (value == 38) {
        $('#pr_project').addClass('active');
        $('#prConsult').css('display', 'none');
        $('#prProject').css('display', 'block');
    }
    else {
        $('#pr_consult').addClass('active');
        $('#prProject').css('display', 'none');
        $('#prConsult').css('display', 'block');
    }
}
function LoadType(value) {
    $('.type_bds span').removeClass('active');
    if (value == 38) {
        $('#ban').addClass('active');
    }
    else {
        $('#chothue').addClass('active');
    }
    ChangeLoaigiaodich(value);
}
function ChangeLoaigiaodich(productType) {
    //ChangeValue('Type', productType);
    $("#cboType").val(productType);
    var cateValue = $('#hddCate').val();
    GetLoainhadat(productType, cateValue);
    var priceValue = $('#hddPrice').val();
    if (productType == 49)
        GetPrice(2, priceValue);
    else
        GetPrice(1, priceValue);
    var directionValue = $('#hddDirection').val();
    GetDirection(1, directionValue);
    var roomValue = $('#hddRoom').val();
    GetRoom(1, roomValue);
    var areaValue = $('#hddArea').val();
    GetArea(1, areaValue);
}

function ChangeValue(Element, Id) {
    //alert(Element + ' ' + Id);
    $("#hdd" + Element).val(Id);
}

function GetLoaigiaodich(curentProductType) {
    var html = $("#cboLoaiGiaoDich").html();
    if (curentProductType == 38) {
        html += '<option value="38" selected="selected">Nhà đất bán</option>';
        ChangeLoaigiaodich(38);
    }
    else
        html += '<option value="38">Nhà đất bán</option>';
    if (curentProductType == 49) {
        html += '<option value="49" selected="selected">Nhà đất cho thuê</option>';
        ChangeLoaigiaodich(49);
    }
    else
        html += '<option value="49">Nhà đất cho thuê</option>';
    $("#cboLoaiGiaoDich").html(html);
}

function GetLoainhadat(parentId, loainhadat) {
    var data = "";
    if (parentId == 38) {
        if (loainhadat == -1) {
            data = "<option value=\"-1\" selected = 'selected'>Loại nhà đất</option>";
        } else {
            data = "<option value=\"-1\">Loại nhà đất</option>";
        }
        if (loainhadat == 324) {
            data += "<option value=\"324\" selected = 'selected'>- Bán căn hộ chung cư</option>";
            isSelected = true;
        } else {
            data += "<option value=\"324\">- Bán căn hộ chung cư</option>";
        }
        if (loainhadat == 362) {
            data += "<option value=\"362\" selected = 'selected'>- Tất cả các loại nhà bán</option>";
            isSelected = true;
        } else {
            data += "<option value=\"362\">- Tất cả các loại nhà bán</option>";
        }
        if (loainhadat == 41) {
            data += "<option value=\"41\" selected = 'selected'>&nbsp;&nbsp;&nbsp;&nbsp;+ Bán nhà riêng</option>";
            isSelected = true;
        } else {
            data += "<option value=\"41\">&nbsp;&nbsp;&nbsp;&nbsp;+ Bán nhà riêng</option>";
        }
        if (loainhadat == 325) {
            data += "<option value=\"325\" selected = 'selected'>&nbsp;&nbsp;&nbsp;&nbsp;+ Bán nhà biệt thự, liền kề</option>";
            isSelected = true;
        } else {
            data += "<option value=\"325\">&nbsp;&nbsp;&nbsp;&nbsp;+ Bán nhà biệt thự, liền kề</option>";
        }
        if (loainhadat == 163) {
            data += "<option value=\"163\" selected = 'selected'>&nbsp;&nbsp;&nbsp;&nbsp;+ Bán nhà mặt phố</option>";
            isSelected = true;
        } else {
            data += "<option value=\"163\">&nbsp;&nbsp;&nbsp;&nbsp;+ Bán nhà mặt phố</option>";
        }
        if (loainhadat == 361) {
            data += "<option value=\"361\" selected = 'selected'>- Tất cả các loại đất bán</option>";
            isSelected = true;
        } else {
            data += "<option value=\"361\">- Tất cả các loại đất bán</option>";
        }
        if (loainhadat == 40) {
            data += "<option value=\"40\" selected = 'selected'>&nbsp;&nbsp;&nbsp;&nbsp;+ Bán đất nền dự án</option>";
            isSelected = true;
        } else {
            data += "<option value=\"40\">&nbsp;&nbsp;&nbsp;&nbsp;+ Bán đất nền dự án</option>";
        }
        if (loainhadat == 283) {
            data += "<option value=\"283\" selected = 'selected'>&nbsp;&nbsp;&nbsp;&nbsp;+ Bán đất</option>";
            isSelected = true;
        } else {
            data += "<option value=\"283\">&nbsp;&nbsp;&nbsp;&nbsp;+ Bán đất</option>";
        }
        if (loainhadat == 44) {
            data += "<option value=\"44\" selected = 'selected'>- Bán trang trại, khu nghỉ dưỡng</option>";
            isSelected = true;
        } else {
            data += "<option value=\"44\">- Bán trang trại, khu nghỉ dưỡng</option>";
        }
        if (loainhadat == 45) {
            data += "<option value=\"45\" selected = 'selected'>- Bán kho, nhà xưởng</option>";
            isSelected = true;
        } else {
            data += "<option value=\"45\">- Bán kho, nhà xưởng</option>";
        }
        if (loainhadat == 48) {
            data += "<option value=\"48\" selected = 'selected'>- Bán loại bất động sản khác</option>";
            isSelected = true;
        } else {
            data += "<option value=\"48\">- Bán loại bất động sản khác</option>";
        }
    }

    if (parentId == 49) {
        if (loainhadat == -1) {
            data = "<option value=\"-1\" selected = 'selected'>Loại nhà đất</option>";
        } else {
            data = "<option value=\"-1\">Loại nhà đất</option>";
        }
        if (loainhadat == 326) {
            data += "<option value=\"326\" selected = 'selected'>Cho thuê căn hộ chung cư</option>";
            isSelected = true;
        } else {
            data += "<option value=\"326\">Cho thuê căn hộ chung cư</option>";
        }
        if (loainhadat == 52) {
            data += "<option value=\"52\" selected = 'selected'>Cho thuê nhà riêng</option>";
            isSelected = true;
        } else {
            data += "<option value=\"52\">Cho thuê nhà riêng</option>";
        }
        if (loainhadat == 51) {
            data += "<option value=\"51\" selected = 'selected'>Cho thuê nhà mặt phố</option>";
            isSelected = true;
        } else {
            data += "<option value=\"51\">Cho thuê nhà mặt phố</option>";
        }
        if (loainhadat == 57) {
            data += "<option value=\"57\" selected = 'selected'>Cho thuê nhà trọ, phòng trọ</option>";
            isSelected = true;
        } else {
            data += "<option value=\"57\">Cho thuê nhà trọ, phòng trọ</option>";
        }
        if (loainhadat == 50) {
            data += "<option value=\"50\" selected = 'selected'>Cho thuê văn phòng</option>";
            isSelected = true;
        } else {
            data += "<option value=\"50\">Cho thuê văn phòng</option>";
        }
        if (loainhadat == 55) {
            data += "<option value=\"55\" selected = 'selected'>Cho thuê cửa hàng, ki ốt</option>";
            isSelected = true;
        } else {
            data += "<option value=\"55\">Cho thuê cửa hàng, ki ốt</option>";
        }
        if (loainhadat == 53) {
            data += "<option value=\"53\" selected = 'selected' >Cho thuê kho, nhà xưởng, đất</option>";
            isSelected = true;
        } else {
            data += "<option value=\"53\">Cho thuê kho, nhà xưởng, đất</option>";
        }
        if (loainhadat == 59) {
            data += "<option value=\"59\" selected = 'selected'>Cho thuê bất động sản khác</option>";
            isSelected = true;
        } else {
            data += "<option value=\"59\">Cho thuê bất động sản khác</option>";
        }
    }
    $("#cboCate").html(data);
    $("#cboCate").selectbox("detach").selectbox();
    //$("#hddCate").val(loainhadat);
}

//Hàm load tỉnh, thành phố
function GetCity(curentCityCode) {
    var likeReturn;
    $.ajax({
        type: "POST",
        cache: false,
        url: "/Handler/SearchHandler.ashx?module=getcity",
        success: function (html) {
            likeReturn = $.parseJSON(html);
        },
        timeout: 5000,
        complete: function () {
            var html = $("#cboCity").html();
            $.each(likeReturn, function (index, value) {
                if (curentCityCode == value.CityCode) {
                    html += '<option value="' + value.CityCode + '" selected="selected">' + value.CityName + '</option>';
                    GetDistrict(value.CityCode, $('#hddDistrict').val());
                }
                else
                    html += '<option value="' + value.CityCode + '">' + value.CityName + '</option>';
            });
            $("#cboCity").html(html);
            $("#cboCity").selectbox("detach").selectbox();
        }
    });
}
function ChangeCity(cityCode) {
    ChangeValue('District', -1);
    ChangeValue('Ward', -1);
    ChangeValue('Street', -1);
    ChangeValue('Project', -1);
    GetDistrict(cityCode, $('#hddDistrict').val());
}

function GetDistrict(Citycode, curentDistrict) {
    $("#cboDistrict").find("option:gt(0).").remove();
    if (Citycode != "-1") {
        var likeReturn;
        var html = $("#cboDistrict").html();
        if ($("body").data('GetDistrict_' + Citycode) != null) {
            likeReturn = $("body").data('GetDistrict_' + Citycode);
            $.each(likeReturn, function (index, value) {
                if (curentDistrict == value.DistrictId) {
                    html += '<option value="' + value.DistrictId + '" selected="selected">' + value.DistrictName + '</option>';
                }
                else
                    html += '<option value="' + value.DistrictId + '">' + value.DistrictName + '</option>';
            });
            $("#cboDistrict").html(html);
            $("#cboDistrict").selectbox("detach").selectbox();
            //ChangeQuanhuyen(curentDistrict);
            LoadChangeDistrict(curentDistrict);

        }
        else {
            $.ajax({
                type: "POST",
                cache: false,
                url: "/Handler/SearchHandler.ashx?module=getdistrict",
                data: { "citycode": Citycode },
                success: function (html) {
                    likeReturn = $.parseJSON(html);
                    $("body").data('GetDistrict_' + Citycode, likeReturn);
                },
                timeout: 5000,
                complete: function () {
                    $.each(likeReturn, function (index, value) {
                        if (curentDistrict == value.DistrictId) {
                            html += '<option value="' + value.DistrictId + '" selected="selected">' + value.DistrictName + '</option>';
                        }
                        else
                            html += '<option value="' + value.DistrictId + '">' + value.DistrictName + '</option>';
                    });
                    $("#cboDistrict").html(html);
                    $("#cboDistrict").selectbox("detach").selectbox();
                    //ChangeQuanhuyen(curentDistrict);
                    LoadChangeDistrict(curentDistrict);
                }
            });
        }
    }
    else
        $("#cboDistrict").selectbox("detach").selectbox();

}
function ChangeQuanhuyen(districtId) {

    var wardValue = $('#hddWard').val();
    var streetValue = $('#hddStreet').val();
    var projectValue = $('#hddProject').val();

    ChangeValue('Ward', -1);
    ChangeValue('Street', -1);
    ChangeValue('Project', -1);

    GetWard(districtId, wardValue);
    GetStreets(districtId, streetValue);
    GetProject(districtId, projectValue);
    //$("#hddDistrict").val(districtId);
}

function LoadChangeDistrict(districtId) {

    var wardValue = $('#hddWard').val();
    var streetValue = $('#hddStreet').val();
    var projectValue = $('#hddProject').val();
    GetWard(districtId, wardValue);
    GetStreets(districtId, streetValue);
    GetProject(districtId, projectValue);
}

function GetDirection(idx, curentDirection) {
    $("#cboDirection").find("option:gt(0).").remove();
    if (idx > 0) {
        var likeReturn;
        var html = $("#cboDirection").html();
        idx = idx - 1;
        if (idx > 1)
            idx = 1;
        if ($("body").data('GetDirection_' + idx) != null) {
            likeReturn = $("body").data('GetDirection_' + idx);
            $.each(likeReturn, function (index, value) {
                if (curentDirection == value.Name) {
                    html += '<option value="' + value.Name + '" selected="selected">' + value.Value + '</option>';
                }
                else
                    html += '<option value="' + value.Name + '">' + value.Value + '</option>';
            });
            $("#cboDirection").html(html);
            $("#cboDirection").selectbox("detach").selectbox();
        }
        else {
            $.ajax({
                type: "POST",
                cache: false,
                url: "/Handler/SearchHandler.ashx?module=getdirection",
                success: function (html) {
                    likeReturn = $.parseJSON(html)[idx];
                    $("body").data('GetDirection_' + idx, likeReturn);
                },
                timeout: 5000,
                complete: function () {
                    var html = $("#cboDirection").html();
                    if (likeReturn != null) {
                        $.each(likeReturn, function (index, value) {
                            if (curentDirection == value.Name) {
                                html += '<option value="' + value.Name + '" selected="selected">' + value.Value + '</option>';
                            }
                            else
                                html += '<option value="' + value.Name + '">' + value.Value + '</option>';
                        });
                    }
                    $("#cboDirection").html(html);
                    $("#cboDirection").selectbox("detach").selectbox();
                }
            });
        }
    }
}

function GetPrice(idx, curentPrice) {
    $("#cboPrice").find("option:gt(0).").remove();
    if (idx > 0) {
        var likeReturn;
        var html = $("#cboPrice").html();
        idx = idx - 1;
        if (idx > 1)
            idx = 1;
        if ($("body").data('GetPrice_' + idx) != null) {
            likeReturn = $("body").data('GetPrice_' + idx);
            $.each(likeReturn, function (index, value) {
                if (curentPrice == value.Name) {
                    html += '<option value="' + value.Name + '" selected="selected">' + value.Value + '</option>';
                }
                else
                    html += '<option value="' + value.Name + '">' + value.Value + '</option>';
            });
            $("#cboPrice").html(html);
            //$("#cboPrice").selectbox("detach").selectbox("attach");
            $("#cboPrice").selectbox("detach").selectbox();
        }
        else {
            $.ajax({
                type: "POST",
                cache: false,
                url: "/Handler/SearchHandler.ashx?module=getprice",
                success: function (html) {
                    likeReturn = $.parseJSON(html)[idx];
                    $("body").data('GetPrice_' + idx, likeReturn);
                },
                timeout: 5000,
                complete: function () {
                    if (likeReturn != null) {
                        $.each(likeReturn, function (index, value) {
                            if (curentPrice == value.Name) {
                                html += '<option value="' + value.Name + '" selected="selected">' + value.Value + '</option>';
                            }
                            else
                                html += '<option value="' + value.Name + '">' + value.Value + '</option>';
                        });
                    }
                    $("#cboPrice").html(html);
                    //$("#cboPrice").selectbox("detach").selectbox("attach");
                    $("#cboPrice").selectbox("detach").selectbox();
                }
            });
        }
    }
}

function GetArea(idx, curentArea) {
    $("#cboArea").find("option:gt(0).").remove();
    if (idx > 0) {
        var likeReturn;
        idx = idx - 1;
        if (idx > 1)
            idx = 1;
        var html = $("#cboArea").html();
        if ($("body").data('GetArea_' + idx) != null) {
            likeReturn = $("body").data('GetArea_' + idx);
            $.each(likeReturn, function (index, value) {
                if (curentArea == value.Name) {
                    html += '<option value="' + value.Name + '" selected="selected">' + value.Value + '</option>';
                }
                else
                    html += '<option value="' + value.Name + '">' + value.Value + '</option>';
            });
            $("#cboArea").html(html);
            $("#cboArea").selectbox("detach").selectbox();
        }
        else {
            $.ajax({
                type: "POST",
                cache: false,
                url: "/Handler/SearchHandler.ashx?module=getarea",
                success: function (html) {
                    likeReturn = $.parseJSON(html)[idx];
                    $("body").data('GetArea_' + idx, likeReturn);
                },
                timeout: 5000,
                complete: function () {
                    if (likeReturn != null) {
                        $.each(likeReturn, function (index, value) {
                            if (curentArea == value.Name) {
                                html += '<option value="' + value.Name + '" selected="selected">' + value.Value + '</option>';
                            }
                            else
                                html += '<option value="' + value.Name + '">' + value.Value + '</option>';
                        });
                    }
                    $("#cboArea").html(html);
                    $("#cboArea").selectbox("detach").selectbox();
                }
            });
        }
    }
}

function GetRoom(idx, curentRoom) {
    $("#cboRoom").find("option:gt(0).").remove();
    if (idx > 0) {
        var likeReturn;
        idx = idx - 1;
        if (idx > 1)
            idx = 1;
        var html = $("#cboRoom").html();
        if ($("body").data('GetRoom_' + idx) != null) {
            likeReturn = $("body").data('GetRoom_' + idx);
            $.each(likeReturn, function (index, value) {
                if ((curentRoom == value.Name) || (curentRoom > 5 && value.Name == 5)) {
                    if (curentRoom < 6) {
                        html += '<option value="' + value.Name + '" selected="selected">' + value.Value + '</option>';
                    } else {
                        html += '<option value="5" selected="selected">5+</option>';
                        curentRoom = 5;
                    }
                }
                else
                    html += '<option value="' + value.Name + '">' + value.Value + '</option>';
            });
            $("#cboRoom").html(html);
            $("#cboRoom").selectbox("detach").selectbox();
        }
        else {
            $.ajax({
                type: "POST",
                cache: false,
                url: "/Handler/SearchHandler.ashx?module=getroom",
                success: function (html) {
                    likeReturn = $.parseJSON(html)[idx];
                    $("body").data('GetRoom_' + idx, likeReturn);
                },
                timeout: 5000,
                complete: function () {

                    if (likeReturn != null) {
                        $.each(likeReturn, function (index, value) {
                            if ((curentRoom == value.Name) || (curentRoom > 5 && value.Name == 5)) {
                                if (curentRoom < 6) {
                                    html += '<option value="' + value.Name + '" selected="selected">' + value.Value + '</option>';
                                } else {
                                    html += '<option value="5" selected="selected">5+</option>';
                                    curentRoom = 5;
                                }
                            }
                            else
                                html += '<option value="' + value.Name + '">' + value.Value + '</option>';
                        });
                    }
                    $("#cboRoom").html(html);
                    $("#cboRoom").selectbox("detach").selectbox();
                }
            });
        }
    }
    else
        $("#cboRoom").selectbox("detach").selectbox();
}


function GetStreets(districtId, curentStreet) {
    $("#cboStreet").find("option:gt(0).").remove();
    if (districtId >= 0) {
        var html = $("#cboStreet").html();
        var likeReturn;
        if ($("body").data('GetStreets_' + districtId) != null) {
            likeReturn = $("body").data('GetStreets_' + districtId);
            $.each(likeReturn, function (index, value) {
                if (curentStreet == value.StreetId) {
                    html += '<option value="' + value.StreetId + '" selected="selected">' + value.StreetName + '</option>';
                }
                else
                    html += '<option value="' + value.StreetId + '">' + value.StreetName + '</option>';
            });
            $("#cboStreet").html(html);
            $("#cboStreet").selectbox("detach").selectbox();
        }
        else {
            $.ajax({
                type: "POST",
                cache: false,
                url: "/Handler/SearchHandler.ashx?module=getstreet",
                data: { "districtId": districtId },
                success: function (html) {
                    if (html.length > 0) {
                        likeReturn = $.parseJSON(html);
                        $("body").data('GetStreets_' + districtId, likeReturn);
                    }
                },
                timeout: 5000,
                complete: function () {
                    if (likeReturn != null) {
                        $.each(likeReturn, function (index, value) {
                            if (curentStreet == value.StreetId) {
                                html += '<option value="' + value.StreetId + '" selected="selected">' + value.StreetName + '</option>';
                            }
                            else
                                html += '<option value="' + value.StreetId + '">' + value.StreetName + '</option>';
                        });
                        $("#cboStreet").html(html);
                        $("#cboStreet").selectbox("detach").selectbox();
                    }
                }
            });
        }
    }
    else
        $("#cboStreet").selectbox("detach").selectbox();
}
//Hàm load tỉnh phường xã
function GetWard(districtId, curentWard) {
    $("#cboWard").find("option:gt(0).").remove();
    if (districtId >= 0) {
        var html = $("#cboWard").html();
        var likeReturn;
        if ($("body").data('GetWard_' + districtId) != null) {
            likeReturn = $("body").data('GetWard_' + districtId);
            $.each(likeReturn, function (index, value) {
                if (curentWard == value.WardId) {
                    html += '<option value="' + value.WardId + '" selected="selected">' + value.WardName + '</option>';
                }
                else
                    html += '<option value="' + value.WardId + '">' + value.WardName + '</option>';
            });
            $("#cboWard").html(html);
            $("#cboWard").selectbox("detach").selectbox();
        }
        else {
            $.ajax({
                type: "POST",
                cache: false,
                url: "/Handler/SearchHandler.ashx?module=getward",
                data: { "districtId": districtId },
                success: function (html) {
                    if (html.length > 0) {
                        likeReturn = $.parseJSON(html);
                        $("body").data('GetWard_' + districtId, likeReturn);
                    }
                },
                timeout: 5000,
                complete: function () {
                    if (likeReturn != null) {
                        $.each(likeReturn, function (index, value) {
                            if (curentWard == value.WardId) {
                                html += '<option value="' + value.WardId + '" selected="selected">' + value.WardName + '</option>';
                            }
                            else
                                html += '<option value="' + value.WardId + '">' + value.WardName + '</option>';
                        });
                        $("#cboWard").html(html);
                        $("#cboWard").selectbox("detach").selectbox();
                    }
                }
            });
        }
    }
    else {
        $("#cboWard").selectbox("detach").selectbox();
    }
}
//Hàm load dự án
function GetProject(districtId, curentProject) {

    $("#cboProject").find("option:gt(0).").remove();
    if (districtId >= 0) {
        var likeReturn;
        var html = $("#cboProject").html();
        if ($("body").data('GetProject_' + districtId) != null) {
            likeReturn = $("body").data('GetProject_' + districtId);
            $.each(likeReturn, function (index, value) {
                if (curentProject == value.ProjectId) {
                    html += '<option value="' + value.ProjectId + '" selected="selected">' + value.ShortName + '</option>';
                }
                else
                    html += '<option value="' + value.ProjectId + '">' + value.ShortName + '</option>';
            });
            $("#cboProject").html(html);
            $("#cboProject").selectbox("detach").selectbox();
        }
        else {
            $.ajax({
                type: "POST",
                cache: false,
                url: "/Handler/SearchHandler.ashx?module=getproject",
                data: { "districtId": districtId },
                success: function (html) {
                    if (html.length > 0) {
                        likeReturn = $.parseJSON(html);
                        $("body").data('GetProject_' + districtId, likeReturn);
                    }
                },
                timeout: 5000,
                complete: function () {
                    if (likeReturn != null) {
                        $.each(likeReturn, function (index, value) {
                            if (curentProject == value.ProjectId) {
                                html += '<option value="' + value.ProjectId + '" selected="selected">' + value.ShortName + '</option>';
                            }
                            else
                                html += '<option value="' + value.ProjectId + '">' + value.ShortName + '</option>';
                        });
                        $("#cboProject").html(html);
                        $("#cboProject").selectbox("detach").selectbox();
                    }
                }
            });
        }
    }
    else {
        $("#cboProject").selectbox("detach").selectbox();
    }
}

function advancedSearch() {
    $('#advanced').toggle();
    if ($('#tim').text() == 'Tìm nâng cao')
        $('#tim').text('Bỏ tìm nâng cao');
    else
        $('#tim').text('Tìm nâng cao');
}

/*gọi ý tìm kiếm star*/

LocationControl = function (opts) {

};


LocationControl.prototype.ChangeLocation = function (opt) {
    if (opt.city != null) {
        $('#cboCity').val(opt.city);
        $("#cboCity").selectbox("detach").selectbox();
        $('#hddCity').val(opt.city);


        if (opt.distr != null) {
            $('#hddDistrict').val(opt.distr);
        }

        if (opt.wardid != null) {
            $('#hddWard').val(opt.wardid);
        }

        if (opt.streetid != null) {
            $('#hddStreet').val(opt.streetid);
        }

        if (opt.projid != null) {
            $('#hddProject').val(opt.projid);

        }

        if (opt.city != -1) {
            LoadDistrict(opt.city);
        }
    }
}


$(function () {

    AutoLoadData();//load dữ liệu ngầm
    var cnt = 0;
    $(".wr_textsearch").keyup(function (event) {
        if (event.keyCode == 13 && cnt > 0) {
            cnt = 0;
            $("#btnSearch").click();
        }
        else if (event.keyCode == 13) {
            cnt++;
        }
    });

    var toolTipPosition = window.location.pathname == '/' ? 'right' : 'left';


    $.ui.autocomplete.prototype._renderItem = function (ul, item) {
        var term = this.term.split(' ');
        var t = item.label.split(' ');
        var label = '';

        var reg = new RegExp("(~|!|@|#|\\$|%|\\^|&|\\*|\\(|\\)|_|\\+|\\{|\\}|\\||\"|:|\\?|>|<|,|\\.|\\/|;|'|\\\|[|]|=|-)", "gi");

        for (var j = 0; j < t.length; j++) {

            if (label.length > 0)
                label += ' ';

            var word = t[j];

            for (var i = 0; i < term.length; i++) {

                if (UnicodeToKoDau(term[i].replace(reg, "")).toLowerCase() == UnicodeToKoDau(word.replace(reg, "")).toLowerCase()) {
                    word = '<b>' + word + '</b>';
                    break;
                }
            }

            label += word;
        }

        if ($('#hddType').val() == 38) {
            return $("<li></li>").data("item.autocomplete", item).append("<a>" + label + " <font style='color:#feb054;font-size:11px;font-weight:700'>(" + item.id.ts + " tin)</font>" + "</a>").appendTo(ul);
        } else {
            return $("<li></li>").data("item.autocomplete", item).append("<a>" + label + " <font style='color:#feb054;font-size:11px;font-weight:700'>(" + item.id.tr + " tin)</font>" + "</a>").appendTo(ul);
        }
    };

    //___isIE = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
    //if (___isIE) {



    //    var defaultText = $('#txtAutoComplete').attr('placeholder');
    //    $('#txtAutoComplete').css('color', '#777');
    //    $('#txtAutoComplete').css('height', '19px');
    //    $('#txtAutoComplete').css('padding-top', '2px');
    //    $('#txtAutoComplete').css('padding-bottom', '2px');
    //    $('#txtAutoComplete').css('line-height', '18px');


    //    var txtautocomplete = $('#txtAutoComplete').val();
    //    if (txtautocomplete.length == 0)
    //        $('#txtAutoComplete').val(defaultText);

    //    $('#txtAutoComplete').blur(function () {
    //        if ($('#txtAutoComplete').val().length == 0)
    //            $('#txtAutoComplete').val(defaultText);
    //    });

    //    $('#txtAutoComplete').focus(function () {

    //        if ($('#txtAutoComplete').val() == defaultText)
    //            $('#txtAutoComplete').val('');
    //    });

    //}
    $('#txtAutoComplete').click(function () {
        if ($(this).val().length == 0) {
            $(".box_suggest").show();
        }
    });
    $('#txtAutoComplete').blur(function () {
        $(".box_suggest").hide();
    });
    $('#txtAutoComplete').mouseout(function () {
        $(".box_suggest").hide();
    });
    $('.box_suggest').mouseover(function () {
        $(".box_suggest").show();
    });
    $('.box_suggest').mouseout(function () {
        $(".box_suggest").hide();
    });

    $('#txtAutoComplete').keydown(function (evt) {
        $(".box_suggest").hide();
        return evt.keyCode != 13;
    });

    $('#txtAutoComplete').autocomplete({
        source: function (request, response) {
            var term = UnicodeToKoDau(request.term);

            var cache = null;
            if (JSON != undefined && localStorage != undefined) {
                cache = JSON.parse(localStorage.getItem('suggestion-cache'));
            }

            if (cache == null) {
                cache = [{}];
            }

            var data = cache[term];

            if (data != null) {
                response(data);
                return;
            } else {
                var urlRequest = '';
                if ($('#hddType').val() == 38) {
                    urlRequest = 'http://s1.thongtinnhadat.com.vn/';
                } else {
                    urlRequest = 'http://s2.thongtinnhadat.com.vn/';
                }

                cnt = 0;
                $.ajax({
                    url: urlRequest + term,
                    success: function (data) {
                        cache[term] = data;

                        if (localStorage != undefined) {
                            localStorage.setItem('suggestion-cache', JSON.stringify(cache));
                        }

                        response(data);
                    }
                });
            }

        },
        minLength: 2,
        select: function (event, ui) {
            var result = ui.item.id;
            var urlRequest = '';
            if ($('#hddType').val() == 38) {
                urlRequest = 'http://s1.thongtinnhadat.com.vn/';
            } else {
                urlRequest = 'http://s2.thongtinnhadat.com.vn/';
            }
            LocationControl.prototype.ChangeLocation(result);

            $.post(urlRequest + result.id);
        }
    }).on('click', function () {
        if (document.hasFocus()) {
            $('ul.ui-autocomplete').hide();
        }
    });
});

var uniChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZàáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆĐÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴÂĂĐÔƠƯ1234567890~!@#$%^&*()_+=-{}][|\":;'\\/.,<>? \n\r\t";
var KoDauChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZaaaaaaaaaaaaaaaaaeeeeeeeeeeediiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAAEEEEEEEEEEEDIIIOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYAADOOU1234567890~!@#$%^&*()_+=-{}][|\":;'\\/.,<>? \n\r\t";
var Alphabe = "qwertyuioplkjhgfdsazxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM";

function UnicodeToKoDau(s) {
    var retVal = '';
    if (s == null)
        return retVal;
    var pos;
    var c = 'a';
    for (var i = 0; i < s.length; i++) {
        if (c == ' ' && s[i] == ' ')
            continue;
        c = s[i];
        pos = uniChars.indexOf(c);
        if (pos >= 0)
            retVal += KoDauChars[pos];
    }
    return retVal;
}


function LoadDistrict(citycode) {
    var quanhuyen = $("#hddDistrict").val();
    $("#cboDistrict").find("option:gt(0).").remove();
    var likeReturn;
    var html = $("#cboDistrict").html();
    if ($("body").data('GetDistrict_' + citycode) != null) {
        likeReturn = $("body").data('GetDistrict_' + citycode);
        $.each(likeReturn, function (index, value) {
            if (quanhuyen == value.DistrictId) {
                html += '<option value="' + value.DistrictId + '" selected="selected">' + value.DistrictName + '</option>';
                $("#spanDistrict").html(value.DistrictName);
                ChangeDistrict(value.DistrictId);
            } else
                html += '<option value="' + value.DistrictId + '">' + value.DistrictName + '</option>';
        });
        $("#cboDistrict").html(html);
        $("#cboDistrict").selectbox("detach").selectbox();
    }
    else {
        $.ajax({
            type: "POST",
            cache: false,
            url: "/Handler/SearchHandler.ashx?module=getdistrict",
            data: { "citycode": citycode },
            success: function (html) {
                likeReturn = $.parseJSON(html);
                $("body").data('GetDistrict_' + citycode, likeReturn);
            },
            timeout: 5000,
            complete: function () {
                var districtId = 0;
                $.each(likeReturn, function (index, value) {
                    if (quanhuyen == value.DistrictId) {
                        html += '<option value="' + value.DistrictId + '" selected="selected">' + value.DistrictName + '</option>';
                        $("#spanDistrict").html(value.DistrictName);
                        ChangeDistrict(value.DistrictId);
                    } else
                        html += '<option value="' + value.DistrictId + '">' + value.DistrictName + '</option>';
                });
                $("#cboDistrict").html(html);
                $("#cboDistrict").selectbox("detach").selectbox();
            }
        });
    }
}
function ChangeDistrict(districtId) {
    if (districtId >= 0) {
        GetWard(districtId, $('#hddWard').val());
        GetStreets(districtId, $('#hddStreet').val());
        GetProject(districtId, $('#hddProject').val());

        ChangeValue('Area', -1)
        ChangeValue('Price', -1)
        ChangeValue('Room', -1)
        ChangeValue('Direction', -1)

        $('#cboArea option').removeAttr('selected').filter('[value=-1]').attr('selected', true);
        $("#cboArea").selectbox("detach").selectbox();
        $('#cboPrice option').removeAttr('selected').filter('[value=-1]').attr('selected', true);
        $("#cboPrice").selectbox("detach").selectbox();

        $('#cboRoom option').removeAttr('selected').filter('[value=-1]').attr('selected', true);
        $("#cboRoom").selectbox("detach").selectbox();
        $('#cboDirection option').removeAttr('selected').filter('[value=-1]').attr('selected', true);
        $("#cboDirection").selectbox("detach").selectbox();


    }
}

function AutoLoadData() {
    var d = new Date();
    var n = d.getHours();
    if (n == 7) {
        $.ajax({
            type: "POST",
            cache: false,
            url: "http://s1.thongtinnhadat.com.vn/my%20dinh",
            success: function () {
            }
        });
        $.ajax({
            type: "POST",
            cache: false,
            url: "http://s2.thongtinnhadat.com.vn/my%20dinh",
            success: function () {
            }
        });
    }
}

/*gọi ý tìm kiếm end*/




/******* Auto complete Text Search *******/

function AutoLoadData() {
    var d = new Date();
    var n = d.getHours();
    if (n == 7) {
        $.ajax({
            type: "POST",
            cache: false,
            url: "https://s1.dothi.net/my%20dinh",
            success: function () {
            }
        });
        $.ajax({
            type: "POST",
            cache: false,
            url: "https://s2.dothi.net/my%20dinh",
            success: function () {
            }
        });
    }
}
$(function () {

    AutoLoadData();
    var toolTipPosition = window.location.pathname == '/' ? 'right' : 'left';


    $.ui.autocomplete.prototype._renderItem = function (ul, item) {
        var term = this.term.split(' ');
        var t = item.label.split(' ');
        var label = '';

        var reg = new RegExp("(~|!|@|#|\\$|%|\\^|&|\\*|\\(|\\)|_|\\+|\\{|\\}|\\||\"|:|\\?|>|<|,|\\.|\\/|;|'|\\\|[|]|=|-)", "gi");

        for (var j = 0; j < t.length; j++) {

            if (label.length > 0)
                label += ' ';

            var word = t[j];

            for (var i = 0; i < term.length; i++) {

                if (UnicodeToKoDau(term[i].replace(reg, "")).toLowerCase() == UnicodeToKoDau(word.replace(reg, "")).toLowerCase()) {
                    word = '<b>' + word + '</b>';
                    break;
                }
            }

            label += word;
        }

        if ($('#hddpType').val() == 38) {
            return $('<li></li>').data("item.autocomplete", item).append("<a>" + label + " <font style='color:#319c00;font-size:11px;font-weight:700'>(" + item.id.ts + " tin)</font>" + "</a>").appendTo(ul);
        } else {
            return $('<li></li>').data("item.autocomplete", item).append("<a>" + label + " <font style='color:#319c00;font-size:11px;font-weight:700'>(" + item.id.tr + " tin)</font>" + "</a>").appendTo(ul);
        }
    };

    ___isIE = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
    if (___isIE) {
        var defaultText = $('#txtTextSearch').attr('placeholder');
        $('#txtTextSearch').css('color', '#777');
        $('#txtTextSearch').css('height', '19px');
        $('#txtTextSearch').css('padding-top', '2px');
        $('#txtTextSearch').css('padding-bottom', '2px');
        $('#txtTextSearch').css('line-height', '18px');

        if ($('#txtTextSearch').val().length == 0)
            $('#txtTextSearch').val(defaultText);

        $('#txtTextSearch').blur(function () {
            if ($('#txtTextSearch').val().length == 0)
                $('#txtTextSearch').val(defaultText);
        });

        $('#txtTextSearch').focus(function () {

            if ($('#txtTextSearch').val() == defaultText)
                $('#txtTextSearch').val('');
        });

    }


    $('#txtTextSearch').autocomplete({
        source: function (request, response) {
            var term = UnicodeToKoDau(request.term);

            var cache = null;
            if (JSON != undefined && localStorage != undefined) {
                cache = JSON.parse(localStorage.getItem('suggestion-cache'));
            }

            if (cache == null) {
                cache = [{}];
            }

            var data = cache[term];

            if (data != null) {
                response(data);
                return;
            } else {
                var urlRequest = '';
                if ($('#hddType').val() == 38) {
                    urlRequest = 'https://s1.dothi.net/';
                } else {
                    urlRequest = 'https://s2.dothi.net/';
                }

                cnt = 0;
                $.ajax({
                    url: urlRequest + term,
                    success: function (data) {
                        cache[term] = data;

                        if (localStorage != undefined) {
                            localStorage.setItem('suggestion-cache', JSON.stringify(cache));
                        }
                        response(data);
                        $(".ui-autocomplete").width($(".form-search").width());
                    }
                });
            }

        },
        minLength: 2,
        select: function (event, ui) {
            var result = ui.item.id;
            var urlRequest = '';
            if ($('#hddType').val() == 38) {
                urlRequest = 'https://s1.dothi.net/';
            } else {
                urlRequest = 'https://s2.dothi.net/';
            }
            LocationControl.prototype.ChangeLocation(result);

            event.preventDefault();
            $("#txtTextSearch").val("");
            __doPostBack('ctl00$SearchContent$HomeSearch$btnSearch', '');

        }
    }).on('click', function () {
        if (document.hasFocus()) {
            $('ul.ui-autocomplete').hide();
        }
    });

    $('#txtTextSearch').keydown(function (evt) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            event.preventDefault();
            searchClick();
        } else {
            return evt.keyCode != 13;
        }
    });
});

var uniChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZàáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆĐÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴÂĂĐÔƠƯ1234567890~!@#$%^&*()_+=-{}][|\":;'\\/.,<>? \n\r\t";
var KoDauChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZaaaaaaaaaaaaaaaaaeeeeeeeeeeediiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAAEEEEEEEEEEEDIIIOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYAADOOU1234567890~!@#$%^&*()_+=-{}][|\":;'\\/.,<>? \n\r\t";
var Alphabe = "qwertyuioplkjhgfdsazxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM";

function UnicodeToKoDau(s) {
    var retVal = '';
    if (s == null)
        return retVal;
    var pos;
    var c = 'a';
    for (var i = 0; i < s.length; i++) {
        if (c == ' ' && s[i] == ' ')
            continue;
        c = s[i];
        pos = uniChars.indexOf(c);
        if (pos >= 0)
            retVal += KoDauChars[pos];
    }
    return retVal;
}

LocationControl = function (opts) {

};

LocationControl.prototype.ChangeLocation = function (opt) {
    if (opt.city != null) {

        $("#cboCity option[value='" + opt.city + "']").attr("selected", "selected");
        $("#cboCity").parent().find(".sbSelector").text($("#cboCity option[value='" + opt.city + "']").text());

        $('#hddCity').val(opt.city);

        if (opt.distr != null && opt.distr != 0) {
            $("#cboDistrict option[value='" + opt.distr + "']").attr("selected", "selected");
            $("#cboDistrict").parent().find(".sbSelector").text($("#cboDistrict option[value='" + opt.distr + "']").text());

            $('#hddDistrict').val(opt.distr);
        }

        if (opt.wardid != null && opt.wardid != 0) {
            $("#cboWard option[value='" + opt.wardid + "']").attr("selected", "selected");
            $("#cboWard").parent().find(".sbSelector").text($("#cboWard option[value='" + opt.wardid + "']").text());
            $('#hddWard').val(opt.wardid);
        }

        if (opt.streetid != null && opt.streetid != 0) {
            $("#cboStreet option[value='" + opt.streetid + "']").attr("selected", "selected");
            $("#cboStreet").parent().find(".sbSelector").text($("#cboStreet option[value='" + opt.streetid + "']").text());
            $('#hddStreet').val(opt.streetid);
        }

        if (opt.projid != null && opt.projid != 0) {
            $("#cboProject option[value='" + opt.projid + "']").attr("selected", "selected");
            $("#cboProject").parent().find(".sbSelector").text($("#cboProject option[value='" + opt.projid + "']").text());
            $('#hddProject').val(opt.projid);
        }

        if (opt.city != -1) {
            GetDistrict(opt.city, opt.distr);
        }

    }
}

