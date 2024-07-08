const content = {
  'introduction': {
    title: 'Introduction',
    body: `# Welcome to DocuBook
  
  This is a simple DocuBook application built with React.
  
  ## Features
  - Markdown support
  - Easy navigation
  - Customizable content
  - Responsive design
  
  Feel free to explore the different sections using the sidebar navigation.`
  },
  'react-basics': {
    title: 'React Basics',
    body: `# React Basics
  
  React is a JavaScript library for building user interfaces.
  
  ## Key Concepts
  
  1. **Components**: React applications are built using components. Components are reusable pieces of UI that can be composed together to create complex interfaces.
  
  2. **JSX**: JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to describe what the UI should look like.
  
  3. **State and Props**: State is data that can change over time within a component. Props are data passed from a parent component to a child component.
  
  ## Creating a Component
  
  Here's a simple example of a React component:
  
  \`\`\`jsx
  import React from 'react';
  
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  export default Welcome;
  \`\`\`
  
  This component can be used in another component like this:
  
  \`\`\`jsx
  <Welcome name="Alice" />
  \`\`\`
  
  React makes it easy to create interactive, reusable UI components.`
  },
  'translation-app': {
    title: 'Translation App User Guide',
    body: `
# 🌐 Translation App User Guide

![Translation App Logo](https://central.3bscientific.com/_images/3B_50x50_icon.png)


## 🚀 Introduction

Welcome to the Translation App, your gateway to efficient, integrated content translation!

> **Key Benefits:**
> - 🔗 Seamless integration with Web Central
> - 💰 Cost-effective solution
> - ⏱️ Time-saving workflows
> - 🔄 Automated publication process

---

## 🔑 Accessing the App

1. Log in to Web Central
2. Navigate to: \`Content\` > \`Translation App\`
3. Ensure you have the necessary permissions

> 🔒 **Note:** If you can't access the app, contact your system administrator.

---

## 🖥️ User Interface

### Header Navigation

- **Translator** 🌍: Main translation interface
- **Translations** 📋: 
  - General Translations
  - Product Translations
- **Import** 📤: Batch upload feature
- **Ticket** 🎫: Access support
- **Central** 🏠: Return to Web Central homepage

### Main Components

1. **Translation Tables** 📊
   - Filter by brand, language, and status
   - Click on rows to edit
2. **Edit Modal** ✏️
   - Side-by-side view of source and target text
   - Rich text editing capabilities
3. **Status Management** 🚦
   - Update translation status
   - Track progress through workflow

---

## 👥 Roles and Permissions

The Translation App offers three levels of access, each with increasing capabilities:

### 🔹 Level 1: Basic User
- Access to main translator interface (similar to Google Translate or DeepL)
- Can perform translations but cannot save them

> 💡 **Tip:** Perfect for quick, on-the-fly translations without database impact.

### 🔹🔹 Level 2: Translation Editor
All Level 1 capabilities, plus:
- Access to "Translations" menu with sub-options:
  - Product Translations
  - General Translations
- Ability to save translations
- Can edit content and update status in translation tables

> 🔑 **Key Feature:** Edit and manage translations across the system.

### 🔹🔹🔹 Level 3: Translation Publisher
All Level 1 and 2 capabilities, plus:
- "Publish" action button in Product Translations table
- Can publish translations directly to product description pages

> 🚀 **Power User:** Full control over translation workflow and publication.

| Feature | Level 1 | Level 2 | Level 3 |
|---------|:-------:|:-------:|:-------:|
| Basic Translation | ✅ | ✅ | ✅ |
| Save Translations | ❌ | ✅ | ✅ |
| Edit Stored Translations | ❌ | ✅ | ✅ |
| Publish to Product Pages | ❌ | ❌ | ✅ |

> ⚠️ **Note:** Contact your system administrator if you need a role change or have questions about your access level.

---

## 📝 Translation Management

### Viewing Translations

1. Go to "Product Translations" or "General Translations"
2. Use filters to narrow down the list
3. Observe key info: SAP Number, Languages, Status

### Editing Process

1. Click on a table row to open the edit modal
2. Source text on left, translation on right
3. Use the Quill editor for formatting
4. Maintain consistent styling with source

### Status Workflow

| Status | Meaning | Action |
|--------|---------|--------|
| 🟡 Pending | New translation | Review and edit |
| 🟢 Ready | Prepared for publish | Final check |
| 🔄 Rewrite | Needs revision | Partial rewrite |
| ✅ Complete | Published | No action needed |
| ❌ Deny | Rejected | Full regeneration |
| ⏹️ Cancelled | Not for use | Remove from workflow |

> 💡 **Tip:** Use status changes to communicate with team members about translation progress.

---

## 📦 Batch Upload

For bulk product translations:

1. Navigate to \`Import\` > \`Import Products\`
2. Upload CSV file with product details
3. Select target languages
4. Click "Translate"
5. Monitor progress bar
6. Save translations when complete

> ⚠️ **Important:** Ensure CSV format matches expected structure to avoid errors.

---

## 🌐 General Translations

For non-product content:

1. Access via \`Translations\` > \`General Translations\`
2. Interface similar to product translations
3. May have different fields based on content type

> 🔍 **Pro Tip:** Use this section for blogs, newsletters, and website content.

---

## 🛠️ Advanced Features

- **Character Count** 🔢: Visible for space-conscious translations
- **HTML Preservation** 📄: Maintains source formatting
- **Concurrent Processing** ⚡: Fast batch translations

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Can't access features | Check user permissions |
| Technical glitches | Use "Ticket" in header to contact support |
| Translation errors | Use "Rewrite" status |

> 📞 **Need Help?** Contact Timur James Tanurhan for support or feedback.

---

## ✨ Best Practices

1. 💾 Save work frequently
2. 🔍 Use filters effectively
3. 👀 Pay attention to context and tone
4. 📊 Ensure correct CSV formatting for batch uploads
5. 🔄 Utilize "Rewrite" for minor adjustments

> 🌟 **Remember:** Your feedback helps improve the app. Share your experiences!

---

**Thank you for using the Translation App!**

*This guide will be updated with new version releases. Last revision: 05.07.2024*
`
  },
};

export default content;
