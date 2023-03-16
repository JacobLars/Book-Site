
package com.app.SpringRestApplication.services;

import com.app.SpringRestApplication.enities.Book;
import com.app.SpringRestApplication.repositories.BookRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Jacob
 */
@Service
public class BookService {
    
    
    @Autowired
    BookRepository bookRepository;
    
    
    public void addBook(Book book){

        bookRepository.save(book);
    }
    
    public List<Book> getAllBooks(){

        return bookRepository.findAll();
    }
    
    public void deleteBookById(String id){
        bookRepository.deleteById(id);
    }
    
    public Book getBookById(String id){
       return bookRepository.findById(id).get();
    }
    
    public List<Book> findBooksByAuthor(String author){
        return bookRepository.findBooksByAuthor(author);
    }
    
    
    public List<Book> findBooksbyTitle(String title){
        return bookRepository.findBooksByTitle(title);
    }
}
