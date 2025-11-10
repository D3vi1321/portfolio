package com.tusharbharti.portfolio.service;

import com.tusharbharti.portfolio.model.ContactMessage;
import com.tusharbharti.portfolio.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ContactService {
    
    @Autowired
    private ContactMessageRepository contactMessageRepository;
    
    public ContactMessage saveContactMessage(ContactMessage contactMessage) {
        return contactMessageRepository.save(contactMessage);
    }
    
    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAll();
    }
    
    public List<ContactMessage> getMessagesByEmail(String email) {
        return contactMessageRepository.findByEmailOrderByCreatedAtDesc(email);
    }
    
    public long getMessageCountSince(LocalDateTime dateTime) {
        return contactMessageRepository.countByCreatedAtAfter(dateTime);
    }
    
    public List<ContactMessage> getMessagesBetween(LocalDateTime start, LocalDateTime end) {
        return contactMessageRepository.findByCreatedAtBetween(start, end);
    }
}
