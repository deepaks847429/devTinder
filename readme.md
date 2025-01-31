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
