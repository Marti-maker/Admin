var MOD = MOD || {};




(function(mod) {
    $(document).ready(function() {

        $('#language-tabs a').click(function(e) {
            e.preventDefault();

            $(this).tab('show');
        });


        $('.btn-switch').on('click', function() {
            $(this).toggleClass('active');
        });


        var $win = $(window);
        var winHeight = $win.height();

        $('#page-wrapper').css('min-height', winHeight);

        // $('.dd').nestable({
        //  maxDepth: 10,
        //  expandBtnHTML: '<button data-action="expand"><span class="glyphicon glyphicon-triangle-right expand-btn"></span></button>',
        //  collapseBtnHTML: '<button data-action="expand"><span class="glyphicon glyphicon-triangle-down expand-btn"></span></button>'
        // });

        // var $image = $(".bootstrap-modal-cropper > img"),
        //     originalData = {};



        var $image = $(".bootstrap-modal-cropper > img"),
            $dataX = $("#dataX"),
            $dataY = $("#dataY"),
            $dataHeight = $("#dataHeight"),
            $dataWidth = $("#dataWidth"),
            $ratio = $('input[name="ratio"]'),
            originalData = {
                x: 0,
                y: 100,
                width: 350,
                height: 525
            };

        $("#bootstrap-modal").on("shown.bs.modal", function() {
            $image.cropper({
                multiple: true,
                aspectRatio: 0.66666666666,
                modal: true,
                dashed: true,
                resizable: true,
                movable: true,
                minWidth: 350,
                minHeight: 525,
                data: originalData,
                preview: ".img-preview",
                zoomable:true,
                zoomOnWheel: false,
                done: function(data) {
                    $dataX.val(Math.round(data.x));
                    $dataY.val(Math.round(data.y));
                    $dataHeight.val(Math.round(data.height));
                    $dataWidth.val(Math.round(data.width));
                }
            });
        }).on("hidden.bs.modal", function() {
            originalData = $image.cropper("getData");
            $image.cropper("destroy");
        });

        var cropBoxDisabled = false;

        $(".bootstrap-modal-cropper").on('dragmove.cropper', function (e) {

            var minW = 350;
            var minH = 525;
            var currentW = $dataWidth.val();
            var currentH = $dataHeight.val();

            var cropBoxCurrentW = $('.cropper-dragger').width();
            var cropBoxCurrentH = $('.cropper-dragger').height();

            if (currentW < minW || currentH < minH) {
                cropBoxDisabled = true;
            }

        });

        $(".bootstrap-modal-cropper").on('dragstart.cropper', function (e) {

            if (cropBoxDisabled) {


                cropBoxDisabled = false;
            }
        });

        $ratio.change(function () {
            var value = $(this).val();

            $image.cropper('setAspectRatio', value);
        });

        $("#setData").click(function() {
            var data = {
                x: $dataX.val(),
                y: $dataY.val(),
                width: $dataWidth.val(),
                height: $dataHeight.val()
                // ratio: $ratio.val()
            };

            $image.cropper("setData", data);
        });

        var $inputImage = $("#inputImage");

        if (window.FileReader) {
            $inputImage.change(function() {
                var fileReader = new FileReader(),
                    files = this.files,
                    file;

                if (!files.length) {
                    return;
                }

                file = files[0];

                if (/^image\/\w+$/.test(file.type)) {
                    fileReader.readAsDataURL(file);
                    fileReader.onload = function() {

                        var size = ~~(file.size/1024),
                            width = this.width,
                            height = this.height;



                        if(size < 2087 && width < 1200 && height < 1000) {

                        } else {
                            // error message
                            $('.image-size-error').html('image dimentions must be below 1200x1000 and size must be below 2 MB');
                        }

                        $image.cropper("reset", true).cropper("replace", this.result);
                        //$inputImage.val("");
                    };
                } else {
                    showMessage("Please choose an image file.");
                }
            });
        } else {
            $inputImage.addClass("hide");
        }


        $.fn.eqHeight = function(param) {
            var self = $(this);
            var targetHeight = param.height();

            this.each(function() {
                self.height(targetHeight);
            });
        };

        mod.tinymceInit =function(selector) {
            tinymce.init({
                selector: selector,
                theme: 'modern',
                menubar:false,
                statusbar: false,
                plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table contextmenu paste responsivefilemanager"
                ],
                height: 600,
                image_advtab: true,
                relative_urls: false,
                toolbar: "| insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | responsivefilemanager"
                ,
                toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor | codesample | sizeselect | removeformat | media mediaembed',

                content_css: [
                    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                    '//www.tinymce.com/css/codepen.min.css',
                    '/kipo_admin/css/kipo-admin.css'
                ],
                external_filemanager_path:"/kipo_admin/filemanager/",
                filemanager_title:"Responsive Filemanager" ,
                filemanager_access_key: '634d1f4a2c7712845f03c7a0c645d261',
                external_plugins: { "filemanager" : "/kipo_admin/filemanager/plugin.min.js"},
                fontsize_formats: "8pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 24pt 36pt"
            });
        }

        mod.tinymceInit('.editor')

        $.fn.seoSync = function(param) {


            var self = $(this);
            var langCount = $('#language-tabs').children('li').length || 1;
            var descriptionMaxLenght = 150;
            var titleMaxLenght = 60;

            var titleSelector = 'title';
            var sefurlSelector = 'sefurl';
            var descriptionSelector = 'description';
            var metaTitleSelector = 'meta_title';
            var metaDescriptionSelector = 'meta_description';

            var previewTitleSelector = 'preview_title';
            var previewDescriptionSelector = 'preview_description';

            var titles = [];
            var sefurls = [];
            var descriptions = [];
            var metaTitles = [];
            var metaDescriptions = [];

            var previewTitles = [];
            var previewDescriptions = [];

            if(!self.length) {
                return;
            }

            function getInputs(name, collection) {
                for (var i = 1; i <= langCount; i += 1) {

                    var current = $('#' + name + '-' + i);
                    collection.push(current);
                }
            }

            function strip(html) {
                var tmp = document.createElement("DIV");
                tmp.innerHTML = html;
                return tmp.textContent || tmp.innerText || "";
            }

            function convertToSlug(value) {
                value = value
                    .toLowerCase()
                    // .replace(' ', '-')
                    // .replace('[^a-z0-9]+', '');
                    .replace(/^\s+|\s+$/g, "")
                    .replace(/[_|\s]+/g, "-")
                    .replace(/[^a-z\u0400-\u04FF0-9-]+/g, "")
                    .replace(/[-]+/g, "-")
                    .replace(/^-+|-+$/g, "")
                    .replace(/ +/g, '-');

                return value;
            }

            function convertToSlugDash(value) {
                value = value
                    .toLowerCase()
                    .replace(' ', '-')
                    .replace(/^\s+|\s+$/g, "")
                    .replace(/[_|\s]+/g, "-")
                    .replace(/[^a-z\u0400-\u04FF0-9-]+/g, "")
                    .replace(/[-]+/g, "-")
                    // .replace(/^-+|-+$/g, "")
                    .replace(/ +/g, '-')
                    .replace('[^a-z0-9]+', '');

                return value;
            }

            var a = {"Ё":"YO","Й":"Y","Ц":"C","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SHT","З":"Z","Х":"H","Ъ":"A","ё":"yo","й":"y","ц":"c","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sht","з":"z","х":"h","ъ":"a","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"J","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"j","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"Y","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"y","б":"b","ю":"yu"};

            function transliterate(word){
                return word.split('').map(function (char) {
                    return a[char] || char;
                }).join("");
            }

            getInputs(titleSelector, titles);
            getInputs(sefurlSelector, sefurls);
            getInputs(descriptionSelector, descriptions);
            getInputs(metaTitleSelector, metaTitles);
            getInputs(metaDescriptionSelector, metaDescriptions);

            getInputs(previewTitleSelector, previewTitles);
            getInputs(previewDescriptionSelector, previewDescriptions);

            titles.forEach(function(element, index) {
                var element = $(element);

                var meta = metaTitles[index];
                var sync = false;
                var syncSefUrl = false;
                var sefurlId = index + 1
                var sefurl = $('#sefurl-' + sefurlId);
                sefurl.focusout(function() {
                    var sefurlValue = sefurl.val();
                    sefurl.val(transliterate(convertToSlug(sefurlValue)));
                });


                $(element).focus(function() {
                    var value = $(this).val();
                    var id = index + 1;
                    var metaTitle = $('#meta_title-' + id);
                    var sefurl = $('#sefurl-' + id);
                    if(metaTitle.length) {
                        metaTitle =  metaTitle.val().toString();
                        if(value === metaTitle) {
                            sync = true;
                        } else {
                            sync = false;
                        }
                    }
                    if(sefurl.length) {
                        var edit = sefurl.hasClass('edit');
                        sefurl = sefurl.val();
                        if(transliterate(convertToSlug(value)) === sefurl && !edit) {
                            syncSefUrl = true;
                        } else {
                            syncSefUrl = false;
                        }
                    }
                });

                $(element).keyup(function() {

                    var value = $(this).val();
                    var safeValue = transliterate(convertToSlug(value));
                    var id = index + 1;
                    var metaTitle = $('#meta_title-' + id);
                    var sefurl = $('#sefurl-' + id);
                    var previewTitle = $('#preview_title-' + id);



                    // TO DO: find a condition that works
                    if(sync) {
                        $('#meta_title-' + id).val(value); // TO DO: use value from array for selector
                        $('#preview_title-' + id).html(value);
                    }
                    if(syncSefUrl) {
                        $('#sefurl-' + id).val(safeValue);
                    }

                });
            });

            descriptions.forEach(function(element, index) {
                var element = $(element);

                var id = index + 1;

                var meta_description = $('#meta_description-'+id);
                var preview_description = $('#preview_description-'+id);

                var value = strip(element.val()).substring(0, 150);

                if (meta_description.val() == '') {
                    if(value && value != 'undefined') {
                        meta_description.val(value);

                        if(preview_description.length > 0) {
                            preview_description.html(value);
                        }

                    }

                }
            });

            metaDescriptions.forEach(function(element, index) {
                var element = $(element);

                var preview = previewDescriptions[index];
                var closestCounter = element.siblings('.meta_description_length');
                var defLength = descriptionMaxLenght - ($(element).length > 0 ? $(element).val().length : 0);

                closestCounter.html(defLength);

                var initValue = element.val();
                var id = index + 1;

                if($('#preview_description-'+id).length > 0) {
                    var initPreviewValue = $('#preview_description-'+id).html().toString();
                }

                // bind live with tinymce content
                // if (initValue == '') {

                // $( document ).on('tmcekeyup', function (e, arg1) {
                //     $(element).val(strip(arg1));
                // });

                // }
                // if preview empty set defaut value
                if(initPreviewValue == '') {
                    $('#preview_description-'+id).html($(element).val());
                }

                $(element).keyup(function() {

                    // var id = index + 1;
                    var value = $(this).val();
                    var length = descriptionMaxLenght - value.length;

                    $('#preview_description-'+id).html(value); // TO DO: use value from array for selector
                    closestCounter.html(length);

                });
            });

            metaTitles.forEach(function(element, index) {
                var element = $(element);

                var closestCounter = element.siblings('.meta_title_length');
                var defLength = titleMaxLenght - ($(element).length > 0 ? $(element).val().length : 0);

                closestCounter.html(defLength);

                var preview = previewTitles[index];


                $(element).keyup(function() {

                    var value = $(this).val();
                    var id = index + 1;
                    var length = titleMaxLenght - value.length;

                    $('#preview_title-'+id).html(value); // TO DO: use value from array for selector
                    closestCounter.html(length);
                });
            });

            sefurls.forEach(function (element, index) {
                var element = $(element);

                element.keyup(function () {
                    var value = $(this).val();
                    var safeValue = transliterate(convertToSlugDash(value));
                    $(this).val(safeValue);
                });
            });

            this.each(function() {

            });
        };

        $('#data_form').seoSync();


    });
}(MOD))
