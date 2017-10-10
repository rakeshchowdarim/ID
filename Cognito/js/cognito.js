var auth;
var CognitoAuth = AmazonCognitoIdentity.CognitoAuth;

 function login(){
	auth = initCognitoSDK();
	auth.getSession();
	console.log(auth.RedirectUriSignIn);
}
function loginLogic(){
	auth = initCognitoSDK();
	
	var curURL = window.location.href;
	auth.parseCognitoWebResponse(curURL);
		
	//auth.getSession();
	console.log("cashe/SIUS");
	console.log(auth.getCachedSession())
	console.log(auth.getSignInUserSession());
}
 function logout(){
	auth.signOut();
}

function initCognitoSDK() {
	var authData = {
		ClientId : '5ig49kd4aneiqhl8i9oh1olsm9', // Your client id here
		AppWebDomain : 'infradronewebviewer.auth.us-east-1.amazoncognito.com',
		TokenScopesArray : ['email', 'profile','openid', 'aws.cognito.signin.user.admin'],
		RedirectUriSignIn : 'https://infradronewebvisualizer.ddns.net/Cognito/dates.php',
		RedirectUriSignOut : 'https://infradronellc.com/'
	};
	var authIn = new AWSCognito.CognitoIdentityServiceProvider.CognitoAuth(authData);
	console.log('init Cognito');
	authIn.userhandler = {
		onSuccess: function(result) {
			//alert("IN");
			console.log(result);
			console.log("ID: "); console.log(result.getIdToken());
			console.log("Access: "); console.log(result.getAccessToken());
			console.log("Refresh: "); console.log(result.getRefreshToken());
			
			AWS.config.update({
				region: 'us-east-1',
				credentials: new AWS.CognitoIdentityCredentials({
					AccountId: '921524220378', // your AWS account ID
					IdentityPoolId: 'us-east-1:eb3161de-b603-4ea5-80eb-6b394b4e94d8'
				})//-----------------------------------;
			});
			AWS.config.credentials.get(function(err) {
				if (err) console.log(err);
				else console.log(AWS.config.credentials);
			});
		},
		onFailure: function(err) {
			alert("Error!" + err);
		}
	};
	return authIn;
}

function credSet(auth){
	
	AWS.config.update({
		region: 'us-east-1',
		credentials: new AWS.CognitoIdentityCredentials({
			AccountId: '921524220378', // your AWS account ID
			IdentityPoolId: 'us-east-1:eb3161de-b603-4ea5-80eb-6b394b4e94d8'
		})//-----------------------------------;
	});
	AWS.config.credentials.get(function(err) {
		if (err) console.log(err);
		else console.log(AWS.config.credentials);
	});

}

function client(){
		var session = auth.getSignInUserSession();
		var payload = session.getIdToken().getJwtToken().split('.')[1];
		console.log(atob(payload));
		var key = atob(payload).replace(/"|{|}/g,'').split(',')[0].split(":")[2];
	
		console.log(key);
	
		return key;
}