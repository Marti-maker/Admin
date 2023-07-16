var MOD = MOD || {};
var unsaved = false;
var currentTime = Date.now();

function initUploadImage(selector = '.fancybox-upload-img, .fancybox-popup') {
    if($(selector).length > 0) {
        $(selector).fancybox({
            autoDimensions: false,
            height: 800,
            width: 800,
            'type': 'iframe',
        });
    }
}

function initColourPicker() {
    $('.kipo-colour-picker').paletteColorPicker({
        colors: ["#e8eaeb", "teal","#fa0","#fff", "#E47782", "#16BECF", "#00A09E","#daa486", "#fafcf0","#13fbe2","#008291"],
        timeout: 1000
    });
}

function removeImage(el) {
    var imgId = $(el).data('id');
    $('#' +  imgId + '-cont').attr('src', '/assets/admin/images/no_image.jpg');
    $('#' +  imgId ).val('');
}

initUploadImage();

function responsive_filemanager_callback(fieldId){
    if (Date.now() - currentTime > 2000) {
        var url = jQuery('#'+ fieldId).val();
        console.log(MOD.fmAddImg);
        if(MOD.fmAddImg && $('#' +  fieldId + '-wrapper').length > 0) {
            $('#' + fieldId + '-cont').remove();
            $('#' +  fieldId + '-wrapper #' + fieldId + '-link-cont').append($('<img>', {
                id: fieldId + '-cont',
                class: 'img-responsive',
                src: MOD.fmImagePath
            }));
        } else {
            $('#' +  fieldId + '-cont').attr('src', url);
        }

        $('#' + fieldId + '-link-cont').attr('href', url)

        currentTime = Date.now();
        jQuery('#'+ fieldId).val(url);
    }

    window['$'].fancybox.close();
}
(function(mod) {
    function addElement(selector, elementName, languageName, parent, elementId) {
        var current = $('#' + selector + '-' + parent).children();
        current = current.length + 1;
        $('#' + selector + '-'+ parent).append(
            '<div id="' + selector + '-element-'+current+'">' +
            '<label for="editor-'+parent+'-'+current+'"> ' + elementName + '(' + languageName + ')</label>' +
            '<a class="pointer" onclick="MOD.deleteElement($(this).parent())"> Изтрий ' + elementName + '</a>' +
            '<textarea class="form-control" id="' + selector + '-editor-'+parent+'-'+current+'" name="' + selector + '['+parent+']['+current+']" cols="50" rows="10" ></textarea>' +
            '</div>'
        );
        mod.tinymceInit('#' + selector + '-editor-'+parent+'-'+ current);
    }

    mod.checkbox = function(selector) {
        if(!selector) {
            selector = $('input[type="checkbox"]')
        }

        selector.on('click', function() {
            $(this).parents('label').toggleClass('btn-success');
        });
    }

    mod.addSection = function(){
        console.log('add section');
        MOD.sectionIndex++;

        var sectionIndex = MOD.sectionIndex;

        $.get('/admin/pages/add-section/' + sectionIndex, {}, function (response) {
            $('#sections-cont').append(response);
            initUploadImage('#section-cover' + '-' + sectionIndex + '-popup');
        })

    }

    mod.tinyInit = function(selector){

        tinymce.init({
            selector: selector,
            theme: 'modern',
            menubar:false,
            statusbar: false,
            setup: function(ed) {
                ed.on('init', function(e) {
                    $(document).off("focusin.fb");
                });
            },
            plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste responsivefilemanager"
            ],
            image_advtab: true,
            relative_urls: false,
            toolbar: "| insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link"
            ,
            toolbar1: 'undo redo | styleselect | bold italic | bullist numlist | link | forecolor | codesample | alignleft aligncenter alignright | sizeselect | removeformat',

            content_css: [
                '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                '//www.tinymce.com/css/codepen.min.css',
                '/kipo_admin/css/kipo-admin.css'
            ],
            external_filemanager_path:"/kipo_fm_/",
            filemanager_title:"Responsive Filemanager" ,
            filemanager_access_key: '634d1f4a2c7712845f03c7a0c645d261',
            external_plugins: { "filemanager" : "/kipo_admin/filemanager/plugin.min.js"},
            fontsize_formats: "8pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 24pt 36pt"
        });
    }

    mod.deleteSection = function(parent){
        if (window.confirm("Сигурен ли си, че искаш да изтриеш секцията?")) {
            var sections = $(parent).parent().attr('data-id') - 1;
            $(parent).parent().attr('data-id',sections);
            tinyMCE.remove();
            $(parent).remove();
            mod.tinyInit('.editor');
        }

    }

    $('#form_brand').on('submit', function() {
        var form = $(this);
        var location = $(this).attr('action');
        var token = $('[name="_token"]').val();
        var formData = new FormData();
        var data = $(this).serializeArray();

        for(var i in data) {
            formData.append(data[i].name, data[i].value)
        }

        formData.append('cover', (form.find("#cover"))[0].files[0]);
        form.find('#cover').css('border', '1px solid #ccc');
        $.ajax({
            url: location,
            data: formData,
            processData: false,
            headers: {
                'X-CSRF-TOKEN': token
            },
            contentType: false,
            type: 'POST',
            success: function(response){
                $('.form_brand').prepend(response);
                form.find('[type="file"]').val('');
                form.find('[name*="gallery"]').val('');


            }, error: function(jqXHR, textStatus, errorThrown) {

                if(jqXHR.status == 422) {
                    var response = JSON.parse(jqXHR.responseText);

                    for(var i in response) {
                        var index = i.split('.');

                        if(index.length == 1) {
                            form.find('#' + i).css('border', '1px solid red');
                        } else {
                            console.log('[name="' + index[0] + '[' + index[1] + ']"]');
                            form.find('[name="' + index[0] + '[' + index[1] + ']"]').css('border', '1px solid red');
                        }
                    }
                }

            }

        });

        return false;
    });

    mod.disable = function($el, view) {
        var active = 1;

        if($($el).hasClass('active')) {
            active = 6;
        }

        $.ajax({
            url: "/admin/" + view + "/disable",
            headers: {
                'X-CSRF-TOKEN': token
            },
            type: "PUT",
            data: {id:$($el).data('id'),active:active},
            success: function(data) {
                console.log('post status success! active: ' + active);
            }
        });

    };

    mod.addSubSection = function(parent, name) {
        addElement('subsections', 'Подсекция', name, parent);

    };

    mod.deleteElement = function(parent){
        if (window.confirm("Сигурен ли си, че искаш да изтриеш елемента?")) {
            $(parent).remove();
        }
    };
    mod.visible = function($el, url, active) {
        var active = 1;

        if($($el).hasClass('active')) {
            active = 0;
            // var recommendedEl = $($el).closest("li").find(".glyphicon-star");
            // recommendedEl.removeClass("glyphicon-star");
            // recommendedEl.addClass("glyphicon-star-empty");
        }

        $.ajax({
            url: url + "/status",
            headers: {
                'X-CSRF-TOKEN': token
            },
            type: "PUT",
            data: {id:$($el).data('id'),active:active},
            success: function(data) {
                console.log('post status success! active: ' + active);
            }
        });
    }

    mod.openPopup = function(url, callback) {
        if(callback) {
            url = callback(url);
            console.log('callback');
        }

        console.log(url);

        $.fancybox.close();
        $.get(url, {}, function (response) {
            $.fancybox.open(response, {touch : false});
        });
    }

    mod.recommended = function($el, url) {
        var status = 1;
        var starSelector = $($el).find('span');
        if(starSelector.hasClass('glyphicon-star')) {
            status = 0;
            starSelector.removeClass("glyphicon-star");
            starSelector.addClass("glyphicon-star-empty");
        } else {
            starSelector.addClass("glyphicon-star");
            starSelector.removeClass("glyphicon-star-empty")
        }


        $.ajax({
            url: url,
            headers: {
                'X-CSRF-TOKEN': token
            },
            type: "PUT",
            data: {id:$($el).data('id'),status: status}
        });

        return false;
    }

    mod.uploadGallery = function(el) {
        var token = $('[name="_token"]').val();
        var formData = new FormData();
        var categoryForm = $('#data_form').serializeArray();
        var $el = $(el).closest(".col-lg-6");

        var serialize = categoryForm;


        for(var i in serialize) {
            if(serialize[i].name == '_method') {
                formData.append('_method', "POST")
            } else {
                formData.append(serialize[i].name, serialize[i].value)
                $('[name="' + serialize[i].name + '"]').css('border', '1px solid #ccc');
            }
        }

        if($("#gallery-cover").length > 0 && $("#gallery-cover")[0].files.length > 0) {
            formData.append('gallery-cover', ($("#gallery-cover"))[0].files[0]);
            $("#gallery-cover").css('border', '1px solid #ccc');
        }
        $.ajax({
            url: '/admin/photography/gallery',
            data: formData,
            processData: false,
            headers: {
                'X-CSRF-TOKEN': token
            },
            contentType: false,
            type: 'POST',
            success: function(reponse){
                var html = '';
                $el.find('input').css('border', '1px solid #ccc');
                $('[name="photography-id"]').val(reponse.photography_id);
                $('#nestable ol').prepend(reponse.html);
                $el.find('input').val('');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error')
                if (jqXHR.status == 422) {
                    var response = JSON.parse(jqXHR.responseText);

                    for (var i in response) {
                        var index = i.split('.');
                        console.log('#' + index[0] + '-' + index[1] + '')

                        if (index.length == 1) {
                            $el.find('#' + i).css('border', '1px solid red');
                        } else {
                            console.log('#' + index[0] + '[' + index[1] + ']')
                            $el.find('#' + index[0] + '\\[' + index[1] + '\\]').css('border', '1px solid red');
                        }
                    }
                }

            }
        });

        return false;
    }

    $('#form_partners').on('submit', function() {
        console.log('ok');
        var token = $('[name="_token"]').val();
        var formData = new FormData();
        var form = $(this);

        if(form.find("#cover").length > 0 && form.find("#cover")[0].files.length > 0) {
            formData.append('cover', (form.find("#cover"))[0].files[0]);
        }
        $.ajax({
            url: '/admin/settings/partners',
            data: formData,
            processData: false,
            headers: {
                'X-CSRF-TOKEN': token
            },
            contentType: false,
            type: 'POST',
            success: function(html){
                form.find('input').css('border', '1px solid #ccc');
                $('#partners-nestable ol').prepend(html);
                form.find('input').val('');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('error')
                if (jqXHR.status == 422) {
                    var response = JSON.parse(jqXHR.responseText);

                    for (var i in response) {
                        var index = i.split('.');
                        console.log('#' + index[0] + '-' + index[1] + '')

                        if (index.length == 1) {
                            form.find('#' + i).css('border', '1px solid red');
                        } else {
                            console.log('#' + index[0] + '-' + index[1] + '')
                            form.find('#' + index[0] + '-' + index[1] + '').css('border', '1px solid red');
                        }
                    }
                }

            }
        });

        return false;
    });

    mod.special = function($el, view) {
        var status = 2;

        if($($el).hasClass('glyphicon-star')) {
            status = 1;
            $($el).removeClass('glyphicon-star');
            $($el).addClass('glyphicon-star-empty')
        } else {
            $($el).removeClass('glyphicon-star-empty');
            $($el).addClass('glyphicon-star')
        }

        $.ajax({
            url: "/admin/" + view + "/active",
            headers: {
                'X-CSRF-TOKEN': token
            },
            type: "PUT",
            data: {id:$($el).data('id'),active:status},
            success: function(data) {
                console.log('post status success! active: ' + status);
            }
        });
    }

    mod.delete = function(id, url) {
        if (window.confirm(deleteWarning)) {
            $.ajax({
                url: url + "/" + id,
                headers: {
                    'X-CSRF-TOKEN': token
                },
                type: "DELETE",
                data: {},
                success: function (id) {
                    console.log(id);
                    $('.dd-item[data-id="' + id + '"]').remove();
                }
            });
        }
    }

    mod.forceDelete = function(id, url, success) {
        $.ajax({
            url: url + "/" + id,
            headers: {
                'X-CSRF-TOKEN': token
            },
            type: "DELETE",
            async: false,
            data: {},
            success: function (id) {
                if(success) {
                    success();
                }
            }
        });
    }

    mod.updateOutput = function(url, tree = 0) {
        var list   =  $('.dd');
        var pleach = list.nestable('serialize');

        $('.dd').fadeTo("fast","0.2");


        $.ajax({
            url: url + "/sort" + (tree ? '/' + tree : ''),
            type: "PUT",
            data: {pleach:pleach},
            headers: {
                'X-CSRF-TOKEN': token
            },
            success: function(data) {
                $('.dd').fadeTo("slow","1");
            }
        });

    };

    $(":input").change(function(){
        unsaved = true;
    });

    $(window).on('beforeunload', function(){
        if(unsaved) return 'Не сте записали направените промени!';

    });

}(MOD));
