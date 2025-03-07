# DevTinder
- Requirements(project manager)
- design (senior engineers/ engineering managers)
- Development(SDE1/SDE2)
- Testing(SDET)
- Deployment(Devops engineer)
- Maintance(Waterfall model) SDLC

# Monolithic and microservice
- Dev speed      Fault isolation
- Code Repo      Testing
- Scalability    Ownership
- Deployment     Dev Experience
- Tech stack     Maintainence
- Infra cost     Rewamps
- Complexity     Debugging

- we will be making two seprate microservice one frontend(react) and other is backend(backend).

# DevTinder Feature
- Create an account
- Login
- Update your profile
- Feed page
- Send connection request
- See Our matches
- See the request we have sent and received
- Update your profile

# LLD
- DB design
- User :-
  - first namne
  - last name
  - emailId
  - password
  - age
  - gender

- Connection Request :-
  - from UserId
  - to UserId
  - status - pending, accepted, rejected, ignored.

# API Design(REST API)
- GET
- POST
- PUT(Update the data)
- PATCH
- DELETE (HTTP method)
- "PUT" means completely replacing an entire resource with new  data, while "PATCH" means partially updating a resource by modifying only specific fields within it

- post /signup
- post /login
- get /profile
- post /profile
- patch /profile
- delete /profilr
- post /sendrequest -ignore, intrest
- post /reviewrequest - accept, reject
- get /request
- get /connection 
- order is very important in code, and routes.

# ROUTING ADVANCE CONCEPTS
- "/ab?c" - here b is optional.
- "/ab+c" - a and c b in last and can be any numbe of b.
- "/ab*cd" - ab should be in start and cd should be in end and anything can be in between.

- regex magic - (/a/) - if in path a comes it will work.
- (/.*fly$/) - anything will work which ends with fly.

# Multiple route handler
- next();
- next function and errors along with res.send()
- app.use("/route", rH, [rh2, rh3], rh4, rh5);
- what is middleware?
- How express js basically handles requests behind the scenes.


# all api of devtinder
### (Auth router)
- POST/signup
- POST/login
- POST/logout

## (profile router)
- GET/profile
- PATCH/updateprofile
- patch/profile/password

## (connectionrequest router)
- POST/request/send/interested/:userId
- POST/request/send/ignored/:userId
- POST /request/review/accepted/:requestId;
- POST /request/review/rejected/:requestId

## (userRouter)
- GET/user/connections
- GET/user/requests/received
- GET/user/feed - gets you the profile of other user
