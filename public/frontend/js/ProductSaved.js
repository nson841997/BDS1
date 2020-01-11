if (userId == undefined || userId == '' || userId == 0) {
    userId = $('#hdUserId').val() != undefined && $('#hdUserId').val() != '' ? $('#hdUserId').val() : '';
}

$(document).ready(function () {

    GetProductlistDialog();

    $(".productClose").click(function () {
        HideProductDialog();
    });

    $("#backdroplogin").click(function () {
        HideProductDialog();
    });

    $(".productDialogShow").click(function () {
        ShowProductDialog();
    });

    $('#btn_close').click(function () {
        var heightBox = $('#boxProductSaved ul').height() + 15;
        var pos1 = $('#boxProductSaved').css('bottom');
        if (pos1 == -heightBox + 'px' || pos1 == '-10px') {
            $('#boxProductSaved ul').show();
            $('#boxProductSaved #btn_close').removeClass().addClass('hideAll');
            $('#boxProductSaved').animate({ bottom: '0' }, 200, function () {
                $.cookie('statusBox', 1, { path: '/', expires: 7 });
            });
        } else {
            $('#boxProductSaved').animate({ bottom: -heightBox }, 200, function () {
                $('#boxProductSaved #btn_close').removeClass().addClass('showAll');
                $.cookie('statusBox', 0, { path: '/', expires: 7 });
            });
        }
    });

});

function productSaved(index, productId) {
    if (userId == '' && getNumberOfSavedProduct() >= 5) {
        alert("Bạn đã lưu 5 tin. Hãy đăng nhập để lưu được nhiều tin hơn.");
        return false;
    }
    else {
        var listProductId = $.cookie('savedProductIds');
        if (listProductId != undefined && listProductId != " ") {
            if (listProductId.search(productId) == -1)
                $.cookie('savedProductIds', productId + ',' + listProductId, { path: '/', expires: 7 });
        }
        else {
            $.cookie('savedProductIds', productId, { path: '/', expires: 7 });
        }

        if (userId == '') {
            GetProductlistDialog();
        }
        else {
            $.ajax({
                type: "POST",
                cache: false,
                url: "/Handler/ProductHandler.ashx?module=productInsert",
                data: { "productId": productId },
                success: function (data) {
                    GetProductlistDialog();
                }
            });
        }

        $(index).attr("onclick", "buttonDelete(this,'" + productId + "')");
        $(index).html('<i class="fa fa-check"></i><span class="tooltips">Bỏ lưu tin</span>');
    }
}
function buttonDelete(index, productId) {
    var listProductId = $.cookie('savedProductIds');
    listProductId = listProductId.replace(productId, ' ').replace(', ,', ',').replace(', ', '').replace(' ,', '');
    deleteProductSaved(productId);//xoa trong database
    if (listProductId != '' && listProductId != ',')
        $.cookie('savedProductIds', listProductId, { path: '/', expires: 7 });
    else
        $.removeCookie('savedProductIds', { path: '/' });

    GetProductlistDialog();

    $(index).attr("onclick", "productSaved(this,'" + productId + "')");
    $(index).html('<i class="fa fa-download"></i><span class="tooltips">Lưu tin</span>');
}

function deleteAllNewsDialog() {
    if (confirm('Bạn có chắc chắn muốn xóa tất cả ?')) {
        var listProductId = $.cookie('savedProductIds');
        if (listProductId == null || listProductId == "") {
            listProductId = "";
            $(".boxDialogMain").html('');
        }
        deleteListProductSaved(listProductId);

        if ($("#savedNews").length > 0) {
            $(".product_" + productId).attr("onclick", "productSaved(this,'" + productId + "')");
            $(".product_" + productId).html('<i class="fa fa-download"></i><span class="tooltips">Lưu tin</span>');
        }

        $.removeCookie('savedProductIds', { path: '/' });
        HiveDivProductDialog();
        HideProductDialog();


    } else {
        return false;
    }
}

function deleteProductDialog(index, productId, clearThis) {
    if (confirm('Bạn có chắc chắn muốn xóa ?')) {

        var listProductId = $.cookie('savedProductIds') != null ? $.cookie('savedProductIds') : "";
        listProductId = listProductId.replace(productId, '').replace(',,', ',');
        deleteProductSaved(productId);

        if (listProductId != '' && listProductId != ',') {
            if (clearThis) {
                $(index).parent().parent().remove();
            }

            $.cookie('savedProductIds', listProductId, { path: '/', expires: 7 });
            GetProductlistDialog();
        }
        else {
            $.removeCookie('savedProductIds', { path: '/' });
            HideProductDialog();
            HiveDivProductDialog();
        }

        if ($("#savedNews").length > 0) {
            $(".product_" + productId).attr("onclick", "productSaved(this,'" + productId + "')");
            $(".product_" + productId).html('<i class="fa fa-download"></i><span class="tooltips">Lưu tin</span>');
        }

    }
}

function deleteProduct(index, productId) {
    if (confirm('Bạn có chắc chắn muốn xóa ?')) {
        $(index).parent().parent().remove();
        //delete cookey
        var listProductId = $.cookie('savedProductIds');
        listProductId = listProductId.replace(productId, ' ').replace(', ,', ',').replace(', ', '').replace(' ,', '');
        deleteProductSaved(productId);//xoa trong database
        if (listProductId != '' && listProductId != ',')
            $.cookie('savedProductIds', listProductId, { path: '/', expires: 7 });
        else
            $.removeCookie('savedProductIds', { path: '/' });
        if ($("#boxProductSaved table tbody tr").length == 0) {
            $("#boxProductSaved").hide();
            $('body').removeClass("no-scroll");
        }

        GetProductlistDialog();
    }
}

function deleteProductSaved(productId) {
    if (userId != '') {
        $.ajax({
            type: "POST",
            cache: false,
            url: "/Handler/ProductHandler.ashx?module=deleteProductId",
            data: { "productId": productId },
            success: function () {

            }
        });
    }
}

function deleteListProductSaved(productIds) {
    if (userId != '') {
        $.ajax({
            type: "POST",
            cache: false,
            url: "/Handler/ProductHandler.ashx?module=deleteListProductId",
            data: { "productIds": productIds },
            success: function () {

            }
        });
    }
}

function checkStatusListId() {

    if (userId == '') {
        var listProductId = $.cookie('savedProductIds');
        if (listProductId != null) {
            {
                $('.productlist .item .save').each(function () {
                    var productId = $(this).attr('id');
                    if (listProductId.search(productId) > -1)
                        $('#' + productId).html('<a class="save-news"><i class="fa fa-download"></i><span class="tooltips">Lưu tin</span></a>');
                });

            }
        }
    }
    else {
        var listId = '';
        $('.productlist .item .save').each(function () {
            listId += $(this).attr('id') + ',';
        });
        if (listId != '') {
            $.ajax({
                type: "POST",
                cache: false,
                url: "/Handler/ProductHandler.ashx?module=getListProductId",
                data: { "productIds": listId },
                success: function (data) {
                    listId = '';
                    if (data != null) {
                        likeReturn = eval('(' + data + ')');
                        $.each(likeReturn, function (index, value) {
                            listId += value.ProductId + ',';
                        });
                        $('.productlist .item .save').each(function () {
                            var productId = $(this).attr('id');
                            if (listId.search(productId) > -1)
                                $('#' + productId).html('<a class="save-news"><i class="fa fa-download"></i><span class="tooltips">Lưu tin</span></a>');
                        });
                    }
                }
            });
        }
    }
}

function ShowProductDialog() {

    $(".productDialog-container").css("top", (($(window).height() - $(".productDialog-container").outerHeight()) / 2));
    $("#backdroplogin").fadeIn(400);
    $(".productDialog-container").fadeIn(400);
    $('body').css('overflow', 'hidden');

}

function HideProductDialog() {
    $("#backdroplogin").fadeOut(300);
    $(".productDialog-container").fadeOut(300);
    $('body').css('overflow', '');
}

function HiveDivProductDialog() {
    $(".productDialogShow").hide(300);
}


function getNumberOfSavedProduct() {
    var listProductId = $.cookie('savedProductIds');
    if (listProductId != null && listProductId != "") {
        var list = listProductId.split(",");
        var count = 0;
        for (var i = 0; i < list.length; i++) {
            if (list[i] != "") {
                count++;
            }
        }
        return count;
    }

    return 0;

}

function ShowNumberOfProductDialog(number) {
    if (number > 0) {
        $(".productDialogHeader h4").html("Tin đã lưu (" + (number < 10 ? "0" : "") + number + ")");
        $(".productDialogShow .titleDialog").html("Tin đã lưu (" + (number < 10 ? "0" : "") + number + ")");
    } else {
        var listProductId = $.cookie('savedProductIds');
        if (listProductId != null && listProductId != "") {
            var list = listProductId.split(",");
            var count = 0;
            for (var i = 0; i < list.length; i++) {
                if (list[i] != "") {
                    count++;
                }
            }
            $(".productDialogHeader h4").html("Tin đã lưu (" + (count < 10 ? "0" : "") + count + ")");
            $(".productDialogShow .titleDialog").html("Tin đã lưu (" + (count < 10 ? "0" : "") + count + ")");
        }
    }
}

function GetProductlistDialog() {
    if (userId != '') {
        $.removeCookie('savedProductIds', { path: '/' });
        var listProductId = '';
        $.post('/handler/ProductHandler.ashx', { module: 'getProductListDialog', "productIds": listProductId }, function (data) {
            if (data != null) {
                if (data.length > 0) {
                    $(".boxDialogMain").html(data.html);
                    ShowNumberOfProductDialog(data.length);
                    //$.cookie('savedProductIds', data.list, { path: '/', expires: 7 });
                    $(".productDialogShow").show();
                } else {
                    $.removeCookie('savedProductIds', { path: '/' });
                    HiveDivProductDialog();
                }
            }
            else {
                
                HiveDivProductDialog();
            }
        }, 'json');
    } else {
        var listProductId = $.cookie('savedProductIds');
        if (listProductId != null && listProductId != "") {

            if ($("#savedNews").length > 0) {
                //Nếu là trang chi tiết
                if (listProductId.search(',') > -1) {
                    var arrCookie = listProductId.split(',');
                    for (var ii = 0; ii < arrCookie.length ; ii++) {
                        if (arrCookie[ii] != "") {
                            $(".product_" + arrCookie[ii]).attr("onclick", "buttonDelete(this,'" + arrCookie[ii] + "')");
                            $(".product_" + arrCookie[ii]).html('<i class="fa fa-check"></i><span class="tooltips">Bỏ lưu tin</span>');
                        }
                    }
                } else {
                    $(".product_" + listProductId).attr("onclick", "buttonDelete(this,'" + listProductId + "')");
                    $(".product_" + listProductId).html('<i class="fa fa-check"></i><span class="tooltips">Bỏ lưu tin</span>');
                }

            }

            $.post('/handler/ProductHandler.ashx', { module: 'getProductListDialog', "productIds": listProductId }, function (data) {
                $(".boxDialogMain").html('');
                if (data != null && data != "" && data.length > 0) {
                    $(".boxDialogMain").html(data.html);
                    ShowNumberOfProductDialog(data.length);
                    $(".productDialogShow").show();
                }
                else {
                    $.removeCookie('savedProductIds', { path: '/' });
                    HiveDivProductDialog();
                }
            }, 'json');

        }
        else {
            HiveDivProductDialog();
        }
    }

}
