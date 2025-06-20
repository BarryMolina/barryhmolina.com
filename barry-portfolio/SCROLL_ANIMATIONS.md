# Scroll Animations Guide

This guide explains the scroll animations implemented in your portfolio using [Motion](https://motion.dev/docs/react-quick-start) (the new Framer Motion).

## 🎯 What's Been Added

### 1. **ScrollAnimation Component** (`src/components/scroll-animation.tsx`)

A reusable component that animates elements when they come into view.

### 2. **StaggeredAnimation Component** (`src/components/staggered-animation.tsx`)

Animates multiple children with a staggered delay effect, perfect for lists and grids.

### 3. **Enhanced Hero Section**

Added entrance animations to the hero section for a more engaging first impression.

### 4. **Updated Main Page**

Wrapped all sections with scroll animations for a smooth scrolling experience.

## 🚀 How to Use

### Basic Scroll Animation

```tsx
import { ScrollAnimation } from "@/components/scroll-animation";

<ScrollAnimation animation="fadeUp" delay={0.2}>
  <YourComponent />
</ScrollAnimation>;
```

### Available Animation Types

- `fadeUp` - Fades in and slides up from bottom
- `fadeIn` - Simple fade in
- `slideInLeft` - Slides in from the left
- `slideInRight` - Slides in from the right
- `scaleIn` - Scales up from smaller size
- `rotateIn` - Rotates and scales in

### Staggered Animations for Lists/Grids

```tsx
import { StaggeredAnimation } from "@/components/staggered-animation";

<StaggeredAnimation
  className="grid grid-cols-3 gap-4"
  animation="fadeUp"
  staggerDelay={0.1}
>
  {items.map((item, index) => (
    <ItemCard key={index} item={item} />
  ))}
</StaggeredAnimation>;
```

### Customizing Animations

```tsx
<ScrollAnimation
  animation="fadeUp"
  delay={0.3} // Delay before animation starts
  duration={0.8} // Animation duration
  threshold={0.2} // How much of element must be visible (0-1)
>
  <YourContent />
</ScrollAnimation>
```

## 🎨 Animation Examples

### Hero Section Entrance

- Text slides in from left with staggered delays
- Geometric element scales and rotates in
- Arrow appears with bounce animation

### Section Transitions

- Each section fades up as you scroll
- Different delays create a natural flow
- Smooth easing for professional feel

### Project Cards

- Cards animate in with staggered effect
- Each card appears 0.15s after the previous
- Creates a wave-like animation effect

## 🔧 Customization Options

### Easing Functions

The animations use `"easeOut"` for smooth, natural movement. You can change this to:

- `"easeIn"`
- `"easeInOut"`
- `"linear"`
- Custom cubic-bezier arrays

### Threshold Values

- `0.1` (default) - Element animates when 10% visible
- `0.5` - Element animates when 50% visible
- `1.0` - Element animates when fully visible

### Stagger Delays

- `0.1` - Quick succession
- `0.2` - Medium spacing
- `0.3` - Slower, more dramatic effect

## 🎯 Best Practices

1. **Don't Overdo It** - Use animations sparingly for maximum impact
2. **Respect User Preferences** - Motion respects `prefers-reduced-motion`
3. **Performance** - Animations only run when elements are in view
4. **Accessibility** - All animations are keyboard and screen reader friendly

## 🚀 Adding to New Components

### For Single Elements

```tsx
import { ScrollAnimation } from "@/components/scroll-animation";

export function MyComponent() {
  return (
    <ScrollAnimation animation="fadeUp">
      <div>Your content here</div>
    </ScrollAnimation>
  );
}
```

### For Lists/Grids

```tsx
import { StaggeredAnimation } from "@/components/staggered-animation";

export function MyList() {
  return (
    <StaggeredAnimation animation="slideInLeft" staggerDelay={0.1}>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </StaggeredAnimation>
  );
}
```

## 🎨 Creating Custom Animations

You can extend the animation types by modifying the `animations` object in either component:

```tsx
const animations = {
  // ... existing animations
  customAnimation: {
    initial: { opacity: 0, scale: 0.5, rotate: 180 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
  },
};
```

## 📱 Mobile Considerations

- Animations are optimized for mobile performance
- Reduced motion on touch devices for better UX
- Responsive timing that works across all screen sizes

## 🔍 Debugging

If animations aren't working:

1. Check that Motion is properly installed
2. Verify the element has sufficient height to trigger the threshold
3. Ensure the parent container isn't clipping the animation
4. Check browser console for any errors

## 🎯 Performance Tips

- Use `threshold={0.1}` for early triggering
- Keep `duration` under 1 second for snappy feel
- Use `staggerDelay` sparingly to avoid overwhelming users
- Consider disabling animations on low-end devices

---

**Need help?** Check the [Motion documentation](https://motion.dev/docs/react-quick-start) for advanced features and troubleshooting.
