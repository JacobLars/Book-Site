package com.app.SpringRestApplication.enities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.GenericGenerator;

/**
 *
 * @author Jacob
 */
@Entity
public class Book {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(updatable = false, nullable = false)
    private String bookId;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String shortDescription;
    @Column(columnDefinition = "TEXT")
    private String longDescription;
    private String year;
    private String cover;
    private String author;
    

    public Book() {
    }

    public Book(String bookId, String title, String shortDescription, String longDescription, String releaseYear, String cover, String author) {
        this.bookId = bookId;
        this.title = title;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.year = releaseYear;
        this.cover = cover;
        this.author = author;
    }

    
    
    
    public String getBookId() {
        return bookId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String releaseYear) {
        this.year = releaseYear;
    }
    
    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

}
