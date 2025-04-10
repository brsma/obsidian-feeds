# ObsidianFeeds Development Guide

- The Obsidian Feeds plugin lets you create topic-specific bullet point feeds using code blocks. 
- It processes feed code blocks, leveraging Dataview to query notes based on criteria like tags and links. 
- Key components include the main plugin class, code block processor, and renderer. 
- Settings allow customization of filtering, pagination, and display options.

## Build Commands
- `pnpm run dev` - Start development server with hot reload
- `pnpm run build` - Build production bundle
- `pnpm run lint` - Run ESLint
- `pnpm run check-format` - Check code formatting with Prettier
- `pnpm run prettier` - Format code with Prettier

## Code Style
- **Formatting**: Use Prettier with 88 character line length, double quotes, trailing commas
- **Linting**: ESLint with TypeScript rules, max line length 120 characters
- **Imports**: Use path aliases with `~/` for src directory imports
- **Types**: Use TypeScript strict mode, explicitly define interfaces
- **Error Handling**: Use typed error handling with appropriate messages
- **Naming**: Use PascalCase for classes and interfaces, camelCase for variables/functions
- **Components**: Follow Obsidian plugin patterns for components
- **Code Structure**: Keep files focused on single responsibility

## Architecture
- This is an Obsidian plugin that creates feeds of topic-specific bullet points using code blocks. 
- Follow existing patterns for settings, rendering, and component structure.
