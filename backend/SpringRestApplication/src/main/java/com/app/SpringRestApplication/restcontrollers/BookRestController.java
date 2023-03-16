/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.app.SpringRestApplication.restcontrollers;

import com.app.SpringRestApplication.enities.Book;
import com.app.SpringRestApplication.services.BookService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Jacob
 */
@RestController
public class BookRestController {
    
    @Autowired
    BookService bookService;
    
    @CrossOrigin()
    @PostMapping("books/add")
    public ResponseEntity<String> addBook(@RequestBody Book book){
        
        bookService.addBook(book);
        
        return ResponseEntity.accepted().body("Book has been added!");
    }
    @CrossOrigin()
    @GetMapping("/books/get/all")
    public List<Book> getBooks(){
        return bookService.getAllBooks();
    }
    @CrossOrigin()
    @PostMapping("/books/delete/{id}")
    public ResponseEntity<String> deleteBookById(@PathVariable String id){
        bookService.deleteBookById(id);
        return ResponseEntity.accepted().body("Book has been deleted!");
    }
    @CrossOrigin()
    @GetMapping("/books/get/{id}")
    public Book getBookById(@PathVariable String id){
        return bookService.getBookById(id);
    }
    @CrossOrigin()
    @GetMapping("books/search/author/{author}")
    public List<Book> getBooksByAuthor (@PathVariable String author){
        return bookService.findBooksByAuthor(author);
    }
    @CrossOrigin()
    @GetMapping("books/search/title/{title}")
    public List<Book> getBooksByTitle(@PathVariable String title){
        return bookService.findBooksbyTitle(title);
    }
    
}
