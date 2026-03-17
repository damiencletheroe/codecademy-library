# codecademy-library
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project, you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

## Book
### Properties:
_author (string), _title (string), _pages (number), _isCheckedOut (boolean, initially false), and _ratings (array, initially empty).
### Getters:
all properties have a getter
### Methods:
.getAverageRating(), .toggleCheckOutStatus(), and .addRating()

## Movie
### Properties:
_director (string), _title (string), _runTime (number), _isCheckedOut (boolean, initially false), and _ratings (array, initially empty)
### Getters:
all properties have a getter
### Methods:
.getAverageRating(), .toggleCheckOutStatus(), and .addRating()

## CD
#### Properties:
_artist (string), _title (string), _isCheckedOut (boolean, initially false), _ratings (array, initially empty), and _songs (array of strings)
### Getters:
all properties have a getter
### Methods:
.getAverageRating(), .toggleCheckOutStatus(), and .addRating()