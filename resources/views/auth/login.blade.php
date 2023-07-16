<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>@yield('title') | User Admin</title>

    <link rel='stylesheet' href='//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css'>
    <style>
        body{
            background-color: #d3d3d3;
        }
        .container-fluid {
            background-position: center center;
            background-size: cover;
        }
        .login-containder {
            width: 300px;
            height: 320px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -160px;
            margin-left: -150px;
        }
        .login-containder img {
            display: block;
            width: auto;
            margin: auto;
            margin-bottom: 50px;
        }
        .login-containder #email,
        .login-containder #password,
        .login-containder input[type="submit"] {
            height: 50px;
            border-radius: 25px;
            background-color: rgba(255, 255, 255, .8);
            background-repeat: no-repeat;
            background-position: 14px 14px;
            padding: 0 50px;
            color: #444;
        }
        .login-containder #email {
            background-image: url('/assets/admin/images/user.svg');
        }
        .login-containder .col-lg-4 {
            width: auto;
        }
        .login-containder #password {
            background-image: url('/assets/admin/images/pass.svg');
        }
        .login-containder .timer {
            font-size: 100px;
        }
        .login-containder input[type="submit"] {
            width: 150px;
            display: block;
            margin: auto;
            margin-top: 40px;
            background-color: #00b5ff;
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 400;
            color: #fff;
        }
        .login-containder .brute-force-prevent {
            color: #fff;
            text-align: center;
        }
        #copyright {
            position: absolute;
            text-align: center;
            bottom: 2%;
            left: 50%;
            width: 200px;
            margin-left: -100px;
            color: white;
            font-size: 12px;
        }
        #copyright a {
            color: white;
        }
    </style>
</head>
<body>

<div class='container-fluid' style="background-image: url('https://source.unsplash.com/user/kipo/likes/1600x1000');">
    <div class="login-containder">
        <img src='/assets/admin/images/kipo-logo.svg' alt="Kipo Logo"/>
        @if ($errors->has('brute-force-prevent'))
            <div class="brute-force-prevent">
                <h3 class="timer">01:00</h3>
            </div>
        @endif
        <form  method="POST" action="{{ url('/login') }}">
            <input type="hidden" name="_token" value="{{ csrf_token() }}" />
            <div class='form-group'>
                <input type="email" name="email" id="email" placeholder="E-mail" value="{{ old('email') }}" class="form-control" />
            </div>
            <div class='form-group'>
                <input type="password" name="password" id="password" placeholder="Password" class="form-control" />
            </div>
            <div class='form-group'>
                <input type="submit" value="Log In"class="btn btn-primary" />
            </div>
        </form>
    </div>
    <div id="copyright">&copy; {{date('Y')}} <a href="http://kipo.bg">KipoEngine</a></div>
</div>

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script>
    var errors = '{{$errors->isNotEmpty() && !$errors->has('brute-force-prevent')}}'
    var time = 59;
    if(errors > 0) {
        $('#email, #password').css('border', '1px solid red');
    }
    var setTimer = '';
    function timer() {
        if(time == 0) {
            $('form').show();
            clearInterval(setTimer);
            $('.brute-force-prevent').hide();
        }
        text = '00:';
        if(time < 10) {
            text += '0';
        }
        text += time;
        $('.timer').text(text);
        time--;
    }
    $(document).ready(function() {
        var $windowHeight = $(document).height();
        $('body').css('height', $windowHeight);
        $('.container-fluid').css({'height': $windowHeight});
        if($('div').hasClass('brute-force-prevent')) {
            $('form').hide();
            setTimer = setInterval(timer, 1000);
        } else {
            console.log('hasnt');
        }
    });

</script>
</body>
</html>
