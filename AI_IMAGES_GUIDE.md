# AI-Generated Images Guide

This guide explains how to add real AI-generated images to the AI Scholars Lab website.

## Free AI Image Generation Services

### 1. **Unsplash (Free Stock Photos)**
- https://unsplash.com
- Search: "AI", "technology", "coding", "research"
- Free for commercial use
- Download and add to `/public/images/`

### 2. **Pexels (Free Stock Photos)**
- https://pexels.com
- Search relevant AI/tech terms
- Free license

### 3. **Free Tier AI Image Generators**

#### Clipdrop (Free)
- https://clipdrop.co/
- Text-to-image generation
- Free tier available

#### Leonardo.AI (Free)
- https://leonardo.ai/
- AI image generation
- Free credits monthly

#### Stable Diffusion (Open Source)
- Use locally or via services
- Free to use
- Full control over prompts

## Best Prompts for AI Scholars Lab

### Hero Section
```
"Futuristic AI neural network, neon cyan and purple, professional, clean design,
high tech atmosphere, abstract technology visualization"
```

### Building Products Section
```
"Software developer working on AI project, clean workspace, modern setup,
bright screens, professional atmosphere, tech company office"
```

### Research Section
```
"Research scientist analyzing data, charts and graphs, AI model training,
data visualization, laboratory setting, professional"
```

### Team/Culture
```
"Diverse team of young programmers collaborating on AI project, modern office,
whiteboard with code, tech startup atmosphere, energetic"
```

### Outcomes/Achievement
```
"Student coding award-winning AI project, proud moment, modern technology,
achievement celebration, professional portfolio"
```

## Directory Structure

```
public/images/
├── hero/
│   ├── ai-neural-network.svg          (Neural network visualization)
│   ├── hero-background.png            (Full hero image)
│   └── hero-overlay.png               (Optional overlay)
├── sections/
│   ├── building-blocks.svg             (Product building)
│   ├── research-analytics.svg          (Research data)
│   ├── code-editor.svg                 (Coding theme)
│   ├── team-collaboration.png         (Team image)
│   └── student-ai-project.png         (Student with project)
├── cards/
│   ├── product-track.png              (Product track image)
│   ├── research-track.png             (Research track image)
│   └── outcome-*.png                  (Individual outcomes)
└── illustrations/
    ├── 404-illustration.svg           (For 404 page)
    └── success-celebrating.png        (Success/achievement)
```

## How to Use Images in Components

### Using ResponsiveImage Component

```jsx
import ResponsiveImage from "../components/ui/ResponsiveImage";

export default function MyPage() {
  return (
    <ResponsiveImage
      src="/images/sections/research-analytics.svg"
      alt="Research analytics visualization"
      width={600}
      height={400}
      className="rounded-lg shadow-lg"
      hover={true}
      delay={0.2}
    />
  );
}
```

### Image Optimization Tips

1. **Formats**
   - SVG: Vector illustrations (scalable, small size)
   - PNG: Complex images with transparency
   - WebP: Modern format for photos (better compression)
   - JPG: Photographs without transparency

2. **Size Guidelines**
   - Hero images: 1200x800px (150KB max)
   - Section images: 600x400px (80KB max)
   - Card images: 400x300px (50KB max)
   - SVG: Usually <20KB

3. **Responsive Images**
   - Always use `width` and `height` props
   - Use `object-cover` for consistent aspect ratio
   - Test on mobile devices

4. **Performance**
   - Use lazy loading (default in ResponsiveImage)
   - Optimize images with TinyPNG
   - Use SVG for illustrations (small file size)
   - Consider Next.js Image component for production

## Current SVG Illustrations

The website includes the following AI-themed SVG illustrations (no AI service needed):

1. **ai-neural-network.svg** - Neural network with nodes and connections
2. **building-blocks.svg** - Stacked code blocks representing product building
3. **research-analytics.svg** - Data visualization with bars and trend line
4. **code-editor.svg** - Code editor window with syntax highlighting

## Recommended Next Steps

1. **Download Quality Images**
   - Use one of the free services above
   - Download high-resolution versions
   - Organize by section

2. **Optimize Images**
   - Resize to recommended dimensions
   - Compress with TinyPNG (https://tinypng.com)
   - Add to `/public/images/` directory

3. **Update Components**
   - Replace SVG placeholders with real images
   - Update `src` paths in components
   - Test responsive behavior

4. **Verify Performance**
   - Run Lighthouse audit
   - Check image load times
   - Ensure mobile optimization

## Example: Adding a Hero Image

1. **Generate/Download Image**
   - Size: 1200x800px
   - Filename: `hero-main.png`

2. **Add to Project**
   ```bash
   cp hero-main.png public/images/hero/
   ```

3. **Update Hero Component**
   ```jsx
   <ResponsiveImage
     src="/images/hero/hero-main.png"
     alt="AI futuristic technology"
     width={1200}
     height={800}
     priority={true}
     hover={true}
   />
   ```

## License Checklist

- ✅ Unsplash - Free for commercial use
- ✅ Pexels - Free for commercial use
- ✅ Pixabay - Free for commercial use
- ✅ Custom AI Generated - You own the rights
- ⚠️ Always check license before using any image

## Questions?

For more info:
- Unsplash Docs: https://unsplash.com/napi/guidelines
- Image Optimization: https://web.dev/image-optimization/
- SVG Best Practices: https://www.w3.org/TR/SVG2/
