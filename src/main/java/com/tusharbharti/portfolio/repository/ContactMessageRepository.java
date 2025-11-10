package com.tusharbharti.portfolio.repository;

import com.tusharbharti.portfolio.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
    
    List<ContactMessage> findByEmailOrderByCreatedAtDesc(String email);
    
    List<ContactMessage> findByCreatedAtBetween(LocalDateTime start, LocalDateTime end);
    
    long countByCreatedAtAfter(LocalDateTime dateTime);
}
