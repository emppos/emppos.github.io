document.body.appendChild( createPostElement('Alma', 'Andersson', 'alma', new Date(), 'Hej på dig!') );
document.body.appendChild( createPostElement('Pelle', 'Pärsson', 'pelle', new Date(), 'Jag är pelle..') );

function createPostElement(firstname, lastname, username){
const post = document.createElement('div');
const postMeta = document.createElement('div');
const a = document.createElement('a');
const i = document.createElement('i');
const span = document.createElement('span');
const postContent = document.createElement('div');

post.id = 'post';
postMeta.id = 'post-meta';
postContent.id = 'post-content';

a.textContent = firstname + lastname;
i.textContent = '@alma'
span.textContent = '2021-09-24 08:38:23';
postContent.textContent = 'Hej på dig!';
post.append(postMeta);
postMeta.append(a);
a.append(i);
postMeta.append(span);
post.append(postContent);
return post;
}