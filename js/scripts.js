var x = angular.module('nikko',['ui.router','angular-phone-input']);


	x.config(function($stateProvider,$urlRouterProvider){

		$urlRouterProvider.otherwise("home");

		$stateProvider
			.state("home",{
				url: "/home",
				templateUrl:  "partials/home.html",
				controller: "nikkoController as messagesList"
			})

			.state("messages",{
				url: "/messages",
				templateUrl:  "partials/messages.html",
				controller: "nikkoController as messagesList"
			})

			.state("about",{
				url: "/about",
				templateUrl:  "partials/about.html"
			});
	}) //config

	x.controller('nikkoController',function(){
		
		messagesList = this;
		var sort ="";


		messagesList.messages =
		[
		  {
		    "id": 1,
		    "name": "nikko",
			"message": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			"phone": "(111) 111-1111"
		  },
		  {
		    "id": 2,
		    "name": "nikko-2",
			"message": "qui est esse",
			"phone": "(222) 222-2222"
		  },
		  {
		    "id": 3,
		    "name": "nikko-3",
			"message": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
			"phone": "(333) 333-3333"
		  },
		  {
		    "id": 4,
		    "name": "nikko-4",
			"message": "eum et est occaecati",
			"phone": "(444) 444-4444"
		   },
		  {
		    "id": 5,
		    "name": "nikko-5",
		    "message": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
		  	"phone": "(555) 555-5555"
		   },
		  {
		    "id": 6,
		    "name": "nikko-6",
		    "message": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
		  	"phone": "(666) 666-6666"
		  },
		  {
		    "id": 7,
		    "name": "nikko-7",
		    "message": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
		  	"phone": "(777) 777-7777"
		  },
		  {
		    "id": 8,
		    "name": "nikko-8",
		    "message": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
		  	"phone": "(888) 888-8888"
		  },
		  {
		    "id": 9,
		    "name": "nikko-9",
		    "message": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
		  	"phone": "(999) 999-9999"
		  },
		  {
		    "id": 10,
		    "name": "nikko-10",
		    "message": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
		    "phone": "(100) 100-0000"
		  },
		  
		];



		messagesList.addMessage = function(){
			messagesList.messages.push({name: messagesList.name, phone: messagesList.phone ,message :messagesList.message});
			messagesList.name="";
			messagesList.phone="";
			messagesList.message="";
		}

		

	}) //nikkoController
	
