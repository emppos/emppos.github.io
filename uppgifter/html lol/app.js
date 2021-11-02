const linkParent = document.createElement('div');
linkParent.setAttribute('class', 'link-parent');
linkParent.append('Google: ');

const a = document.createElement('a');
a.setAttribute('href', 'https://google.com');
a.append('https://google.com');
linkParent.append(a);

document.body.append(linkParent);