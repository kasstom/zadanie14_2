var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        photo: 'https://unsplash.it/300/200?image=885'
    },
    {
        id: 2,
        title: 'Krol Lew',
        desc: 'film opowiadajacy historie krola sawanny',
        photo: 'https://unsplash.it/300/200?image=485'
    },
    {
        id: 3,
        title: 'Killer',
        desc: 'historia fajtulapy ktory zostaje wziętym płatnym zabójcą',
        photo: 'https://unsplash.it/300/200?image=125'
    },
    {
        id: 4,
        title: 'Titanic',
        desc: 'film o tragedii na oceanie',
        photo: 'https://unsplash.it/300/200?image=471'
    }

];

var moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.photo}, )
    );
});

var element = React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);
        

ReactDOM.render(element, document.getElementById('app'));