/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/killinq-joke')
.then(response => {
console.log(response.data);
}).catch(error => {
  console.log(error);
})
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [{
  "login": "Aliszl",
  "id": 49616222,
  "node_id": "MDQ6VXNlcjQ5NjE2MjIy",
  "avatar_url": "https://avatars3.githubusercontent.com/u/49616222?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Aliszl",
  "html_url": "https://github.com/Aliszl",
  "followers_url": "https://api.github.com/users/Aliszl/followers",
  "following_url": "https://api.github.com/users/Aliszl/following{/other_user}",
  "gists_url": "https://api.github.com/users/Aliszl/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Aliszl/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Aliszl/subscriptions",
  "organizations_url": "https://api.github.com/users/Aliszl/orgs",
  "repos_url": "https://api.github.com/users/Aliszl/repos",
  "events_url": "https://api.github.com/users/Aliszl/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Aliszl/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "lqtm",
  "id": 15243490,
  "node_id": "MDQ6VXNlcjE1MjQzNDkw",
  "avatar_url": "https://avatars0.githubusercontent.com/u/15243490?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/lqtm",
  "html_url": "https://github.com/lqtm",
  "followers_url": "https://api.github.com/users/lqtm/followers",
  "following_url": "https://api.github.com/users/lqtm/following{/other_user}",
  "gists_url": "https://api.github.com/users/lqtm/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/lqtm/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/lqtm/subscriptions",
  "organizations_url": "https://api.github.com/users/lqtm/orgs",
  "repos_url": "https://api.github.com/users/lqtm/repos",
  "events_url": "https://api.github.com/users/lqtm/events{/privacy}",
  "received_events_url": "https://api.github.com/users/lqtm/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "NabeelahY",
  "id": 35764602,
  "node_id": "MDQ6VXNlcjM1NzY0NjAy",
  "avatar_url": "https://avatars1.githubusercontent.com/u/35764602?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/NabeelahY",
  "html_url": "https://github.com/NabeelahY",
  "followers_url": "https://api.github.com/users/NabeelahY/followers",
  "following_url": "https://api.github.com/users/NabeelahY/following{/other_user}",
  "gists_url": "https://api.github.com/users/NabeelahY/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/NabeelahY/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/NabeelahY/subscriptions",
  "organizations_url": "https://api.github.com/users/NabeelahY/orgs",
  "repos_url": "https://api.github.com/users/NabeelahY/repos",
  "events_url": "https://api.github.com/users/NabeelahY/events{/privacy}",
  "received_events_url": "https://api.github.com/users/NabeelahY/received_events",
  "type": "User",
  "site_admin": false
}];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(dataArg) {
  const card = document.createElement('div');
  const avatar = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.append(avatar);
  card.append(cardInfo);
  cardInfo.append(name);
  cardInfo.append(username);
  cardInfo.append(location);
  cardInfo.append(profile);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  avatar.src = dataArg.avatar_url;
  name.textContent = dataArg.name;
  username.textContent = dataArg.login;
  location.textContent = `Location: ${dataArg.location}`;
  address.href = dataArg.url;
  profile.textContent = `Profile: `;
  profile.append(address);
  address.textContent = dataArg.url;
  followers.textContent = `Followers: ${dataArg.followers}`;
  following.textContent = `Following: ${dataArg.following}`;
  bio.textContent = `Bio: ${dataArg.bio}`;

  return card;
}

const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/killinq-joke')
.then(response => {
  console.log(createCard(response.data)); 
  cards.append(createCard(response.data));
}).catch(error => {
  console.log(error);
})


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
