package com.tusharbharti.portfolio.controller;

import com.tusharbharti.portfolio.model.ContactMessage;
import com.tusharbharti.portfolio.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
public class PortfolioController {

    @Autowired
    private ContactService contactService;

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("name", "Tushar Bharti");
        model.addAttribute("title", "Java Full Stack Developer");
        return "index";
    }

    @PostMapping("/api/contact")
    @ResponseBody
    public ResponseEntity<Map<String, String>> submitContact(@RequestBody ContactMessage contactMessage) {
        Map<String, String> response = new HashMap<>();
        
        try {
            contactService.saveContactMessage(contactMessage);
            response.put("status", "success");
            response.put("message", "Thank you for your message! I'll get back to you soon.");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", "Sorry, there was an error sending your message. Please try again.");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/api/skills")
    @ResponseBody
    public Map<String, Object> getSkills() {
        Map<String, Object> skills = new HashMap<>();
        
        Map<String, Integer> programmingLanguages = new HashMap<>();
        programmingLanguages.put("Java", 90);
        programmingLanguages.put("Python", 75);
        programmingLanguages.put("SQL", 80);
        programmingLanguages.put("JavaScript", 70);
        programmingLanguages.put("HTML/CSS", 85);
        
        Map<String, Integer> frameworks = new HashMap<>();
        frameworks.put("Spring Boot", 85);
        frameworks.put("Hibernate", 80);
        frameworks.put("Maven", 75);
        frameworks.put("JUnit", 70);
        frameworks.put("Selenium", 65);
        
        Map<String, Integer> tools = new HashMap<>();
        tools.put("IntelliJ IDEA", 90);
        tools.put("Eclipse", 85);
        tools.put("Git/GitHub", 80);
        tools.put("MySQL", 75);
        tools.put("VS Code", 70);
        
        skills.put("programmingLanguages", programmingLanguages);
        skills.put("frameworks", frameworks);
        skills.put("tools", tools);
        
        return skills;
    }

    @GetMapping("/api/projects")
    @ResponseBody
    public Map<String, Object> getProjects() {
        Map<String, Object> projects = new HashMap<>();
        
        Map<String, Object> project1 = new HashMap<>();
        project1.put("title", "Plant Disease Detection System");
        project1.put("description", "AI/ML system for identifying plant diseases using TensorFlow and OpenCV");
        project1.put("technologies", new String[]{"Python", "TensorFlow", "Keras", "OpenCV", "Machine Learning"});
        project1.put("highlights", new String[]{
            "Developed CNN models for disease classification",
            "Implemented data augmentation techniques",
            "Achieved high detection accuracy",
            "Promoted sustainable agriculture practices"
        });
        
        Map<String, Object> project2 = new HashMap<>();
        project2.put("title", "Java EE Authentication System");
        project2.put("description", "User login and registration system using Java Servlets and JSP");
        project2.put("technologies", new String[]{"Java", "Servlets", "JSP", "MySQL", "Eclipse IDE"});
        project2.put("highlights", new String[]{
            "Implemented secure user authentication",
            "Database connectivity with MySQL",
            "Responsive user interface",
            "Session management and validation"
        });
        
        Map<String, Object> project3 = new HashMap<>();
        project3.put("title", "Portfolio Website (Current)");
        project3.put("description", "Modern portfolio website built with Spring Boot and responsive design");
        project3.put("technologies", new String[]{"Java", "Spring Boot", "Thymeleaf", "HTML/CSS", "JavaScript"});
        project3.put("highlights", new String[]{
            "RESTful API development",
            "Responsive web design",
            "Contact form integration",
            "Modern UI/UX design"
        });
        
        projects.put("project1", project1);
        projects.put("project2", project2);
        projects.put("project3", project3);
        
        return projects;
    }
}
