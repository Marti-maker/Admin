<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <base href="{{URL::to('/') }}@link($langPrefix . '/admin/')">

    <title>@yield('title') | Kipo Admin</title>

    <!-- Bootstrap Core CSS -->
    <link href="{{ asset('assets/admin/lib/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Custom CSS -->
    <style>
        /* --loader-- */
        #loader-main-bg{display: none; opacity: 0.7; position:fixed;top:0;right:0;bottom:0;left:0;width:100%;background-color:#fff;z-index:9999999}.loader{width:49px;height:49px;position:absolute;top:50%;left:50%;margin:-25px 0 0 -25px;border:3px solid #008080;border-radius:50%;border-left-color:transparent;border-right-color:transparent;animation:sp 575ms infinite linear;-o-animation:sp 575ms infinite linear;-ms-animation:sp 575ms infinite linear;-webkit-animation:sp 575ms infinite linear;-moz-animation:sp 575ms infinite linear}@keyframes  sp{100%{transform:rotate(360deg)}}@-o-keyframes sp{100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@-ms-keyframes sp{100%{-ms-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes sp{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes sp{100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}
    </style>
    <link href="/images/upload/logo/favicon.png" rel="icon"/>
    <link href="{{ asset('assets/admin/css/main.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('assets/admin/css/kipo-admin.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/admin/lib/cropper.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/admin/css/components.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/admin/lib/bootstrap-datetimepicker.min.css') }}">
    <script src="{{ asset('assets/admin/lib/jquery-1.11.1.min.js') }}"></script>
    <script src="{{ asset('assets/admin/lib/tinymce/tinymce.min.js') }}"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.9.4/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"/>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.9.4/js/bootstrap-select.min.js"></script>
    @yield('custom_head_css')
<!-- (Optional) Latest compiled and minified JavaScript translation files -->


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js"></script>
    @yield('resources')
</head>

<body>
<script>
    var loader = null;
    $.ajaxSetup({
        beforeSend: function() {
            if(this.type == 'GET') {
                clearTimeout(loader);
                loader = setTimeout(function () {
                    $('#loader-main-bg').show()
                }, 1000);
            } else {
                $('#loader-main-bg').show()
            }
        },
        complete: function() {
            clearTimeout(loader);
            setTimeout(function () {
                $('#loader-main-bg').hide();
            }, 500);
        },
        error: function (x, status, error) {
            $('#loader-main-bg').hide();
        }
    });
</script>
<div id="loader-main-bg">
    <div class="loader"></div>
</div>
<div id="wrapper">

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">

            <a class="navbar-brand" href="/admin">Neterra Admin</a>
        <!--            <a class="navbar-brand" target="_blank" href="{{URL::to('/') }}">Към сайта</a>-->
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <!-- Top Menu Items -->
{{--        <ul class="nav navbar-right top-nav" style="padding-left: 0">--}}
{{--            <li class="dropdown">--}}
{{--                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-globe"></i><b class="caret"></b></a>--}}
{{--                <ul class="dropdown-menu">--}}
{{--                    @foreach($languages as $language)--}}
{{--                        <li class="{{ $language->language_code == $locale ? 'active' : '' }}">--}}
{{--                            <a href="language/change/{{ $language->language_code }}?page={{ url()->current() }}"><i class=""></i> {{ $language->language_name }}</a>--}}
{{--                        </li>--}}
{{--                    @endforeach--}}
{{--                </ul>--}}
{{--            </li>--}}
{{--        </ul>--}}
        <ul class="nav navbar-right top-nav">
            <li class="nav-text">
                <span>{{ admin_trans('hello') }}, {{ optional(auth()->user())->name }}</span>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-user"></i><b class="caret"></b></a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="profile"><i class=""></i> {{ admin_trans('profile') }}</a>
                    </li>

                    <li class="divider"></li>
                    <li>
                        <a href="/logout"><i class=""></i> {{ admin_trans('logout') }}</a>
                    </li>
                </ul>
            </li>
        </ul>
{{--        <div class="navbar-right">--}}
{{--            <div class="dropdown">--}}
{{--                <button style="background: transparent; color: #fff; border: none; padding: 15px 15px; line-height: 20px;" class="dropdown-toggle" type="button" data-toggle="dropdown">{{ admin_trans('domain') }} {{ optional($currentDomainInfo)->domain }}--}}
{{--                    <span class="caret"></span></button>--}}
{{--                <ul class="dropdown-menu">--}}
{{--                    <li><a href="javascript:void(0)" class="domain-filter" data-id="-1">{{ admin_trans('all_domains') }}</a></li>--}}
{{--                    @foreach($domains as $domain)--}}
{{--                        <li><a class="domain-filter" href="javascript:void(0)" data-id="{{ optional($currentDomainInfo)->id }}">{{ optional($currentDomainInfo)->domain }}</a></li>--}}
{{--                    @endforeach--}}
{{--                </ul>--}}
{{--            </div>--}}
{{--        </div>--}}
        <script>
            $(document).ready(function(){
                $('.domain-filter').on('click', function () {
                    var id = $(this).data('id');

                    _setCookie('filter_domain', id, 1);

                    location.reload();
                })
            });

            function _setCookie(name,value,days) {
                var expires = "";
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days*24*60*60*1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "")  + expires + "; path=/";
            }
        </script>
        <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul id="left-nav-bar" class="nav navbar-nav side-nav">
                <li class="{{$module == 'pages' ? 'active' : ''}} @allowedPages('pages')">
                    <a href="{{ route('pages.index') }}"><i class="fa fa-fw fa-edit"></i> {{ admin_trans('menu.page') }}</a>
                </li>
                <li class="{{$module == 'news' ? 'active' : ''}} @allowedPages('news')">
                    <a href="{{ route('news.index') }}"><i class="fa fa-fw fa-edit"></i> {{ admin_trans('menu.news') }}</a>
                </li>
                <li class="{{$module == 'users' ? 'active' : ''}} @allowedPages('users')">
                    <a href="{{ route('users.index') }}"><i class="fa fa-fw fa-edit"></i> {{ admin_trans('menu.users') }}</a>
                </li>
                <li class="{{$module == 'categories' ? 'active' : ''}} @allowedPages('categories')">
                    <a href="{{ route('categories.index') }}"><i class="fa fa-fw fa-edit"></i> Categories</a>
                </li>
                <li class="{{$module == 'projects' ? 'active' : ''}} @allowedPages('users')">
                    <a href="{{ route('projects.index') }}"><i class="fa fa-fw fa-edit"></i> {{ admin_trans('menu.projects') }}</a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </nav>

    <div id="page-wrapper">
        @yield('content')
    </div>
    <!-- /#page-wrapper -->

</div>
<!-- /#wrapper -->
<!-- jQuery -->

<script type="text/javascript" src="{{ asset('assets/admin/lib/moment.js') }}"></script>
<script src="{{ asset('assets/admin/lib/bootstrap.min.js') }}"></script>
<script src="{{ asset('assets/admin/lib/cropper.js') }}"></script>

<!-- <script type="text/javascript" src="/path/to/bootstrap/js/transition.js"></script>
<script type="text/javascript" src="/path/to/bootstrap/js/collapse.js"></script> -->

<script type="text/javascript" src="{{ asset('assets/admin/lib/bootstrap-datetimepicker.min.js') }}"></script>

<!-- Bootstrap Core JavaScript -->

<!-- App js -->
<script src="{{ asset('assets/admin/js/main.js') }}?v=1.7"></script>
<script src="{{ asset('assets/admin/js/kipo-admin.js') }}?v=1.8"></script>
<script type="text/javascript">
    $(function() {
        $('#datetimepicker1').datetimepicker();
    });
</script>
<script type="text/javascript">
    var deleteWarning = '{{ admin_trans('delete_warning') }}';
    $(function() {
        $('#datetimepicker1').datetimepicker();
    });
    $('#left-nav-bar li.active').parent().css({'display': 'block'});
    $('#left-nav-bar li.active > a').attr('style', 'background-color: #337ab7 !important');
</script>

</body>

</html>
