const firebaseConfig = {

    apiKey: "AIzaSyD8TT0Mox5GhV5jofPXhL4E0HJV3YkXAdk",

    authDomain: "mindguard-login.firebaseapp.com",

    projectId: "mindguard-login",

    storageBucket: "mindguard-login.appspot.com",

    messagingSenderId: "714207827189",

    appId: "1:714207827189:web:1314c319328bd6d3a8e1bc",

    measurementId: "G-LDE4Z550LR"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

  //Initialize variables

  const auth=firebase.auth()
  const database=firebase.database()

  //Set up our register function
  function register(){

    //Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    Gender = document.getElementById('Gender').value
    Age_Category = document.getElementById('Age_Category').value

    //Validate input fields

    if(validate_email(email)==false || validate_password(password)==false){

        alert('Email or Password is Outta Line !!')
        return
        //Don't continue running the code 
    }
    if(validate_field(full_name)==false || validate_field(full_name)==false || validate_field(full_name)==false || validate_field(Gender)==false || validate_field(Age_Category)==false){
        alert('One or More Extra Fields is Outta Line !!')
        return
    }


    //Move on with Auth

    auth.createUserWithEmailAndPassword(email,password)
    .then(function() {

        //Declare user variable
        var user =auth.currentUser

        //Add this user to Firebase Database
        var database_ref = database.ref()
        
        //Create User data
        var user_data = {

            email : email,
            full_name : full_name,
            Gender : Gender,
            Age_Category : Age_Category,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)






        alert('User Created !!')

    })
    

.catch(function(error){

    //Firebase will use this to alert of its errors
    var error_code = error.code 
    var error_message = error.message 

    alert(error_message)

})

function validate_email(email){

    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email)==true){

        //Email is valid
        return true

    }else {

        //Email is not valid
        return false
    }


}

function validate_password(password){

    //Firebase only accepts lengths greater than 6

    if(password<6){

        return false
    }else {

        return true
    }
}

function validate_field(field){

    if(field == null){

        return false
    }

    if(field.length <= 0 ) {

        return false
    }else {

        return true
    }
}
