const data = [
	{
		id: 1,
		title: 'The Lord of the Rings',
		publicationDate: '1954-07-29',
		author: 'J. R. R. Tolkien',
		genres: ['fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature'],
		hasMovieAdaptation: true,
		pages: 1216,
		translations: {
			spanish: 'El señor de los anillos',
			chinese: '魔戒',
			french: 'Le Seigneur des anneaux',
		},
		reviews: {
			goodreads: {
				rating: 4.52,
				ratingsCount: 630994,
				reviewsCount: 13417,
			},
			librarything: {
				rating: 4.53,
				ratingsCount: 47166,
				reviewsCount: 452,
			},
		},
	},
	{
		id: 2,
		title: 'The Cyberiad',
		publicationDate: '1965-01-01',
		author: 'Stanislaw Lem',
		genres: ['science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy'],
		hasMovieAdaptation: false,
		pages: 295,
		translations: {},
		reviews: {
			goodreads: {
				rating: 4.16,
				ratingsCount: 11663,
				reviewsCount: 812,
			},
			librarything: {
				rating: 4.13,
				ratingsCount: 2434,
				reviewsCount: 0,
			},
		},
	},
	{
		id: 3,
		title: 'Dune',
		publicationDate: '1965-01-01',
		author: 'Frank Herbert',
		genres: ['science fiction', 'novel', 'adventure'],
		hasMovieAdaptation: true,
		pages: 658,
		translations: {
			spanish: '',
		},
		reviews: {
			goodreads: {
				rating: 4.25,
				ratingsCount: 1142893,
				reviewsCount: 49701,
			},
		},
	},
	{
		id: 4,
		title: "Harry Potter and the Philosopher's Stone",
		publicationDate: '1997-06-26',
		author: 'J. K. Rowling',
		genres: ['fantasy', 'adventure'],
		hasMovieAdaptation: true,
		pages: 223,
		translations: {
			spanish: 'Harry Potter y la piedra filosofal',
			korean: '해리 포터와 마법사의 돌',
			bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
			portuguese: 'Harry Potter e a Pedra Filosofal',
		},
		reviews: {
			goodreads: {
				rating: 4.47,
				ratingsCount: 8910059,
				reviewsCount: 140625,
			},
			librarything: {
				rating: 4.29,
				ratingsCount: 120941,
				reviewsCount: 1960,
			},
		},
	},
	{
		id: 5,
		title: 'A Game of Thrones',
		publicationDate: '1996-08-01',
		author: 'George R. R. Martin',
		genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
		hasMovieAdaptation: true,
		pages: 835,
		translations: {
			korean: '왕좌의 게임',
			polish: 'Gra o tron',
			portuguese: 'A Guerra dos Tronos',
			spanish: 'Juego de tronos',
		},
		reviews: {
			goodreads: {
				rating: 4.44,
				ratingsCount: 2295233,
				reviewsCount: 59058,
			},
			librarything: {
				rating: 4.36,
				ratingsCount: 38358,
				reviewsCount: 1095,
			},
		},
	},
]

function getBooks() {
	return data
}

function getBook(id) {
	return data.find(d => d.id === id)
}

//Destructuring
/*
const book = getBook(3)

//const title = book.title;
//const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book
console.log(title, author, genres)

//const primaryGenre = genres[0];
//const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres
console.log(primaryGenre, secondaryGenre, otherGenres)

//...spread

const newGenres = [...genres, 'epic fantasy']
newGenres

const updatedBook = { ...book, moviePublicationDate: '2001-12-19', pages: 1210 }
updatedBook

// Template Literals
const summary = `${title}, a ${pages}-page long is a book, was written by ${author}, and published in ${
	publicationDate.split('-')[0]
}. The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a move`
summary

//Operator trójargumentowy

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000'
pagesRange

//Arrow functions

//function getYear(str) {
//	return str.split('-')[0]       //deklaracja funkcji
//}
//console.log(getYear(publicationDate))

const getYear = str => str.split('-')[0] //wyrazenie funkcyjne

console.log(getYear(publicationDate))

//opertatory

//&&
// gdy jest true - dostajemy w odpowiedzi drugą wartość
//gdy jest false otrzymuemy pierwszą wartość

console.log(true && 'Some string')
console.log(false && 'Some string')
console.log(hasMovieAdaptation && 'This book has a movie')

// falsy: 0, ', null, undefined
console.log('jonas' && 'some string')
console.log(0 && 'some strig')

// || lub

//gdy jest true, zwraca pierwszą wartość

console.log(true || 'some string')
console.log(false || 'some string')

console.log(book.translations.spanish)

const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED'
spanishTranslation

//console.log(book.reviews.librarything.reviewsCount)
//const countWrong = book.reviews.librarything.reviewsCount || 'no data' //gdy w pierwszym członie jest 0 (czyli falsy- odpowiedż wskazuje na 'no data' co nie jest //prawdą, bo 0 to wynik poprawny)
//countWrong

//// ABY UWZGLĘDNIĆ 0!!!!!!!

//const count = book.reviews.librarything.reviewsCount ?? 'no data' // ?? zwraca drugą wartość gdy wynik to null lub undefined
//count

// chainig operator

function getTotalReviewCount(book) {
	const goodreads = book.reviews.goodreads.reviewsCount
	const librarything = book.reviews.librarything?.reviewsCount ?? 0
	librarything
	return goodreads + librarything
}
console.log(getTotalReviewCount(book));

*/

//MAP method

/*
function getTotalReviewCount(book) {
	const goodreads = book.reviews.goodreads.reviewsCount
	const librarything = book.reviews.librarything?.reviewsCount ?? 0
	librarything
	return goodreads + librarything
}

const books = getBooks()
const x = [1, 2, 3, 4, 5].map(el => el * 2)
console.log(x)

const titles = books.map(book => book.title)
console.log(titles)

const essentialData = books.map(book => ({
	title: book.author,
	author: book.author,
	reviewsCount: getTotalReviewCount(book),
}))
console.log(essentialData)

// FILTER method

const longBooks = books.filter(book => book.pages > 500).filter(book => book.hasMovieAdaptation)
longBooks

const adventureBooks = books.filter(books => books.genres.includes('adventure')).map(book => book.title)
adventureBooks

// REDUCE method

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0)
pagesAllBooks

// SORT method - mutuhe orginalną tablicę, ale jest sztuczka

const xx = [3, 7, 1, 9, 6]

const sorted = xx.slice().sort((a, b) => a - b)
sorted
xx

//tworzymy kopię tablicy poprzed sosanie metody slice()

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages)
sortedByPages

// Dodawanie obiektu

const newBook = {
	id: 6,
	title: 'Harry Potter and the Chamber of Secrets',
	author: 'J.K.Rowling',
}

const booksAfterAdd = [...books, newBook]
booksAfterAdd

// Usuwanie obiektu

const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3)
booksAfterDelete

// Aktualizowanie objektu

const booksAfterUpdate = booksAfterDelete.map(book => (book.id === 1 ? { ...book, pages: 300 } : book))
booksAfterUpdate
 */

//fetch('https://jsonplaceholder.typicode.com/todos')
//	.then(res => res.json())
//	.then(data => console.log(data))
//console.log('jonas')

async function getTodos() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos')
	const data = await res.json()
	console.log(data)

	const todos = getTodos()
	console.log(todos)
}
