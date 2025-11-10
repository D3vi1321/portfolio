# Tushar Bharti - Portfolio Website

A modern, responsive portfolio website built with Java Spring Boot showcasing my skills as a Java Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Dynamic skill bars, project showcases, and contact form
- **Spring Boot Backend**: RESTful APIs for dynamic content and contact form handling
- **Database Integration**: H2 database for storing contact messages
- **Contact Form**: Fully functional contact form with validation and email notifications

## 🛠️ Tech Stack

### Backend
- **Java 17**
- **Spring Boot 3.1.5**
- **Spring Data JPA**
- **H2 Database**
- **Maven**
- **Thymeleaf**

### Frontend
- **HTML5**
- **CSS3** (Modern CSS with Flexbox/Grid)
- **JavaScript** (Vanilla JS with modern ES6+ features)
- **Font Awesome** (Icons)
- **Google Fonts** (Inter font family)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/tusharbharti/portfolio/
│   │   │       ├── PortfolioApplication.java
│   │   │       ├── controller/
│   │   │       │   └── PortfolioController.java
│   │   │       ├── model/
│   │   │       │   └── ContactMessage.java
│   │   │       ├── repository/
│   │   │       │   └── ContactMessageRepository.java
│   │   │       └── service/
│   │   │           └── ContactService.java
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── css/
│   │       │   │   └── style.css
│   │       │   └── js/
│   │       │       └── script.js
│   │       ├── templates/
│   │       │   └── index.html
│   │       └── application.properties
├── pom.xml
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Java 17 or higher
- Maven 3.6 or higher

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Build the project**
   ```bash
   mvn clean install
   ```

3. **Run the application**
   ```bash
   mvn spring-boot:run
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:8080`
   - The portfolio website will be available at the root URL

### Development Mode
For development with auto-reload:
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

## 🌐 API Endpoints

- `GET /` - Main portfolio page
- `GET /api/skills` - Get skills data (JSON)
- `GET /api/projects` - Get projects data (JSON)
- `POST /api/contact` - Submit contact form
- `GET /h2-console` - H2 database console (development only)

## 📊 Database

The application uses H2 in-memory database for development. Contact form submissions are stored in the `contact_messages` table.

### H2 Console Access
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:portfolio`
- Username: `sa`
- Password: (empty)

## 🎨 Customization

### Adding New Sections
1. Update the `PortfolioController.java` to add new API endpoints
2. Modify `index.html` to include new sections
3. Add corresponding styles in `style.css`
4. Update JavaScript in `script.js` for interactivity

### Styling
- Main styles are in `/src/main/resources/static/css/style.css`
- Uses CSS custom properties for easy theme customization
- Responsive design with mobile-first approach

## 🚀 Deployment

### Local Production Build
```bash
mvn clean package
java -jar target/portfolio-1.0.0.jar
```

### Environment Variables
For production deployment, set these environment variables:
- `SPRING_PROFILES_ACTIVE=prod`
- `SERVER_PORT=8080`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## ✨ Key Features Implemented

### Frontend Features
- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- Animated skill progress bars
- Interactive project cards
- Contact form with validation
- Loading states and success/error messages
- Parallax effects and scroll animations

### Backend Features
- RESTful API design
- Data validation
- Database persistence
- Error handling
- CORS configuration
- Development tools integration

## 🔧 Configuration

### Application Properties
Key configurations in `application.properties`:
- Server port and context path
- Database configuration
- JPA/Hibernate settings
- Thymeleaf template configuration
- Logging levels

## 📈 Performance Optimizations

- Minified CSS and JavaScript
- Optimized images and assets
- Efficient database queries
- Caching strategies
- Lazy loading for animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Tushar Bharti**
- Email: bhartitushar534@gmail.com
- Phone: +91 9717079665
- Location: Tilak Nagar, New Delhi
- LinkedIn: [linkedin.com/in/tushar-bharti](https://linkedin.com/in/tushar-bharti)
- GitHub: [github.com/tushar-bharti](https://github.com/tushar-bharti)

---

⭐ **Star this repository if you found it helpful!**
