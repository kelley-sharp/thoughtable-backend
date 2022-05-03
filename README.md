# Thoughtable Backend

Thoughtable is an app for creating and
delivering collaborative virtual gift packages.

Users will register with their birthdate and/or anniversaries/other
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

<img width="1437" alt="Screen Shot 2022-05-03 at 1 10 13 AM" src="https://user-images.githubusercontent.com/28247931/166407176-c7591eba-1531-447f-8eb4-e351365611b6.png"> (this is the sandbox you should see after clicking the "Query your Server" button)

The migrations are unfinished (Create Update and Delete functionality), but many Read queries have been implemented.

Since I have not written resolvers for more than just Reading the main entities, any fields that are in place because of a relationship can not be queried yet.

The working queries are the following.

### Users

```
{
  users {
    id
    createdDate
    email
    firstName
    lastName
  }
}
```
There is a placeholder for the user's password in the "password" field, but that will be hashed and inaccessible of course in production.

### Groups

```
{
  groups {
    id
    name
  }
}
```
### BioDetails

```
{
  bioDetails {
    id
    type
    text
  }
}
```

### Events

```
{
  events {
    id
    name
    month
    day
    repeatsAnnually
  }
}
```

### GiftGalleries

Not implemented yet

### Gifts

Not implemented yet

## Steps to run this project locally:

1. You will need to install node, using v16.15.0
2. Run `npm i` command to install all the dependencies
3. Run `npm start` command to start the server
4. Go to http://localhost:4000/
5. There you will find the Apollo Sandbox, where GraphQL queries can be made

## Database Model

![thoughtable_db](https://user-images.githubusercontent.com/28247931/166184063-d9a6cdb1-5e69-42cc-bb5b-ad8dbac6b830.png)


