# Thoughtable Backend

Thoughtable is an app for creating and
delivering collaborative virtual gift packages.

Users will register with their birth date and/or anniversaries/other
events along with certain bio details (background, hobbies, likes, and dislikes). They will
then join groups where this information becomes available to other group
members.

When a group member's event approaches, other
members of that group are prompted to upload images of theoretical gifts
they would give to that person (not to be actually purchased, so sky's the
limit).

On the date of the group member's milestone, they will be able to see the
virtual care package (aka Gift Gallery) and delight.

## Instructions

Play with the deployed backend here: https://thoughtable-backend.onrender.com

<img width="1000" alt="Screen Shot 2022-05-03 at 1 10 13 AM" src="https://user-images.githubusercontent.com/28247931/166407176-c7591eba-1531-447f-8eb4-e351365611b6.png"> 
(this is the sandbox you should see after clicking the "Query your Server" button)

If you use the interactive documentation on the Apollo Sandbox, you can see all of the working resolvers with their relationships.

<img width="1000" alt="Screen Shot of Queries Doc" src="https://user-images.githubusercontent.com/28247931/171343371-b27bfcf6-bbe1-42ef-9636-dd0ea4bf713e.png">

Here is an example query from the frontend that you can paste in to test things out:

```gql
query findEvent {
  event(id: 1) {
    id
    name
    month
    day
    owner {
      id
      firstName
      lastName
      avatarUrl
    }
    currentGiftGallery {
      id
      gifts {
        id
        imageUrl
        caption
        giver {
          id
          firstName
          lastName
          avatarUrl
        }
      }
    }
  }
}
```

## Steps to run this project locally:

1. You will need to install node, using v16.15.0
1. You also need [PostgreSQL](https://postgresapp.com/)
1. Run the following SQL to setup the database:
   ```sql
   CREATE DATABASE thoughtable;
   CREATE USER test WITH ENCRYPTED PASSWORD 'test';
   GRANT ALL PRIVILEGES ON DATABASE thoughtable TO test;
   ```
1. Run `npm i` command to install all the dependencies
1. Run `npm start` command to start the server
1. Go to http://localhost:4000/
1. There you will find the Apollo Sandbox, where GraphQL queries can be made

## Database Model

<img width=1000 src="https://user-images.githubusercontent.com/28247931/166184063-d9a6cdb1-5e69-42cc-bb5b-ad8dbac6b830.png">
