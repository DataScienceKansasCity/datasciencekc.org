# Contributing to Data Science Kansas City Website

We welcome contributions from the community! This document outlines how you can help improve the Data Science Kansas City website.

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **Content Updates** - Fix typos, update information, add new pages
- **Design Improvements** - Enhance styling, improve layout, add features
- **Technical Improvements** - Optimize performance, fix bugs, add functionality
- **Documentation** - Improve README, add comments, update guides
- **Accessibility** - Make the site more accessible to all users

## 🚀 Development Workflow

### Getting Started

1. **Fork the repository**
   - Click the "Fork" button on GitHub
   - Clone your fork locally:

     ```bash
     git clone https://github.com/YOUR_USERNAME/DataScienceKansasCity.github.io.git
     cd DataScienceKansasCity.github.io
     ```

2. **Set up your development environment**
   - Install Hugo (see [ARCHITECTURE.md](ARCHITECTURE.md) for instructions)
   - Run the development server:

     ```bash
     hugo server -D
     ```

3. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Edit files as needed
   - Test your changes locally
   - Ensure the site builds without errors

5. **Commit your changes**

   ```bash
   git add .
   git commit -m "Add your feature description"
   ```

6. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your feature branch
   - Write a clear description of your changes
   - Submit the PR

### Pull Request Guidelines

- **Clear Title** - Use a descriptive title for your PR
- **Detailed Description** - Explain what you changed and why
- **Testing** - Mention that you tested the changes locally
- **Screenshots** - Include screenshots for visual changes
- **Related Issues** - Link to any related issues

## 📝 Content Guidelines

### Writing Style

- Use clear, concise language
- Write for a general audience (avoid jargon when possible)
- Be inclusive and welcoming
- Use active voice when possible
- Keep paragraphs short and scannable

### Content Structure

- Include proper front matter for all pages
- Use descriptive headings and subheadings
- Break up long content with lists and sections
- Include relevant links and references
- Optimize for SEO with proper meta descriptions

### Images and Media

- Optimize images for web (compress when possible)
- Use descriptive alt text for accessibility
- Ensure images are properly licensed
- Keep file sizes reasonable for fast loading

### Links and References

- Test all links to ensure they work
- Use descriptive link text
- Include external links that open in new tabs when appropriate
- Verify that referenced resources are still available

## 💻 Code Guidelines

### HTML/CSS

- Use semantic HTML elements
- Write clean, readable CSS
- Follow responsive design principles
- Ensure cross-browser compatibility
- Test on different screen sizes

### Hugo Best Practices

- Follow Hugo's recommended file structure
- Use appropriate Hugo shortcodes
- Optimize for build performance
- Follow Hugo's content organization guidelines

### Accessibility

- Use proper heading hierarchy
- Include alt text for images
- Ensure sufficient color contrast
- Make sure the site is keyboard navigable
- Test with screen readers when possible

## 🧪 Testing

### Before Submitting

- [ ] Site builds without errors
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Site is responsive on different devices
- [ ] Content is free of typos
- [ ] Changes follow the established style

### Local Testing

```bash
# Build the site
hugo --minify

# Run the development server
hugo server -D

# Check for build errors
hugo --gc --minify
```

### Frontend E2E Testing

```bash
# Install JS dependencies
npm install

# Install Playwright browser runtime (first time only)
npx playwright install chromium

# Run end-to-end smoke tests (auto-starts Hugo on localhost:1313)
npm run test:e2e
```

## 📞 Getting Help

If you need help or have questions:

- **Email:** [dskc.group@gmail.com](mailto:dskc.group@gmail.com)
- **Slack:** [Data Science KC Slack](https://bit.ly/2p19KjT)
- **GitHub Issues:** Create an issue for bugs or feature requests

---

Thank you for contributing to the Data Science Kansas City website! Your help makes our community stronger.
