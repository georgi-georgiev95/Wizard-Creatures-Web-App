# Cheat Sheet

1. Initialize project - OK
2. Install & setup express - OK
    * add routes
    * add body parser
    * add static route
3. Add view engine: express-handlebars - OK
    * register with express
    * add views folder
    * add home template 
    * add main layout
    * add partial template folder
4. Add home controller - OK
    * add controller to routes
5. Connect database - OK
    * set strict query / deprecation warning
6. Authentication - OK
    * fix html links in layout
    * add auth controller
    * add reigster page
    * add login page
7. Add user model - OK
8. Add auth service - OK
9. Install bcrypt and cookie-parser and configure - OK
10. Register user - OK
    * validate repeat password
    * check if user exists
    * use bcrypt to hash password
11. Login user - OK
    * check if user exists
    * check if password is valid
12. Generate jwt token - OK
    * OPTIONAL: use util.promisify to use async
    * generate token with payload
    * add token to cookie
13. Add authentication middleware - OK
    * add decoded token to request
    * use authentication middleware
14. Logout - OK
15. Authorization middleware - OK
16. Dynamic navigation - OK
17. Error handling (local error handling) - OK
18. Add error notification to main layout - OK
19. Login automatically after register - OK
20. Parse errors - OK