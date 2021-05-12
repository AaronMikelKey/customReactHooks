const FB_APP_ID = process.env.FB_APP_ID //Add FB_APP_ID to .env

const FbScript = () => {
		window.fbAsyncInit = function () {
			window.FB.init({
				appId: FB_APP_ID,
				xfbml: true,
				version: 'v10.0'
			})
		};
		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0]
			js = d.createElement(s)
			js.id = id
			js.src = "https://connect.facebook.net/en_US/sdk.js"
			fjs.parentNode.insertBefore(js, fjs)
		}(document, 'script', 'facebook-jssdk'))
	}

export default FbScript