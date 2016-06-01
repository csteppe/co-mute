angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope",function(t){t.$on("login",function(e,n){t.currentUser=n})}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,e){t.login=function(n,r){e.login(n,r).then(function(e){t.$emit("login",e.data)})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,e){t.addPost=function(){e.create({username:t.currentUser.username,departure:t.departure,arrival:t.arrival,origin:t.origin,days:t.days,destination:t.destination,seats:t.seats,notes:t.notes}).success(function(e){t.posts.unshift(e),t.postBody=null})},e.fetch().success(function(e){t.posts=e})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(e){return t.post("/api/posts",e)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(t,e){t.register=function(t,n){e.register(t,n)}}]),angular.module("app").config(["$routeProvider","$locationProvider",function(t,e){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/api/users")},e.login=function(n,r){return t.post("/api/sessions",{username:n,password:r}).then(function(n){return e.token=n.data,t.defaults.headers.common["X-Auth"]=n.data,e.getUser()})},e.register=function(n,r){return t.post("/api/users",{username:n,password:r}).then(function(t){e.login(n,r)})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicG9zdHMuY3RybC5qcyIsInBvc3RzLnN2Yy5qcyIsInJlZ2lzdGVyLmN0cmwuanMiLCJyb3V0ZXMuanMiLCJ1c2VyLnN2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRvbiIsIl8iLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJVc2VyU3ZjIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwiJGVtaXQiLCJkYXRhIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwiY3JlYXRlIiwiZGVwYXJ0dXJlIiwiYXJyaXZhbCIsIm9yaWdpbiIsImRheXMiLCJkZXN0aW5hdGlvbiIsInNlYXRzIiwibm90ZXMiLCJzdWNjZXNzIiwicG9zdCIsInBvc3RzIiwidW5zaGlmdCIsInBvc3RCb2R5IiwiZmV0Y2giLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwicmVnaXN0ZXIiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIiRsb2NhdGlvblByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwic3ZjIiwiZ2V0VXNlciIsInZhbCIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxPQUFBLFlDQUFELFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxtQkFBQSxTQUFBLFNBQUFDLEdBQ0FBLEVBQUFDLElBQUEsUUFBQSxTQUFBQyxFQUFBQyxHQUNBSCxFQUFBSSxZQUFBRCxPQ0hBTixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsYUFBQSxTQUFBLFVBQUEsU0FBQUMsRUFBQUssR0FDQUwsRUFBQU0sTUFBQSxTQUFBQyxFQUFBQyxHQUNBSCxFQUFBQyxNQUFBQyxFQUFBQyxHQUNBQyxLQUFBLFNBQUFDLEdBQ0FWLEVBQUFXLE1BQUEsUUFBQUQsRUFBQUUsWUNMQWYsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGFBQUEsU0FBQSxXQUFBLFNBQUFDLEVBQUFhLEdBQ0FiLEVBQUFjLFFBQUEsV0FFQUQsRUFBQUUsUUFDQVIsU0FBQVAsRUFBQUksWUFBQUcsU0FDQVMsVUFBQWhCLEVBQUFnQixVQUNBQyxRQUFBakIsRUFBQWlCLFFBQ0FDLE9BQUFsQixFQUFBa0IsT0FDQUMsS0FBQW5CLEVBQUFtQixLQUNBQyxZQUFBcEIsRUFBQW9CLFlBQ0FDLE1BQUFyQixFQUFBcUIsTUFDQUMsTUFBQXRCLEVBQUFzQixRQUdBQyxRQUFBLFNBQUFDLEdBQ0F4QixFQUFBeUIsTUFBQUMsUUFBQUYsR0FDQXhCLEVBQUEyQixTQUFBLFFBS0FkLEVBQUFlLFFBQUFMLFFBQUEsU0FBQUUsR0FDQXpCLEVBQUF5QixNQUFBQSxPQ3ZCQTVCLFFBQUFDLE9BQUEsT0FDQStCLFFBQUEsWUFBQSxRQUFBLFNBQUFDLEdBQ0FDLEtBQUFILE1BQUEsV0FDQSxNQUFBRSxHQUFBRSxJQUFBLGVBRUFELEtBQUFoQixPQUFBLFNBQUFTLEdBQ0EsTUFBQU0sR0FBQU4sS0FBQSxhQUFBQSxPQ05BM0IsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGdCQUFBLFNBQUEsVUFBQSxTQUFBQyxFQUFBSyxHQUNBTCxFQUFBaUMsU0FBQSxTQUFBMUIsRUFBQUMsR0FDQUgsRUFBQTRCLFNBQUExQixFQUFBQyxPQ0hBWCxRQUFBQyxPQUFBLE9BQ0FvQyxRQUFBLGlCQUFBLG9CQUFBLFNBQUFDLEVBQUFDLEdBQ0FELEVBQ0FFLEtBQUEsS0FBQXRDLFdBQUEsWUFBQXVDLFlBQUEsZUFDQUQsS0FBQSxhQUFBdEMsV0FBQSxlQUFBdUMsWUFBQSxrQkFDQUQsS0FBQSxVQUFBdEMsV0FBQSxZQUFBdUMsWUFBQSxrQkNMQXpDLFFBQUFDLE9BQUEsT0FDQStCLFFBQUEsV0FBQSxRQUFBLFNBQUFDLEdBQ0EsR0FBQVMsR0FBQVIsSUFDQVEsR0FBQUMsUUFBQSxXQUNBLE1BQUFWLEdBQUFFLElBQUEsZUFFQU8sRUFBQWpDLE1BQUEsU0FBQUMsRUFBQUMsR0FDQSxNQUFBc0IsR0FBQU4sS0FBQSxpQkFDQWpCLFNBQUFBLEVBQUFDLFNBQUFBLElBQ0FDLEtBQUEsU0FBQWdDLEdBR0EsTUFGQUYsR0FBQUcsTUFBQUQsRUFBQTdCLEtBQ0FrQixFQUFBYSxTQUFBQyxRQUFBQyxPQUFBLFVBQUFKLEVBQUE3QixLQUNBMkIsRUFBQUMsYUFJQUQsRUFBQU4sU0FBQSxTQUFBMUIsRUFBQUMsR0FDQSxNQUFBc0IsR0FBQU4sS0FBQSxjQUNBakIsU0FBQUEsRUFBQUMsU0FBQUEsSUFDQUMsS0FBQSxTQUFBZ0MsR0FDQUYsRUFBQWpDLE1BQUFDLEVBQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnXSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICRzY29wZS4kb24oJ2xvZ2luJywgZnVuY3Rpb24gKF8sIHVzZXIpIHtcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyXG4gIH0pXG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcbiAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIFVzZXJTdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHJlc3BvbnNlLmRhdGEpXG4gICAgfSlcbiAgfVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBQb3N0c1N2Yykge1xuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgXG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xuICAgICAgICB1c2VybmFtZTogJHNjb3BlLmN1cnJlbnRVc2VyLnVzZXJuYW1lLFxuXHRcdGRlcGFydHVyZTogJHNjb3BlLmRlcGFydHVyZSxcblx0XHRhcnJpdmFsOiAkc2NvcGUuYXJyaXZhbCxcblx0XHRvcmlnaW46ICRzY29wZS5vcmlnaW4sXG5cdFx0ZGF5czogJHNjb3BlLmRheXMsXG5cdFx0ZGVzdGluYXRpb246ICRzY29wZS5kZXN0aW5hdGlvbixcblx0XHRzZWF0czogJHNjb3BlLnNlYXRzLFxuXHRcdG5vdGVzOiAkc2NvcGUubm90ZXNcbiAgICAgICAgXG5cdFx0XG4gICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHBvc3QpXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGxcbiAgICAgIH0pXG4gICAgXG4gIH1cblxuICBQb3N0c1N2Yy5mZXRjaCgpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3RzKSB7XG4gICAgJHNjb3BlLnBvc3RzID0gcG9zdHNcbiAgfSlcbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcbiAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJylcbiAgfVxuICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KVxuICB9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1JlZ2lzdGVyQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcbiAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIFVzZXJTdmMucmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgIFxuICB9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIsJGxvY2F0aW9uUHJvdmlkZXIgKSB7XG4gICRyb3V0ZVByb3ZpZGVyXG4gIC53aGVuKCcvJywgeyBjb250cm9sbGVyOiAnUG9zdHNDdHJsJywgdGVtcGxhdGVVcmw6ICdwb3N0cy5odG1sJyB9KVxuICAud2hlbignL3JlZ2lzdGVyJywgeyBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJywgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5odG1sJyB9KVxuICAud2hlbignL2xvZ2luJywgeyBjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJyB9KVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdVc2VyU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gIHZhciBzdmMgPSB0aGlzXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnKVxuICB9XG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSkudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgICBzdmMudG9rZW4gPSB2YWwuZGF0YVxuICAgICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQXV0aCddID0gdmFsLmRhdGFcbiAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpXG4gICAgfSlcbiAgfVxuICBcbiAgc3ZjLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzJywge1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmRcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRzdmMubG9naW4odXNlcm5hbWUscGFzc3dvcmQpO1xuICAgIH0pXG4gIH1cbn0pIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
