
const bookModel = (sequqlize, DataTypes) => {
    const Book = sequqlize.define('book', {
        bookName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bookAuthor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookGenre: {
            type: DataTypes.STRING,
            allowNull: false
        },

    })
    return Book
}

module.exports = bookModel;
