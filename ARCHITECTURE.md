# Data Science Kansas City Website - Architecture

Technical documentation for the Data Science Kansas City website built with Hugo.

## 📋 Features

- **Fast Loading** - Static site generation for optimal performance
- **Easy to Update** - Simple markdown-based content management
- **Responsive Design** - Works on desktop, tablet, and mobile devices

## 🛠️ Technology Stack

- **Hugo** - Static site generator
- **Markdown** - Content authoring
- **CSS/HTML** - Styling and structure
- **Git** - Version control

## 📁 Project Structure

```
DataScienceKansasCity.github.io/
├── content/           # Website content (markdown files)
│   └── _index.md     # Homepage content
├── layouts/          # Hugo layout templates
├── static/           # Static assets (images, CSS, JS)
├── themes/           # Hugo themes
├── config/           # Hugo configuration
├── public/           # Generated site (gitignored)
└── README.md         # This file
```

## 🚀 Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (Extended version recommended)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DataScienceKansasCity/DataScienceKansasCity.github.io.git
   cd DataScienceKansasCity.github.io
   ```

2. **Install Hugo** (if not already installed)
   ```bash
   # On macOS with Homebrew
   brew install hugo

   # On Ubuntu/Debian
   sudo apt-get install hugo

   # On Windows with Chocolatey
   choco install hugo-extended
   ```

3. **Run the development server**
   ```bash
   hugo server -D
   ```

4. **View the site**
   Open your browser and navigate to `http://localhost:1313`

## 📝 Content Management

### Adding New Pages

1. Create a new markdown file in the `content/` directory
2. Add front matter at the top of the file:
   ```markdown
   ---
   title: "Page Title"
   description: "Page description for SEO"
   date: 2025-01-01
   ---
   ```
3. Add your content below the front matter

### Updating the Homepage

Edit `content/_index.md` to modify the homepage content. The file uses standard markdown with Hugo shortcodes for special features like YouTube embeds.

### Adding Images

1. Place images in the `static/` directory
2. Reference them in markdown using relative paths:
   ```markdown
   ![Alt text](/path/to/image.jpg)
   ```

## 🎨 Customization

### Themes

The site uses Hugo's default theme. To customize:

1. Create a new theme or modify an existing one
2. Update the theme configuration in `config.toml`
3. Customize layouts in `layouts/` directory

### Styling

- CSS files are located in `static/css/`
- Modify existing styles or add new ones as needed
- The site uses responsive design principles

## 🔧 Configuration

### Hugo Configuration

The main configuration file is `config.toml`. Key settings include:

- Site title and description
- Theme selection
- Build settings
- Menu configuration

### Environment Variables

Create a `.env` file for local development if needed:

```env
HUGO_ENV=development
HUGO_BASEURL=http://localhost:1313
```

## 🚀 Deployment

### GitHub Pages

This repository is configured for GitHub Pages deployment:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://datasciencekansascity.github.io`

### Manual Deployment

1. Build the site:
   ```bash
   hugo --minify
   ```

2. Deploy the contents of the `public/` directory to your web server

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.