
package com.app.SpringRestApplication.repositories;

import com.app.SpringRestApplication.enities.Book;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Jacob
 */
@Repository
public interface BookRepository extends JpaRepository<Book, String>{
    
    
    @Query("SELECT b FROM Book b WHERE b.author LIKE %:author%")
    List<Book> findBooksByAuthor(@Param("author") String author);
            
    @Query("SELECT b FROM Book b WHERE b.title LIKE %:title%")
    List<Book> findBooksByTitle(@Param("title") String title);
    
}
