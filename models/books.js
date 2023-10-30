module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      published_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },

      genre: {
        type: DataTypes.STRING,
        allowNull: true 
      }
    });
  
    return Book;
  };
  