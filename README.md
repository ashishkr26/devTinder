** Dev  Tinder - 

    * Features
        * Sign Up/ Create an Account
        * Login
        * Update the Profile
        * Feed Page
        * Send Connection request
        * See the sent matches
        * See the recieved request
        * Update your Profile

*********--------------------------------**********
    * Planning
        * Services
            * Frontend UI _ react
            * Backend - Node Js.
                      - Database - Mongo DB
        *  Hosting
            * Firebase


*********--------------------------------**********
    * Low Level Design
        * DB - Design
                * User Collection * Fields
                                  * firstName
                                  * lastName
                                  * Age
                                  * emailId
                                  * Password
                                  * gender
                                  * ProfilePicture

                * Connections
                    * fromUserId - Send Request         
                    * toUserId - Receive Request
                    * connection status
                        * Pending           * Passover
                            * rejected
                            * ignored

        * API Designs
                * POST / Signup
                * Post /Login
                * GET/ Profile
                * POST/ Profile
                * PATCH/ Profile
                * DELETE / Profile
                * POST / Send Request ->
                                        * Ignore
                                        * Interested

                * POST/ Review Pending Request->
                                        * Accept
                                        * Reject
                * GET / AllIncomingRequest
                * GET/ AllConnections
    


                        
