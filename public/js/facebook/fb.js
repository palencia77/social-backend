            // Facebook JS SDK initialization options
	    window.fbInit = function(FB) {
                FB.init({appId: '916744205020906', status: true, cookie: true, xfbml: true});
                /* All the events registered */
                FB.Event.subscribe('auth.login', function(response) {
                    // do something with response
                    login();
                });
                FB.Event.subscribe('auth.logout', function(response) {
                    // do something with response
                    logout();
                });
                FB.getLoginStatus(function(response) {
                    if (response.session) {
                        // logged in and connected user, someone you know
                        login();
                    }
                    if (response.status === 'connected') {
                        console.log(response.authResponse.accessToken);
                    }
                });
            };

            (function() {
                var e = document.createElement('script');
                e.type = 'text/javascript';
                e.src = document.location.protocol + '/cause/all.js';
                e.async = true;
                document.getElementById('fb-root').appendChild(e);
            }());

            function login(){
                if (response.authResponse) {
                    var access_token =   FB.getAuthResponse()['accessToken'];
                    console.log('Access Token = '+ access_token);
                    FB.api('/me', function(response) {
                        document.getElementById('login').style.display = "block";
                        document.getElementById('login').innerHTML = response.name + " succsessfully logged in!";
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }                    
            }
            function logout(){
                document.getElementById('login').style.display = "none";
            }

            //stream publish method
            function streamPublish(name, description, hrefTitle, hrefLink, userPrompt,picture){
                FB.ui(
                {
                    method: 'feed',
                    message: '',
                    picture: picture,
                    name: name,
                    link : hrefLink,
                    description: description,
                    user_prompt_message: userPrompt
                },
                function(response) {

                });

            }
            function showStream(name,text,id_resource,url){
                FB.api('/me', function(response) {
                    streamPublish(name, text,"Social Network", url, "SocialNetwork",'www.domain.com:5000/resource/public/view?id_resource='+id_resource);
                });
            }

            function share(){
                var share = {
                    method: 'stream.share',
                    u: 'https://www.urldelacausa.com/'
                };

                FB.ui(share, function(response) { console.log(response); });
            }

            function graphStreamPublish(){
                var body = 'Reading New Graph api & Javascript Base FBConnect Tutorial from Thinkdiff.net';
                FB.api('/me/feed', 'post', { message: body }, function(response) {
                    if (!response || response.error) {
                        alert('Error occured');
                    } else {
                        alert('Post ID: ' + response.id);
                    }
                });
            };

            function fqlQuery(){
                FB.api('/me', function(response) {
                     var query = FB.Data.query('select name, hometown_location, sex, pic_square from user where uid={0}', response.id);
                     query.wait(function(rows) {
                       
                       document.getElementById('name').innerHTML =
                         'Your name: ' + rows[0].name + "<br />" +
                         '<img src="' + rows[0].pic_square + '" alt="" />' + "<br />";
                     });
                });
            };

		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		 	 if (d.getElementById(id))
				 return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&appId=916744205020906&version=v2.0";
			  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
